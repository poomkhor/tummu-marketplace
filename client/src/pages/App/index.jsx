import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
import { ProductsListing } from '../../components/ProductsListing/ProductsListing';
import { getAll } from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Center } from '@chakra-ui/react';

// import style from './style.module.css';

function App() {
    const [user, setUser] = useState(() => {
        return getUser();
    });
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(null);

    const navigate = useNavigate();

    async function getProducts() {
        const products = await getAll();
        setProducts(products);
    }

    async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
    }

    useEffect(function () {
        getProducts();
        getCart();
    }, []);

    async function handleAddToOrder(itemId) {
        console.log('adding item to order', itemId);
        console.log(user);
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
        <Center>
            <div className='container mx-auto'>
                <header className='flex justify-center'>
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
                                <ProductsListing
                                    user={user}
                                    products={products}
                                    setProducts={setProducts}
                                    getProducts={getProducts}
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
                            element={
                                <LoginForm user={user} setUser={setUser} />
                            }
                        />
                        <Route
                            path='/signup'
                            element={
                                <SignUpForm user={user} setUser={setUser} />
                            }
                        />
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
                </main>
                <footer></footer>
            </div>
        </Center>
    );
}

export default App;
