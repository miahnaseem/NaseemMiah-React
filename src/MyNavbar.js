import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
//   Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyNavbar.css'
import Contact from './Contact'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'

import { LinkContainer } from 'react-router-bootstrap'

function MyNavbar () {
  return (
    <Router>
      <div className='MyNavbar'>
        <div className='container-fluid'>
          <Navbar className='nav-fill' expand='md'>
            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='navbar1'>
              <Nav className='mr-auto'>
                <LinkContainer to='#0'>
                  <NavItem> Home </NavItem>
                </LinkContainer>
                <LinkContainer to='/portfolio'>
                  <NavItem> Portfolio </NavItem>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <NavItem> Contact </NavItem>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <NavItem> About </NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            {/* <Route path="/">
                <App />
            </Route> */}
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default MyNavbar
