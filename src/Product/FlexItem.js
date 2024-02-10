import React from 'react'
import HCard from '../Home/HCard'

function FlexItem({product}) {
return (
   <div className="prodCard">
    {product.map((e,i) => {
        return <HCard key={e.id} {...e} />
    })}
   </div>
  )
}

export default FlexItem
