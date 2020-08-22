import React, { Component } from 'react'
import Form from './Form'
import './Portfolio.css'
import GEDCOMoutput from '../img/GEDCOMoutput.png'
import CHUGG from '../img/CHUGG.PNG'
import CCE from '../img/cce-search.PNG'
import Home from '../img/homepage.PNG'

class Portfolio extends Component {
  render () {
    return (
      <div className='Portfolio'>
        <div className='Container pt-4 pl-4'>
          <div className='row mw-100 mr-0'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img className='card-img-top' src={GEDCOMoutput} alt='Terminal Output Displaying Gedcom Analysis' />
                    <div className='card-body'>
                      <h5 className='card-title'>GEDCOM File Analysis</h5>
                      <p className='card-text'>Working as an Agile Development team, we made a GEDCOM file reader that catches errors and anomalies in the file.</p><a className='btn btn-primary d-flex justify-content-center' href='https://github.com/miahnaseem/SSW555_DRAIN' target='_blank' rel='noopener noreferrer'>Repo</a>
                    </div>
                  </div>
                  <div className='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img className='card-img-top' src={CHUGG} alt='CHUGGED front page' />
                    <div className='card-body'>
                      <h5 className='card-title'>CHUGGED</h5>
                      <p className='card-text'>For my Web Dev I final project, we created a bartending website that facilitated user submissions and accounts.</p><a className='btn btn-primary d-flex justify-content-center' href='https://github.com/tmitche2/cs546' target='_blank' rel='noopener noreferrer'>Repo</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img className='card-img-top' src={CCE} alt='Two screenshots, one for the copyright search interface and another as the output for a search query' />
                    <div className='card-body'>
                      <h5 className='card-title'>CCE-Search-Prototype</h5>
                      <p className='card-text'>My Senior Capstone, a website to search for uncopyrighted literature. I developed the database and briefly hosted the site for our client on AWS.</p><a className='btn btn-primary d-flex justify-content-center' href='https://github.com/tmitche2/cce-search-prototype' target='_blank' rel='noopener noreferrer'>Repo</a>
                    </div>
                  </div>
                  <div className='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img className='card-img-top' src={Home} alt='The Home Page of this website' />
                    <div className='card-body'>
                      <h5 className='card-title'>This Website!</h5>
                      <p className='card-text'>A personal side project to keep me up to date with modern web dev infrastructure.</p><a className='btn btn-primary d-flex justify-content-center' href='https://github.com/miahnaseem/naseemmiah.io' target='_blank' rel='noopener noreferrer'>Repo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='jumbotron'>
                <h4 className='display-4 pb-3'>Request my résumé</h4>
                <p>Please fill out this short form and I'll send my résumé out to you </p>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
