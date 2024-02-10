import React, { createContext, useContext, useReducer , useEffect} from 'react';
import axios from 'axios';
import reducer from '../Reducer/reducer';
const AppContext = createContext();
const ourApi = `https://api.pujakaitem.com/api/products`;
const initalValue = {
    pgError:false,
    pgLoad:false,
    ourProduct:[],
    homProduct:[],
    pgCardLoad:false,
    ourCardProduct:{},
};
const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initalValue);
    const getData = async (url) => {
        dispatch({ type:'PAGE_LOAD'});
       try {
        const ourResponse = await axios.get(url);
        const ourData = await ourResponse.data;
        dispatch({ type:'ADD_PAGE_PRODUCT', payload: ourData});
       } catch (error) {
        dispatch({ type:'PAGE_ERROR'});
       }
      }
      const getCardData = async (url) => {
        dispatch({ type:'CARD_LOAD'});
       try {
        const ourResponse = await axios.get(url);
        const ourCardData = await ourResponse.data;
        dispatch({ type:'ADD_CARD_PRODUCT', payload: ourCardData});
       } catch (error) {
        dispatch({ type:'Card_ERROR'});
       }
      }
      useEffect(() => {
        getData(ourApi);
      },[])
    return(
        <AppContext.Provider value={{...state,getCardData}}>{children}</AppContext.Provider>
    );
}
const useGlobalContext = () => {
    return useContext(AppContext);
};
export {AppContext,AppProvider,useGlobalContext};