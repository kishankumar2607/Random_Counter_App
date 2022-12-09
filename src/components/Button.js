import React from 'react'
import './Counter.css';

const Button = ({onClick}) => {
  return (
    <>
        <div className='btn' onClick={onClick}>
            <h3>Click Me</h3>
        </div>
    </>
  )
}

export default Button

         

 