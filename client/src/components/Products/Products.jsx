import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAll } from '../../utilities/products-api';

export function Products({ user }) {
    const [products, setProducts] = useState([]);
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
                <pre>{JSON.stringify(products, null, 2)}</pre>
                <h2>
                    {user ? (
                        <Link to='/cart'>Product A</Link>
                    ) : (
                        <Link to='/login'>Product A</Link>
                    )}
                </h2>
                <h2>Product B</h2>
                <h2 className='text-red-600'>Product C</h2>
            </div>
        </>
    );
}
