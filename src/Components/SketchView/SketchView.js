import React from 'react';
import P5Wrapper from 'react-p5-wrapper'
import './SketchView.scss'
import sketch from '../../Sketches/sketch_02_29_2020';

const SketchView = () => {

  return (
    <div className='sketch-view'>
      <P5Wrapper sketch={sketch} />
      <div className='signature'>
        <p>s. ertmer</p>
      </div>
    </div>

  )
}

export default SketchView