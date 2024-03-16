import React from 'react';
import { Link } from 'react-router-dom';

export function Shops() {
    return (
        <>
            <div>
                <Link to='/regis'>
                    <button>Become a seller</button>
                </Link>
            </div>
            <div>
                <h1 className='text-blue-600'>Shops</h1>
                <h2>Shop A</h2>
                <h2>Shop B</h2>
                <h2 className='text-red-600'>Shop C</h2>
            </div>
        </>
    );
}
