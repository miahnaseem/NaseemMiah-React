import React from 'react'
// import logo from './logo.svg'
import './App.css'
import MyNavbar from './MyNavbar'
import img from './img/peter-olexa-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <div className='App' style={{ backgroundImage: 'url(' + img + ')' }}>
      <MyNavbar />
      <header className='App-header'>
        <div id='fadeOnLoad'>
          <h1>Welcome To My</h1>
          <h1>Personal Page</h1>
        </div>
      </header>
    </div>
  )
}

export default App
