import { useProducts } from "../../provider/ProductProvider";
import MyCartItems from "./MyCartItems";


const Cart = () => {
    const {state: {loading,error,carts}} = useProducts();
    console.log(carts)
    let content;
    if(loading){
        content = <p>Loading</p>
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    if(!loading && !error && carts.length===0){
        content = <p>No Product Found</p>
    }
    if(!loading && !error && carts.length){
        content = carts.map(cart => 
            <MyCartItems
            key={cart.idDrink}
            cart={cart}
            ></MyCartItems>)
    }
    return (
        <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
           {content} 
        
        </div>
    </div>
    );
};

export default Cart;