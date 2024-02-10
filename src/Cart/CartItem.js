import React from 'react'
import PriceFormat from '../PriceFormat/PriceFormat';
import IncDec from '../BuyProduct/IncDec';
import { PiTrashSimpleDuotone } from "react-icons/pi";
import { useCartContext } from '../Context/cartContext';
function CartItem({id,name,color,amount,price,image}) {
  const {removeItem,cartInc,cartDec} = useCartContext();
  
  return (
   <tr className='data'>
    <td  ><img src={image} className='tablImg' alt={name} /></td>
    <td ><PriceFormat price={price}/></td>
    <td><IncDec amon={amount} inca={() => cartInc(id)} deca={() => cartDec(id)}/></td>
    <td ><PriceFormat price={price*amount}/></td>
    <td className='icnDta'><PiTrashSimpleDuotone className='tableIcn' onClick={() => removeItem(id)}/></td>
   </tr>
  )
}

export default CartItem;
