import React, { Component } from 'react'
import './About.css'
import NYC from '../img/andre-benz-CR0E20Of7yU-unsplash.jpg'
import Code from '../img/clement-h-95YRwf6CNw8-unsplash.jpg'
import Thanks from '../img/priscilla-du-preez-yO12O8j3JK0-unsplash.jpg'
import Carousel from 'react-bootstrap/Carousel'

class About extends Component {
  render () {
    return (
      <div className='About'>
        <div class='container pt-4 mw-100'>
          <div class='row'>
            <div class='container col-xl-3 pb-4'>
              <div class='container pb-3'>
                <div class='card p-3 pr-1' style={{ width: '103%' }}>
                  <div class='card-header'>My quote of the day</div>
                  <div class='card-body'>
                    <blockquote class='blockquote mb-0'>
                      <p>“Forty-two,”</p>
                      <footer class='blockquote-footer'>Deep Thought in
                        <cite title='Source Title'>The Hitchhiker's Guide to the Galaxy</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class='container'>
                <div class='card p-3 pr-1 mx-auto' style={{ width: '70%' }}><img class='card-img-top img-responsive' src='https://imagine.gsfc.nasa.gov/hst_bday/images/october-17-2019-cartwheel-galaxy.jpg' alt='cartwheel galaxy taken by the Hubble Telescope' />
                  <div class='card-body'>
                    <h5 class='card-title'>My birthday</h5>
                    <p class='card-text'>I was born October 17, 1998. On the same day, 1996, Hubble Telescope snapped this picture of the Cartwheel galaxy.</p><a class='btn btn-primary' href='https://www.nasa.gov/content/goddard/what-did-hubble-see-on-your-birthday' target='_blank' rel='noopener noreferrer'>Find your birthday discovery</a>
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
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div class='col-xl-3 pb-4'>
              <div class='jumbotron jumbotron-fluid'>
                <div class='container'>
                  <h2 class='display-5 pb-3'>What can I do for you?</h2><br />
                  <p id='list'>UI/UX</p>
                  <p id='list'>Vanilla Js + Jquery</p>
                  <p id='list'>Web hosting</p>
                  <p id='list'>SEO
                    <p class='pt-5 lead'>
                      I am looking for work and hoping you're looking for someone that can get the job done.
                      Please take a look at my project experience under the Portfolio tab, and/or request my
                      résumé. I might just be what you're looking for :)
                    </p>
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
