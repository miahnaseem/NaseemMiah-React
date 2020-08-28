import React, { useState } from 'react'
import './Contact.css'
import TwitterEmbed from './TwitterEmbed'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import HandleSubmit from './HandleSubmit'

function Contact () {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='Contact'>
      <div className='container pt-5 mt-5 mw-100'>
        <div className='row'>
          <div className='container col-xl-4'>
            <div className='jumbotron p-3 mb-5 bg-white rounded'>
              <h4 className='display-3 pb-5'>Have some feedback?</h4>
              <Button variant='primary' size='lg' onClick={handleShow}>Send me a message</Button>

              <Modal show={show} onHide={handleClose} className='myModal'>
                <Modal.Header closeButton>
                  <Modal.Title className='modalTitle'>Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='form-group'>
                    <label className='col-form-label' for='senderName'>Your Name:</label>
                    <input className='form-control' type='text' id='senderName' />
                  </div>
                  <div className='form-group'>
                    <label className='col-form-label' for='senderEmail'>Your Email:</label>
                    <input className='form-control' type='text' id='senderEmail' />
                  </div>
                  <div className='form-group'>
                    <label className='col-form-label' for='messageText'>Message: </label>
                    <textarea className='form-control' id='messageText' />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <HandleSubmit />
                </Modal.Footer>
              </Modal>

              <hr />
              <a className='btn btn-primary btn-lg' href='https://www.linkedin.com/in/naseem-m-16868583/' target='_blank' rel='noopener noreferrer'>Visit my LinkedIn</a>
            </div>
          </div>

          <div className='container col-xl-4'>
            <div className='jumbotron p-3 mb-5 bg-white rounded'>
              <h4 className='display-3 pb-5'>Looking for Freelance services?</h4><a className='btn btn-success btn-lg d-flex justify-content-center' href='https://www.upwork.com/o/profiles/users/~01f29db94e7df962ba/' target='_blank' rel='noopener noreferrer'>Upwork</a>
              <hr />
              <a className='btn btn-success btn-lg d-flex justify-content-center' href='https://www.fiverr.com/naseemmiah' target='_blank' rel='noopener noreferrer'>Fiverr</a>
              <hr />
              <a className='btn btn-success btn-lg d-flex justify-content-center' href='https://www.freelancer.com/u/miahnaseem' target='_blank' rel='noopener noreferrer'>Freelancer</a>
            </div>
          </div>

          <div className='container col-xl-4'>
            {/* <!--Twitter API--> */}
            <TwitterEmbed />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact
