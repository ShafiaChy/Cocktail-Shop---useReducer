import { useProducts } from "../../provider/ProductProvider";
import ProductsCard from "./ProductsCard";


const Home = () => {
    const {state: {products,loading,error,carts}} = useProducts();
    console.log(carts)
    let content;
    if(loading){
        content = <p>Loading</p>
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    if(!loading && !error && products.length===0){
        content = <p>No Product Found</p>
    }
    if(!loading && !error && products.length){
        content = products.map(product => 
            <ProductsCard 
            key={product.idDrink}
            product={product}
            ></ProductsCard>)
    }
    return (
        <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
               {content} 
            
            </div>
        </div>
    );
};

export default Home;