import React, { useState,useEffect } from 'react';
import { TiTickOutline } from "react-icons/ti";
import IncDec from './IncDec';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCartContext } from '../Context/cartContext';
function AddCart({prod}) {
  const {addToCart} = useCartContext();
    const {id,colors,stock} = prod;
    const [tick,upTick] = useState(colors[0]);
    const [amount,upAmount] = useState(1)
    useEffect(() => {
        upTick(colors[0]);
      },[colors])
      const numInc = () => {
        amount<stock? upAmount(amount+1):upAmount(stock)
      }
      const numDec = () => {
        amount>1? upAmount(amount-1):upAmount(1)
      }
      // const addNavig = useNavigate();
  return (
    <>
      <div className='colorCar'>
    <h3>Colors: </h3>
      {colors.map((e,i) => {
        return(
            <button key={i} style={{backgroundColor:e,}} onClick={() => upTick(e)}>{tick===e?<TiTickOutline className='tick'/>:null}</button>
        );
      })}
    </div>
    <IncDec amon={amount} inca={numInc} deca={numDec}/>
    <NavLink to='/cart' onClick={() => addToCart(id,tick,amount,prod)}>
  <button className='btn' >Add to Cart</button>
    </NavLink>
    </>
  )
}

export default AddCart
