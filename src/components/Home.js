import React, { Component } from 'react'
import './Home.css'
import styled from 'styled-components'

const Fade = styled.div`
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
`

const HomeText = styled.h1`
  color: white;
  font-family: 'OpenSans';
  -webkit-text-stroke-width: 3px;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <Fade>
          <HomeText> Welcome to My Personal Page </HomeText>
        </Fade>
      </div>
    )
  }
}

export default Home
