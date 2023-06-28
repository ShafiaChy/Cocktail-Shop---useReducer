import { useProducts } from "../../provider/ProductProvider";


const Home = () => {
    const {data} = useProducts();
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Home;