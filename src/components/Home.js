import React, { Component } from 'react'
import './Home.css'
import styled from 'styled-components'
// Import the HTML content directly as a string (via your asset/source loader)
import notebookSrc from '../data/Batch Modeling.html'

const Fade = styled.div`
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
`

const HomeText = styled.h1`
  color: white;
  font-family: 'OpenSans';
  -webkit-text-stroke-width: 3px;
  user-select: none;
`

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcome: true,
    };
  }

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.setState({ showWelcome: false });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render () {

    const baseTag = '<base href="about:srcdoc" target="_self">';
    const safeHtml = baseTag + notebookSrc;

    return (
      <div className='Home'>
        {this.state.showWelcome ?
        <Fade>
          <HomeText> Welcome to My Personal Page </HomeText>
        </Fade> :
        <div>
          <br></br>
          <h4> Welcome to My Personal Page</h4>
          <hr></hr>
          <div>
              <br></br>
              <h4>Check out my latest Project:</h4>
              <h4>Early Prediction of Lithium Ion Batteries</h4>
              <a href="https://github.com/miahnaseem/NaseemMiah-React" target="_blank" rel='noopener noreferrer'>Github</a>
          </div>
          <row>
            <div>
              {/* Use notebookSrc directly as it is now a string thanks to Webpack */}
              <iframe 
                srcDoc={safeHtml}
                sandbox="allow-scripts allow-same-origin"  
                width="1000" 
                height="1200" 
                title="Early Prediction of Lithium Ion Batteries"
              >
                Your browser does not support iframes.
              </iframe>
            </div>
          </row>
        </div>
        }
      </div>
    )
  }
}

export default Home