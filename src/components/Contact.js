import React, { useState } from 'react'
import './Contact.css'
import TwitterEmbed from './TwitterEmbed'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Contact () {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='Contact'>
      <div className='container pt-4 mw-100'>
        <div class='row'>

          <div class='container col-xl-4'>
            <div class='jumbotron p-3 mb-5 bg-white rounded'>
              <h4 class='display-3 pb-5'>Have some feedback?</h4>
              <Button variant='primary' size='lg' onClick={handleShow}>Send me a message</Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Email</Modal.Title>
                </Modal.Header>
                <Modal.body>
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
                </Modal.body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
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
};

export default Contact
