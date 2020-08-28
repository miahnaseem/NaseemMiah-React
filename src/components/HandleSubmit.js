import React from 'react'

class HandleSubmit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    window.alert('Still learning how to handle client-side form submissions. If you have advice please email me at miahnaseem@gmail.com ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <button onClick={this.handleSubmit}> Send me a Message </button>
    )
  }
}

export default HandleSubmit
