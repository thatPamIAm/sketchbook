import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper'
import './SketchView.scss'
import * as sketches from '../../Sketches/sketchbook';
import rightArrow from '../../Assets/Images/002-next.svg'
import leftArrow from '../../Assets/Images/001-back.svg'

const SketchView = () => {
  const sketchNames = Object.keys(sketches)
  console.log(sketchNames)
  const [count, setCount] = useState(0)
  return (
    <div className='sketch-view'>
      <div className='sketch-and-nav'>
        <img
          className='arrow'
          src={leftArrow}
          onClick={() => setCount(count - 1)}
        />
        <P5Wrapper sketch={sketches[sketchNames[count]]} />
        <img
          className='arrow'
          src={rightArrow}
          onClick={() => setCount(count + 1)}
        />
      </div>
      <div className='meta-data'>
        <p>{sketchNames[count]}</p>
        <p>s. ertmer</p>
      </div>
    </div>

  )
}

export default SketchView