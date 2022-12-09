import React, { useState, useEffect } from 'react'
import Button from './Button';
import './Counter.css';


const Counter = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);


  return (
    <>
      <div className='container'>
        <div className='mainDiv'>
          <div className='labelDiv'>
            <h1 className='label'>{count1}</h1>
          </div>

          <div className='labelDiv'>
            <h1>{count2}</h1>
          </div>

          <div className='labelDiv'>
            <h1>{count3}</h1>
          </div>
        </div>

        <div className='buttonDiv'>
          <Button />
        </div>
      </div>
    </>
  )
}

export default Counter;