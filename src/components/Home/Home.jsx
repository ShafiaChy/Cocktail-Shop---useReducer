import { useProducts } from "../../provider/ProductProvider";
import ProductsCard from "./ProductsCard";


const Home = () => {
    const {state: {products}} = useProducts();
    console.log(products)
    return (
        <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                products.map(product => 
                <ProductsCard 
                key={product.idDrink}
                product={product}
                ></ProductsCard>)
            }
            </div>
        </div>
    );
};

export default Home;