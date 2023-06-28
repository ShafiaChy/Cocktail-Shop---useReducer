import { createContext, useContext, useEffect, useState } from "react";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    const [data,setData ]=useState([])

    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setData(data.drinks))
    },[])

    const value = {data}
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