import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

function ProductItem({product}){
    const {getProduct, addProduct, deleteProduct, updateProduct} = useContext(ProductContext);

    return(
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <span
                // className="text-decoration-line-through"
                
            >
                {product.name}
            </span>
            </li>
    );
}


export default ProductItem;