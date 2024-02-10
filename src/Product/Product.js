import React, { useEffect } from 'react';
// import { useGlobalContext } from '../Context/prodContext';
import { useFiltContext } from '../Context/filtContext';
// import Search from './Search';
import FlexItem from './FlexItem';
import ListItem from './ListItem';

function Product() {
  const {filtProduct,flexView} = useFiltContext();
  // console.log(filtProduct)
  if(flexView === true){
    return <FlexItem product={filtProduct}/>
  }else{
    return <ListItem product={filtProduct}/>
  }
 
}

export default Product;
// Product