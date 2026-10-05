import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Layout from './components/Layout.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Projects from './pages/Projects.tsx'
import './styles/global.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      // Old URL from the previous version of the site.
      { path: 'portfolio', element: <Projects /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
