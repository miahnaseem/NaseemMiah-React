import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import img from './img/neutral.png'
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
                    <Nav.Link href='/portfolio'> Portfolio </Nav.Link>
                    <Nav.Link href='/contact'> Contact </Nav.Link>
                    <Nav.Link href='/about'> About Me </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>

          <header className='App-header' style={{ backgroundImage: 'url(' + img + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='Container'>
              <Switch>
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
