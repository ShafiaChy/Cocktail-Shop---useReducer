

const ProductsCard = ({product}) => {
    const {strDrinkThumb, strInstructions,strCategory}=product;
    return (
    
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={strDrinkThumb} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{strCategory}</h2>
                <p>{strInstructions}</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        
    );
};

export default ProductsCard;