import React from 'react'
import PriceFormat from '../PriceFormat/PriceFormat'
import { useNavigate } from 'react-router-dom'

function ListCard({id,name,image,price,description}) {
    const listNavig = useNavigate()
  return (
    <div className='ListCard'>
      <img src={image} alt={name} />
      <div className="detl">
        <h2>{name}</h2>
        <h5> <PriceFormat price={price}/> </h5>
        <p>{description.slice(0,99)}...</p>
        <button onClick={() => listNavig(`/buyproduct/${id}`)}>Read More...</button>
      </div>
    </div>
  )
}

export default ListCard
