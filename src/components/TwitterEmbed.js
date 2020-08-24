import React, { useEffect } from 'react'

const TwitterEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.getElementsByClassName('twitter-embed')[0].appendChild(script)
  }, [])

  return (
    <section className='twitterContainer'>
      <div className='twitter-embed'>
        <a
          className='twitter-timeline'
          data-theme='light'
          data-tweet-limit='1'
          data-chrome='noheader nofooter noborders'
          href='https://twitter.com/LuckyBreeze_'
        >
          Tweets by me
        </a>
      </div>
    </section>
  )
}

export default TwitterEmbed
