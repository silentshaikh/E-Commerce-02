import React from 'react'
import { useNavigate } from 'react-router-dom'
import PriceFormat from '../PriceFormat/PriceFormat';
function HCard(element) {
    const cardNavig= useNavigate();
    const {id,name,image,price,category} = element;
  return (
//    <NavLink to={`/buyproduct/${id}`}>
     <div className='card' onClick={() => cardNavig(`/buyproduct/${id}`)}>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{category}</figcaption>
      </figure>
      <div className="para">
        <p>{name}</p>
        <p><PriceFormat price={price}/></p>
      </div>
    </div>
//    </NavLink>
  )
}

export default HCard;
