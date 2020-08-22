import React, { Component } from 'react'
import {
  BrowserRouter as Router
//   Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyNavbar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'
import { LinkContainer } from 'react-router-bootstrap'

class MyNavbar extends Component {
  render () {
    return (
      <Router>
        <div className='MyNavbar'>
          <div className='container-fluid'>
            <Navbar className='nav-fill' expand='md'>
              <Navbar.Brand href='#home'>Naseem Miah</Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='navbar1'>
                <Nav className='mr-auto'>
                  <LinkContainer to='/home'>
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
          </div>
        </div>
      </Router>
    )
  }
}

export default MyNavbar
