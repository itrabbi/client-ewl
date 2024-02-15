import React from 'react'
import { Link } from 'react-router-dom'
import  Error  from  "../images/404.svg"

function ErrorPage() {
  return (
    <section className='error-page'>
        <div className="center">
          <img className='page-not-found' src={Error} alt="404,Page Not Found" />
          <Link to="/" className='btn primary'>Go Back Home</Link>
        </div>
    </section>
  )
}

export default ErrorPage