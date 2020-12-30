import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import img from './img/neutral1.png'
import logo from './img/navlogo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <div className='MyNavbar'>
            <div className='container-fluid'>
              <Navbar className='mr-auto' expand='sm'>
                <Navbar.Brand href='/'> <img className='navlogo img-responsive' src={logo} alt='NAS with line striked through' /> </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='navbar bg-white expand-sm sticky-top d-flex justify-content-around'>
                    <li>
                      <NavLink className='tags' activeClassName='active' to='/portfolio'>
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='tags' activeClassName='active' to='/contact'>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className='tags' activeClassName='active' to='/about'>
                        About Me
                      </NavLink>
                    </li>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <div className='component-container Container'>
            <header className='App-header' style={{ backgroundImage: 'url(' + img + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className='Container'>
                <Switch>
                  <Route path='/contact' component={Contact} />
                  <Route path='/portfolio' component={Portfolio} />
                  <Route path='/about' component={About} />
                  <Route path='/'>
                    <Home />
                  </Route>
                </Switch>
              </div>
            </header>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
