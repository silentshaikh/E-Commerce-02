import React from 'react';
import '../Product/Product.css';
import Product from './Product';
import Filt from './Filt';
import Sort from './Sort';
function Products() {
  return (
    <section >
    <Sort/>
    <div className='productCont'>
    <Filt/>
    <Product/>
    </div>
    </section>
  )
}

export default Products
