import React, { Component } from 'react'
import './About.css'
import NYC from '../img/andre-benz-CR0E20Of7yU-unsplash.jpg'
import Code from '../img/clement-h-95YRwf6CNw8-unsplash.jpg'
import Thanks from '../img/priscilla-du-preez-yO12O8j3JK0-unsplash.jpg'

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
              <div class='carousel slide carousel-fade' id='captionedCarousel' data-ride='carousel'>
                <ol class='carousel-indicators'>
                  <li class='active' data-target='#captionedCarousel' data-slide-to='0' />
                  <li data-target='#captionedCarousel' data-slide-to='1' />
                  <li data-target='#captionedCarousel' data-slide-to='2' />
                </ol>
                <div class='carousel-inner'>
                  <div class='carousel-item active'><img class='d-block w-100' src={NYC} alt='Ariel view of New York at night' />
                    <div class='carousel-caption d-none d-md-block'>
                      <h5>Where am I From?</h5>
                      <p>The city that never sleeps, NYC</p>
                    </div>
                  </div>
                  <div class='carousel-item'><img class='d-block w-100' src={Code} alt='Closeup of express code' />
                    <div class='carousel-caption d-none d-md-block'>
                      <h5>What do I do?</h5>
                      <p>Make sites like the one you're viewing now!</p>
                    </div>
                  </div>
                  <div class='carousel-item'><img class='d-block w-100' src={Thanks} alt='Thank you spelled out by scrabble blocks' />
                    <div class='carousel-caption d-none d-md-block'>
                      <h5>Why do I do it?</h5>
                      <p>Because of everyone who provides feedback and support after visiting</p>
                    </div>
                  </div>
                </div><a class='carousel-control-prev' href='#captionedCarousel' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true' /><span class='sr-only'>Previous</span></a><a class='carousel-control-next' href='#captionedCarousel' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true' /><span class='sr-only'>Next</span></a>
              </div>
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
