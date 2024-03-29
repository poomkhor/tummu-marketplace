import { Link } from 'react-router-dom';
import { logout } from '../../utilities/users-service';

export function NavBar({ user, setUser }) {
    return (
        <nav className='font-mono text-3xl font-bold pt-5 flex justify-between'>
            {user ? (
                <>
                    <Link className='pr-60 text-teal-500' to='/products'>
                        TUMMU MARKET
                    </Link>
                    <Link to='/products'>Products</Link>
                    {/* <Link to='/shops'>Shops</Link> */}
                    <Link className='pr-60' to='/products/add'>
                        + Product
                    </Link>
                    <Link to='/cart'>Cart</Link>
                    <Link
                        to=''
                        onClick={() => {
                            // logout via the users-service
                            logout();
                            // setUser back to null
                            setUser(null);
                        }}>
                        Logout
                    </Link>
                </>
            ) : (
                <>
                    <Link className='pr-60 text-teal-500' to='/products'>
                        TUMMU MARKET
                    </Link>
                    <Link className='pr-60' to='/products'>
                        Products
                    </Link>
                    {/* <Link to='/shops'>Shops</Link> */}
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </>
            )}
        </nav>
    );
}
