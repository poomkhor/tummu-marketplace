import { useState } from 'react';
import { checkToken } from '../../utilities/users-api';

export function OrderHistoryPage() {
    const [expiry, setExpiry] = useState(null);

    async function checkExpiryDate() {
        setExpiry(await checkToken());
    }

    return (
        <>
            <h1>Order History Page</h1>
            <div>
                <button onClick={checkExpiryDate}>Check Expiry Date</button>
                {expiry && (
                    <div>
                        Your session expires{' '}
                        {new Date(expiry * 1000).toString()}
                    </div>
                )}
            </div>
        </>
    );
}
