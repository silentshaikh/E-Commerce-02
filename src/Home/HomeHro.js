import React from 'react'

function HomeHro({head,para,imags}) {
  return (
   <section className='container'>
    <div className="box1">
        <h3>Welcome to</h3>
        <h1>{head}</h1>
        <p>{para}</p>
        <button>Shop Now</button>
    </div>
    <div className="box2">
        <img src={imags} alt="homeImage" />
    </div>
   </section>
  )
}

export default HomeHro
