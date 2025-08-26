import { createContext, useState, useEffect, useContext } from "react";



//создание глобального контекста приложения
export const ProductContext = createContext();


function ProductProvider({children}) {
    //массив продуктов, по умолчанию пустой массив
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});

    //получение всех продуктов
    const getProducts = async () => {
        console.log("выполняется");
        const response = await fetch("https://localhost:7221/Product", {
            // mode: 'no-cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const data = await response.json();
            setProducts(data);
        }
    };


     //добавление нового продукта
    const addProduct = async (Id, Name, Description) => {
        const response = await fetch("http://localhost:8888/Product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ Id, Name, Description }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            getProducts();
        }
    };


    //удаление продукта по id
    const deleteProduct = async(id) => {
        const response = await fetch(
            `http://localhost:8888/Product/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );
        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            getProducts();
        }
    };

    //изменение продукта
    const updateProduct = async (Id, Name, Description) => {
        const response = await fetch("http://localhost:8888/Product", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ Id, Name, Description }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            getProducts();
        }
    };

    //получение одного продукта
    const getProduct = async (id) => {
        const response = await fetch(`http://localhost:8888/Product/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        if (response.ok) {
            const data = await response.json();
            setProduct(data);
        }
    };

     //пагинация
    const getProductsPagination = async (skip, take) => {
        const response = await fetch(`http://localhost:8888/Product/${skip}/${take}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        if (response.ok) {
            const data = await response.json();
            setProducts(data);
        }
    };
    return (
        <ProductContext.Provider
            value={{products,
                    product,
                    getProduct,
                    getProducts,
                    addProduct,
                    deleteProduct,
                    updateProduct,
                    getProductsPagination
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}


export default ProductProvider;