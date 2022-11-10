import React from 'react'
require('./error.css');

const Error = () => {
  return (
    <div className='error-container'>
      <div className='error-404'>
           ERROR : 404 
      <h1>Page Not Found</h1>
      <a href='./'>back to home</a>
      </div>
      
    </div>
  )
}

export default Error