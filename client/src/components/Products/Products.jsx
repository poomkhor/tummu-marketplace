import { Link } from 'react-router-dom';

export function Products({ user }) {
    return (
        <>
            <div>
                <h1 className='text-blue-600'>Products</h1>
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
