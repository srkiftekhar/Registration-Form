import React from 'react'

function Greet(props) {
  return (
    <div className='container card p-5  mt-4 register'>
      <h1>Thank you {props.name},</h1>
      <h2>For Registration.</h2>
      <h3>Verifiaction sent to {props.email}.</h3>
    </div>
  )
}

export default Greet
