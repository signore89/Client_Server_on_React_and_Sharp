import { useState, useContext, useEffect } from "react";
import {ProductContext} from "../../context/ProductContext";
import ProductItem from "./ProductItem";



function allProduct(){
    const {getProducts} = useContext(ProductContext);
    const {products} = useContext(ProductContext);
    return(
        <div>
            <button onClick={() => getProducts()}
                className="btn btn-outline-danger ms-2">
                    получить все продукты
            </button>
        <ul className="list-group my-4">
            {products.map((product) => (
                <ProductItem key={product.Id} product={product} />
            ))}
        </ul>
        </div>
    );
}


export default allProduct;