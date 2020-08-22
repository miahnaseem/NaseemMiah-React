import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    window.alert('The form was not submitted (Still learning FaunaDB) ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label className='col-form-label' htmlFor='senderName'>Your Name:</label>
          <input className='form-control' type='text' id='senderName' />
        </div>
        <div className='form-group'>
          <label className='col-form-label' htmlFor='senderEmail'>Your Email:</label>
          <input className='form-control' type='text' id='senderEmail' />
        </div>
        <div className='form-group'>
          <label className='col-form-label' htmlFor='messageText'>Message: </label>
          <textarea className='form-control' id='messageText' />
        </div>
      </form>
    )
  }
}

export default Form
