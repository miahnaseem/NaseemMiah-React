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
        <div class='row pt-4'>
          <div class='col-md-8'>
            <div class='row'>
              <div class='col-md-6'>
                <div class='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img class='card-img-top' src={GEDCOMoutput} alt='Terminal Output Displaying Gedcom Analysis' />
                  <div class='card-body'>
                    <h5 class='card-title'>GEDCOM File Analysis</h5>
                    <p class='card-text'>Working as an Agile Development team, we made a GEDCOM file reader that catches errors and anomalies in the file.</p><a class='btn btn-primary d-flex justify-content-center' href='https://github.com/miahnaseem/SSW555_DRAIN' target='_blank' rel='noopener noreferrer'>Repo</a>
                  </div>
                </div>
                <div class='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img class='card-img-top' src={CHUGG} alt='CHUGGED front page' />
                  <div class='card-body'>
                    <h5 class='card-title'>CHUGGED</h5>
                    <p class='card-text'>For my Web Dev I final project, we created a bartending website that facilitated user submissions and accounts.</p><a class='btn btn-primary d-flex justify-content-center' href='https://github.com/tmitche2/cs546' target='_blank' rel='noopener noreferrer'>Repo</a>
                  </div>
                </div>
              </div>
              <div class='col-md-6'>
                <div class='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img class='card-img-top' src={CCE} alt='Two screenshots, one for the copyright search interface and another as the output for a search query' />
                  <div class='card-body'>
                    <h5 class='card-title'>CCE-Search-Prototype</h5>
                    <p class='card-text'>My Senior Capstone, a website to search for uncopyrighted literature. I developed the database and briefly hosted the site for our client on AWS.</p><a class='btn btn-primary d-flex justify-content-center' href='https://github.com/tmitche2/cce-search-prototype' target='_blank' rel='noopener noreferrer'>Repo</a>
                  </div>
                </div>
                <div class='card p-3 text-white bg-dark mb-3' style={{ width: '5 rem' }}><img class='card-img-top' src={Home} alt='The Home Page of this website' />
                  <div class='card-body'>
                    <h5 class='card-title'>This Website!</h5>
                    <p class='card-text'>A personal side project to keep me up to date with modern web dev infrastructure.</p><a class='btn btn-primary d-flex justify-content-center' href='https://github.com/miahnaseem/naseemmiah.io' target='_blank' rel='noopener noreferrer'>Repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='jumbotron'>
              <h4 class='display-4 pb-3'>Request my résumé</h4>
              <p>Please fill out this short form and I'll send my résumé out to you </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
