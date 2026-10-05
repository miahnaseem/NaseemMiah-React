import { Link } from 'react-router'

export default function NotFound () {
  return (
    <div className='container' style={{ textAlign: 'center', paddingBlock: '4rem' }}>
      <h1>Page not found</h1>
      <p>That page doesn’t exist, but my projects do.</p>
      <Link className='button' to='/'>Back home</Link>
    </div>
  )
}
