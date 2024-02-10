import React from 'react'
import { useCartContext } from '../Context/cartContext';
import '../Cart/Cart.css';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import PriceFormat from '../PriceFormat/PriceFormat';
function Cart() {
  const {cart,clearCart,totalAmount,shippingFree} = useCartContext();
  console.log(cart);
  const prodRet = useNavigate();
  if(cart.length === 0){
    return <div className='noCart'><h1>No Cart Item</h1></div>
  }else{
  return (
    <section className='cartMain'>
    <table border={1} className="containerCart">
      <thead className="cart_head">
      <tr>
          <th >Item</th>
        <th  className="cart-hide">Price</th>
        <th >Quantity</th>
        <th  className="cart-hide">Subtotal</th>
        <th >Remove</th>
      </tr>
     </thead>
     <tbody>
      {
        cart.map((e) => {
          return <CartItem key={e.id} {...e} />
        })
      }
      </tbody>
    </table>
    <div className="flexCartBtn">
      <button className='conti' onClick={() => prodRet('/product')}>Continue Shopping</button>
      <button className='clear' onClick={clearCart}>Clear Cart</button>
    </div>
    <div className="totalCart">
      <div className="totalprice">
        <h5>Subtotal : </h5>
        <h5> <PriceFormat price={totalAmount}/> </h5>
      </div>
      <div className="totalprice">
        <h5>Shipping Fee : </h5>
        <h5> <PriceFormat price={shippingFree}/> </h5>
      </div>
      <div className="totalprice">
        <h5>Total Amount : </h5>
        <h5><PriceFormat price={totalAmount+shippingFree}/></h5>
      </div>
    </div>
    </section>
  
  )
}
}

export default Cart;
