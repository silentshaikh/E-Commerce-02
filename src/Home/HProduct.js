import React from 'react'
import { useGlobalContext } from '../Context/prodContext';
import HCard from './HCard';
function HProduct() {
    const {pgLoad,homProduct} = useGlobalContext();
    console.log(homProduct)
    if(pgLoad){
        return <div>Loading....</div>
    }
  return (
    <section className='servic'>
        <h3>CHECK HERE..</h3>
        <h1>OUR FEATURED PRODUCT</h1>
        <div className="imgBox">
        {homProduct.map((element) => {
            return(
                <HCard key={element.id} {...element}/>
            );
        })}
        </div>
    </section>
  )
}

export default HProduct
