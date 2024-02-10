import React, { useEffect, useState } from 'react'

function Images({imgs= [{url:''}] }) {
    const [headImg,setHeadImg] = useState(imgs[0]);
  useEffect(() => {
    setHeadImg(imgs[0]);
  },[imgs])
  return (
    <div className='images'>
      <img className='headImg' src={headImg.url} alt={headImg.filename} />
      <div className="imgList">
        {imgs.map((element,index) => {
            return(
                <img key={index} src={element.url} alt={element.filename} onClick={() => setHeadImg(element)}/>
            );
        })}
      </div>
    </div>
  )
}

export default Images
