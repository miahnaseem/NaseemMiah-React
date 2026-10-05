# --- Build stage -------------------------------------------------------------
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# GITHUB_TOKEN is optional; without it the committed repo snapshot is used.
ARG GITHUB_TOKEN
RUN GITHUB_TOKEN=$GITHUB_TOKEN npm run build

# --- Serve stage -------------------------------------------------------------
FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
