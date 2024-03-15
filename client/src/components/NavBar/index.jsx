import { Link } from 'react-router-dom';
import { logout } from '../../utilities/users-service';

export function NavBar({ user, setUser }) {
    return (
        <nav>
            {user ? (
                <>
                    <Link to='/orders'>All Orders</Link>
                    <Link to='/orders/new'>New Order</Link>
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
                <Link to='/login'>Login</Link>
            )}
        </nav>
    );
}
