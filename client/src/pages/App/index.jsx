import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewOrderPage } from '../NewOrderPage/NewOrderPage';
import { AuthPage } from '../AuthPage';
import { OrderHistoryPage } from '../OrderHistoryPage/OrderHistoryPage';
import { getUser } from '../../utilities/users-service';
import { NavBar } from '../../components/NavBar';
import { LoginForm } from '../../components/LoginForm';
import { SignUpForm } from '../../components/SignUpForm';
import { Products } from '../../components/Products/Products';
import { Shops } from '../../components/Shops/Shops';
import { Cart } from '../../components/Cart/Cart';
import { ShopForm } from '../../components/ShopForm/ShopForm';
import { ProductForm } from '../../components/ProductForm/ProductForm';

// import style from './style.module.css';

function App() {
    const [user, setUser] = useState(() => {
        return getUser();
    });
    const [products, setProducts] = useState([]);

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
                                setProducts={setProducts}
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
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/signup' element={<SignUpForm />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
