import React from 'react'

class LoadSlide extends React.Component {
  componentDidMount () {
    var onLoad = () => {
      setTimeout(function () {
        document.getElementById('#captionedCarousel').removeClass('d-none')
        document.getElementById('#spinner').style.display = 'none'
      }, 800)
    }

    if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
      onLoad()
    } else {
      document.addEventListener('DOMContentLoaded', onLoad)
    }
  }
}

export default LoadSlide
