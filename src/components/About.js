import React, { Component } from 'react'
import './About.css'
import NYC from '../img/NYC.jpg'
import Code from '../img/laptop.jpg'
import Thanks from '../img/priscilla-du-preez-yO12O8j3JK0-unsplash.jpg'
import Carousel from 'react-bootstrap/Carousel'

class About extends Component {
  render () {
    return (
      <div className='About'>
        <div class='container pt-5 mt-4 mw-100'>
          <div class='row'>
            <div class='container col-xl-3'>
              <div class='container pb-3'>
                <div class='card p-3 pr-1' style={{ width: '103%' }}>
                  <div class='card-header'>My quote of the day</div>
                  <div class='card-body'>
                    <blockquote class='blockquote mb-0'>
                      <p>“Forty-two,”</p>
                      <div class='source'>
                        <footer class='blockquote-footer'>Deep Thought in
                          <cite title='Source Title'> The Hitchhiker's Guide to the Galaxy</cite>
                        </footer>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class='container' id='birthdayCardContainer'>
                <div id='birthdayCard'>
                  <div class='card p-3 mx-auto'><img class='card-img-top img-responsive' src='https://imagine.gsfc.nasa.gov/hst_bday/images/october-17-2019-cartwheel-galaxy.jpg' alt='cartwheel galaxy taken by the Hubble Telescope' />
                    <div class='card-body'>
                      <h4 class='card-title'>My birthday</h4>
                      <p class='card-text'>I was born October 17, 1998. On the same day, 1996, Hubble Telescope snapped this picture of the Cartwheel galaxy.</p><a class='btn btn-primary' href='https://www.nasa.gov/content/goddard/what-did-hubble-see-on-your-birthday' target='_blank' rel='noopener noreferrer'>Find your birthday discovery</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='container col-xl-6 pb-4'>
              {/* <div class='d-flex justify-content-center'>
                <div class='spinner-border text-light' role='status' id='spinner'><span class='sr-only'>Loading</span></div>
              </div> */}
              <Carousel>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={NYC}
                    alt='First slide'
                  />
                  <div class='carousel-caption'>
                    <Carousel.Caption>
                      <h3>Where am I from?</h3>
                      <p>The city that never sleeps, New York</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={Code}
                    alt='Third slide'
                  />
                  <div class='carousel-caption'>
                    <Carousel.Caption>
                      <h3>What do I do?</h3>
                      <p>Make sites like the one you're viewing now</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={Thanks}
                    alt='Third slide'
                  />
                  <div class='carousel-caption'>
                    <Carousel.Caption>
                      <h3>Why do I do it?</h3>
                      <p>Because of I love it and I love seeing your feedback and support</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div class='col-xl-3 pb-4'>
              <div class='jumbotron jumbotron-fluid' id='aboutJumbotron'>
                <div class='container'>
                  <h4 class='display-4'>What can I do for you?</h4><br />
                  <hr />
                  <p id='list'>UI/UX</p>
                  <p id='list'>Vanilla Js + Jquery</p>
                  <p id='list'>Web hosting</p>
                  <p id='list'>SEO</p>
                  <p class='pt-5 lead'>
                    I am looking for work and hoping you're looking for someone that can get the job done.
                    Please take a look at my project experience under the Portfolio tab, and/or request my
                    résumé. I might just be what you're looking for :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
