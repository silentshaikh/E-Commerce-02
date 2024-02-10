const filtReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_FILT_PRODUCT':
            const priceList = action.payload.map((e) => e.price);
            const filtPrice = Math.max(...priceList)
            console.log(filtPrice);
            return {
                ...state,
                filtProduct: [...action.payload],
                allProduct: [...action.payload],
                filters:{...state.filters,maxPrice:filtPrice,price:filtPrice,}
            }
            case 'FLEX_ITEM':
            return{
                ...state,
                flexView:true,
            }
            case 'LIST_ITEM':
                return{
                    ...state,
                    flexView:false,
                }
                case 'SORT_VALUE':
                    return{
                        ...state,
                        sortValue:action.payload,
                    }
                    case 'SORT_PRODUCT':
                        let newSortProd;
                        const {filtProduct} = state;
                        let sortProd = [...filtProduct];
                        const sortingProduct = (a,b) => {
                            if(state.sortValue === 'low'){
                                return a.price-b.price;
                            }
                            if(state.sortValue === 'high'){
                                return b.price-a.price;
                            }
                            if(state.sortValue === 'a-z'){
                                return a.name.localeCompare(b.name);
                            }
                            if(state.sortValue === 'z-a'){
                                return b.name.localeCompare(a.name);
                            }
                        }
                        newSortProd = sortProd.sort(sortingProduct);
                        return{
                            ...state,
                            filtProduct: newSortProd,
                        }
                        case 'FILTER_VALUE':
                            const {inpName,inpValue} = action.payload;
                            return{
                                ...state,
                                filters:{
                                    ...state.filters,
                                    [inpName]: inpValue,
                                }
                            }
                            case 'FILTER_PROD':
                                let {allProduct} = state;
                                let filtProd = [...allProduct];
                                const {text,category,company,color,price} = state.filters;
                                if(text){
                                    filtProd = filtProd.filter((e) => {
                                        return e.name.toLowerCase().includes(text);
                                    })
                                }
                                if(category !== 'all'){
                                    filtProd = filtProd.filter((e) => {
                                        return e.category === category;
                                    })
                                }
                                if(company !== 'all'){
                                    filtProd = filtProd.filter((e) => {
                                        return e.company.toLowerCase() === company.toLowerCase();
                                    })
                                }
                                if(color !== 'all'){
                                    filtProd = filtProd.filter((e) => {
                                        return e.colors.includes(color);
                                    })
                                }
                                if(price == 0){
                                    filtProd = filtProd.filter((e) => e.price === price);
                                }else{
                                    filtProd = filtProd.filter((e) => e.price <= price);
                                }
                                return{
                                    ...state,
                                    filtProduct: filtProd,
                                }
                                case 'FILT_BTN':
                                    return{
                                        ...state,
                                        filters:{
                                            text:'',
                                            category:'all',
                                            company:'all',
                                            color:'all',
                                            maxPrice: 0,
                                            price:state.filters.maxPrice,
                                            minPrice:state.filters.maxPrice,
                                        }
                                    };
        default:
          return state;
    }
}
export default filtReducer;