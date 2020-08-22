import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'
import { LinkContainer } from 'react-router-bootstrap'
import img from './img/peter-olexa-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div className='MyNavbar'>
            <div className='container-fluid'>
              <Navbar className='nav-fill' expand='md'>
                <Navbar.Brand href='/'>Naseem Miah</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='navbar1'>
                  <Nav className='mr-auto'>
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

          <header className='App-header' style={{ backgroundImage: 'url(' + img + ')' }}>
            <div className='Container'>
              <Switch>
                {/* <Route path="/">
                  <App />
                </Route> */}
                <Route exact path='/'>
                  <Redirect to='/home' />
                </Route>
                <Route path='/home' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/about' component={About} />
              </Switch>
            </div>
          </header>
        </Router>
      </div>
    )
  }
}

export default App
