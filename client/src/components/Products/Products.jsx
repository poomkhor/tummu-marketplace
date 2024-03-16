import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAll } from '../../utilities/products-api';

export function Products({ user, products, setProducts }) {
    const [cart, setCart] = useState(null);

    useEffect(function () {
        async function getProducts() {
            const products = await getAll();
            setProducts(products);
        }
        getProducts();
    }, []);

    return (
        <>
            <div>
                <div>
                    {products.map((product) => {
                        return (
                            <div key={product._id}>
                                <h2>{product.name}</h2>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                                <p>{product.img}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
