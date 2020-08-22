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
    )
  }
}

export default Form
