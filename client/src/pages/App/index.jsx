import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from '../AuthPage';
import { getUser } from '../../utilities/users-service';
import { NavBar } from '../../components/NavBar';
import { LoginForm } from '../../components/LoginForm';
import { SignUpForm } from '../../components/SignUpForm';
import { Products } from '../../components/Products/Products';
import { Shops } from '../../components/Shops/Shops';
import { Cart } from '../../components/Cart/Cart';
import { ShopForm } from '../../components/ShopForm/ShopForm';
import { ProductForm } from '../../components/ProductForm/ProductForm';
import { getAll } from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';

// import style from './style.module.css';

function App() {
    const [user, setUser] = useState(() => {
        return getUser();
    });
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(function () {
        async function getProducts() {
            const products = await getAll();
            setProducts(products);
        }
        getProducts();

        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        if (user) {
            getCart();
        }
    }, []);

    async function handleAddToOrder(itemId) {
        console.log('adding item to order', itemId);
        const cart = await ordersAPI.addItemToCart(itemId);
        setCart(cart);
    }

    async function handleChangeQty(itemId, newQty) {
        const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(cart);
    }

    async function handleCheckOut() {
        await ordersAPI.checkout();
        navigate('/orders');
    }

    return (
        <>
            <header>
                <NavBar user={user} setUser={setUser} />
            </header>
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='/products' replace />}
                    />
                    <Route
                        path='/products'
                        element={
                            <Products
                                products={products}
                                user={user}
                                cart={cart}
                                handleAddToOrder={handleAddToOrder}
                            />
                        }
                    />
                    <Route
                        path='/products/add'
                        element={
                            <ProductForm
                                user={user}
                                products={setProducts}
                                setProducts={setProducts}
                            />
                        }
                    />
                    <Route path='/shops' element={<Shops />} />
                    <Route path='/regis' element={<ShopForm />} />
                    <Route
                        path='/cart'
                        element={
                            <Cart
                                user={user}
                                cart={cart}
                                handleChangeQty={handleChangeQty}
                                handleCheckOut={handleCheckOut}
                            />
                        }
                    />
                    <Route
                        path='/login'
                        element={<LoginForm user={user} setUser={setUser} />}
                    />
                    <Route
                        path='/signup'
                        element={<SignUpForm user={user} setUser={setUser} />}
                    />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
