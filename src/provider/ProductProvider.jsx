import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialState, productReducer } from "../components/state/productReducer";
import { actionTypes } from "../components/state/actionTypes";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(productReducer, initialState)
    useEffect(()=>{
        dispatch({type:actionTypes.FETCHING_START})
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>dispatch({type:actionTypes.FETCHING_SUCCESS, payload:data.drinks}))
        .catch(()=>{
            dispatch({type:actionTypes.FETCHING_ERROR})
        })
    },[])

    const value = {state, dispatch}
    return (
    
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
        
    );
};

export const useProducts = () =>{
    const context = useContext(PRODUCT_CONTEXT);
    return context
}
export default ProductProvider;