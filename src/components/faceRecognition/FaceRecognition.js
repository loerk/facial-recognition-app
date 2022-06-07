import React from 'react'
import "./FaceRecognition.css"

function FaceRecognition({ imageURL, box }) {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id="inputImage" alt="User defined" src={imageURL} width="500px" height="auto" />
        <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  )
}

export default FaceRecognition