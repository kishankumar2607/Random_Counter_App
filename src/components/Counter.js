import React, { useState } from 'react'
import Button from './Button';
import './Counter.css';


const Counter = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  function randomNumber(min, max) {
    return (
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  }

  const handleClick = () => {
    setCount1(randomNumber(1000, 5000));
    setCount2(randomNumber(1000, 5000));
    setCount3(randomNumber(1000, 5000));
  };

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
          <Button onClick={handleClick} />
        </div>
      </div>
    </>
  )
}

export default Counter;