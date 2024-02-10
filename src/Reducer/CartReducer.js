function CartReducer(state,action) {
 if(action.type == 'ADD_TO_CART'){
    let {id,tick,amount,prod} = action.payload;
    // console.log(tick);
    let existProduct = state.cart.find((e) => e.id === id+tick);
    if(existProduct){
        let updprod = state.cart.map((e) => {
            if(e.id === id+tick){
                let nAmoun = e.amount + amount;
                if(nAmoun >= e.maxStk){
                    nAmoun = e.maxStk;
                }
                return{
                    ...e,
                    amount: nAmoun,
                }
            }else{
                return{
                    e,
                }
            }
        })
        return{
            ...state,
            cart: updprod
        }
    }else{
    let cartProduct;
    cartProduct = {
        id:id+tick,
        name: prod.name,
        color: tick,
        amount,
        image: prod.image[0].url,
        price: prod.price,
        maxStk: prod.stock,
    };
    return{
        ...state,
        cart:[...state.cart,cartProduct],
    }
}
 }
 if(action.type == 'REMOVE_ITEM'){
    let filterDta = state.cart.filter((e) => e.id !== action.payload);
    return{
        ...state,
        cart: filterDta,
    }
}
if(action.type == 'CLEAR_CART'){
    // let filterDta = state.cart.filter((e) => e.id !== action.payload);
    return{
        ...state,
        cart: [],
    }
}
if(action.type == 'CART_INC'){
    let incProd = state.cart.map((e) => {
        if(e.id == action.payload){
            let incAmount = e.amount+1;
            if(incAmount >= e.maxStk){
                incAmount = e.maxStk;
            }
            return{
                ...e,
                amount: incAmount
            }
        }else{
            return e;
        }
    })
    return{
        ...state, cart:incProd
    }
}
if(action.type == 'CART_DEC'){
    let decProd = state.cart.map((e) => {
        if(e.id == action.payload){
            let decAmount = e.amount-1;
            if(decAmount <=1){
                decAmount = 1;
            }
            return{
                ...e,
                amount: decAmount
            }
        }else{
            return e;
        }
    })
    return{
        ...state, cart:decProd
    }
}
if(action.type == 'TOTAL_CART_ITEM'){
    let updCart = state.cart.reduce((i,e) => {
        let {amount} = e;
        i= i+amount;
        return i;
    },0);
    return{
        ...state,
        totalItem: updCart,
    }
}
if(action.type == 'TOTAL_CART_AMOUNT'){
    let updTotalPrice = state.cart.reduce((i,e) => {
        let {price,amount} = e;
        i = i+price*amount;
        return i;
    },0);
    return{
        ...state,
        totalAmount: updTotalPrice,
    }
}
 return state;
}

export default CartReducer;