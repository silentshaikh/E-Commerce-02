import React from 'react'
 const reducer = (state,action) => {
     switch (action.type) {
         case 'PAGE_LOAD':
             return{
                ...state,
                pgLoad:true,
            }
            // break;
            case 'ADD_PAGE_PRODUCT':
                const filtDta = action.payload.filter((e) => e.featured===true); 
                return{
                    ...state,
                    pgLoad:false,
                    ourProduct:action.payload,
                    homProduct: filtDta,
                } 
            case 'PAGE_ERROR':
            return{
                ...state,
                pgLoad:false,
                pgError:true,
            } 
            case 'CARD_LOAD':
                return{
                   ...state,
                   pgCardLoad:true,
               }
               case 'ADD_CARD_PRODUCT':
                //    const filtDta = action.payload.filter((e) => e.featured===true); 
                   return{
                       ...state,
                       pgCardLoad:false,
                       ourCardProduct:action.payload,
                   } 
               case 'CARD_ERROR':
               return{
                   ...state,
                   pgCardLoad:false,
                   pgError:true,
               } 
    
        default:
            return state;
    }
}
export default reducer;