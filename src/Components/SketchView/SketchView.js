import React from 'react';
import P5Wrapper from 'react-p5-wrapper'
import './SketchView.scss'
import sketch from '../../Sketches/sketch_02_29_2020';
import rightArrow from '../../Assets/Images/002-next.svg'
import leftArrow from '../../Assets/Images/001-back.svg'

const SketchView = () => {

  return (
    <div className='sketch-view'>
      <div className='sketch-and-nav'>
        <img className='arrow' src={leftArrow} />
        <P5Wrapper sketch={sketch} />
        <img className='arrow' src={rightArrow} />
      </div>
      <div className='signature'>
        <p>s. ertmer</p>
      </div>
    </div>

  )
}

export default SketchView