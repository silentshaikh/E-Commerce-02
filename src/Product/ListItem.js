import React from 'react'
// import HCard from '../Home/HCard'
import ListCard from './ListCard';

function ListItem({product}) {
  return (
    <div>
      {product.map((e,i) => {
        return <ListCard key={e.id} {...e}/>
      })}
    </div>
  )
}

export default ListItem;
