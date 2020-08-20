import React, { Component } from 'react'
import './Contact.css'
import TwitterEmbed from './TwitterEmbed'

class Contact extends Component {
  render () {
    return (
      <div className='Contact'>
        <div className='container pt-4 mw-100'>
          <div class='row'>

            <div class='container col-xl-4'>
              <div class='jumbotron p-3 mb-5 bg-white rounded'>
                <h4 class='display-3 pb-5'>Have some feedback?</h4>
                <button class='btn btn-primary btn-lg d-flex justify-content-center' data-toggle='modal' data-target='#emailModal' data-whatever='@meh'>Send me a message</button>
                <div class='modal fade' id='emailModal' tabindex='-1' aria-labelledby='feedbackEmail' aria-hidden='true'>
                  <div class='modal-dialog'>
                    <div class='modal-content'>
                      <div class='modal-header'>
                        <h5 class='modal-title' id='feedbackEmail'>Email</h5>
                        <button class='close' type='button' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
                      </div>
                      <div class='modal-body'>
                        <form>
                          <div class='form-group'>
                            <label class='col-form-label' for='senderName'>Your Name:</label>
                            <input class='form-control' type='text' id='senderName' />
                          </div>
                          <div class='form-group'>
                            <label class='col-form-label' for='senderEmail'>Your Email:</label>
                            <input class='form-control' type='text' id='senderEmail' />
                          </div>
                          <div class='form-group'>
                            <label class='col-form-label' for='messageText'>Message: </label>
                            <textarea class='form-control' id='messageText' />
                          </div>
                        </form>
                      </div>
                      <div class='modal-footer'>
                        <button class='btn btn-secondary' type='button' data-dismiss='modal'>Close</button>
                        <button class='btn btn-primary' type='button'>Send Message</button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <a class='btn btn-primary btn-lg' href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>Visit my LinkedIn</a>
              </div>
            </div>

            <div class='container col-xl-4'>
              <div class='jumbotron p-3 mb-5 bg-white rounded'>
                <h4 class='display-3 pb-5'>Looking for Freelance services?</h4><a class='btn btn-success btn-lg d-flex justify-content-center' href='https://www.upwork.com/' target='_blank' rel='noopener noreferrer'>Upwork</a>
                <hr />
                <a class='btn btn-success btn-lg d-flex justify-content-center' href='https://www.fiverr.com/' target='_blank' rel='noopener noreferrer'>Fiverr</a>
                <hr />
                <a class='btn btn-success btn-lg d-flex justify-content-center' href='https://twitter.com/LuckyBreeze_' target='_blank' rel='noopener noreferrer'>Freelancer</a>
              </div>
            </div>

            <div class='container col-xl-4'>
              {/* <!--Twitter API--> */}
              <TwitterEmbed />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Contact
