import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../Reducer/CartReducer';
const CartApp = createContext();
const CartProvider = ({children}) => {
    const getLocalDta = () => {
        let getDta = localStorage.getItem('M-STORE');
        if(getDta == []){
            return [];
        }else{
            return JSON.parse(getDta)
        }
    }
    const initailState = {
        cart: getLocalDta(),
        totalItem:'',
        totalAmount:'',
        shippingFree:50000,
    };
    const [state,dispatch] = useReducer(reducer,initailState);
    const addToCart = (id,tick,amount,prod) => {
        dispatch({type:'ADD_TO_CART',payload:{id,tick,amount,prod}})
    }
    const removeItem = (id) => {
        dispatch({type:'REMOVE_ITEM',payload:id});
    }
    const cartInc = (id) => {
        dispatch({type:'CART_INC',payload:id})
      }
      const cartDec = (id) => {
        dispatch({type:'CART_DEC',payload:id})
        
      } 
    useEffect(() => {
        dispatch({type:'TOTAL_CART_ITEM'});
        dispatch({type:'TOTAL_CART_AMOUNT'});
        localStorage.setItem('M-STORE',JSON.stringify(state.cart))
    },[state.cart]);
    const clearCart = () => {
        dispatch({type:'CLEAR_CART'});
    }
    return(
        <CartApp.Provider value={{...state,addToCart,removeItem,clearCart,cartInc,cartDec}}>{children}</CartApp.Provider>
    );
}
const useCartContext = () => {
    return useContext(CartApp);
}
export {CartProvider,useCartContext};