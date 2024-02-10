import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useGlobalContext } from './prodContext';
import reducer from '../Reducer/filtReducer';
const FiltContext = createContext();
const initialValue = {
    filtProduct:[],
    allProduct:[],
    flexView:true,
    sortValue:'lowest',
    filters:{
        text:'',
        category:'all',
        company:'all',
        color:'all',
        maxPrice:0,
        price:0,
        minPrice:0,
    }
}
const FiltProvidr = ({children}) => {
    const {ourProduct} = useGlobalContext();
    const [state,dispatch] = useReducer(reducer,initialValue)
    useEffect(() => {
        dispatch({type:'LOAD_FILT_PRODUCT',payload:ourProduct})
    },[ourProduct])
    const flexBx = () => {
      return dispatch({type:'FLEX_ITEM'});
    }
    const listBx = () => {
        return dispatch({type:'LIST_ITEM'});
      }
      const sorting = (e) => {
        let srtValue = e.target.value;
        return dispatch({type:'SORT_VALUE',payload:srtValue,})
      }
      const updateFilterValue = (e) => {
        let inpName = e.target.name;
        let inpValue = e.target.value;
       return dispatch({type:'FILTER_VALUE',payload:{inpName,inpValue}})
      }
      const filtBtn = () => {
        dispatch({type:'FILT_BTN'});
      }
      useEffect(() => {
        dispatch({type:'FILTER_PROD'});
        dispatch({type:'SORT_PRODUCT'});
      },[ourProduct,state.sortValue,state.filters])
    return(
        <FiltContext.Provider value={{...state,flexBx,listBx,sorting,updateFilterValue,filtBtn}}>
            {children}
        </FiltContext.Provider>
    );
};
const useFiltContext = () => {
    return useContext(FiltContext);
}
export {FiltProvidr,useFiltContext};