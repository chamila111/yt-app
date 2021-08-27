import React from 'react'
import './imglist.css'
import Imgcontainer from './Imgcontainer'
function Imglist(props) {
    const images = props.images.map((image) => {
        return <Imgcontainer key={image.id} image={image}/>
    })
  return (
    <div>
      <div className='img-list'>{images}</div>
    </div>
  )
}

export default Imglist;
