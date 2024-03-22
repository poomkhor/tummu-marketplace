import { LineItem } from '../LineItem/LineItem';
import './CartSummary.css';

export function CartSummary({ cart, handleChangeQty, handleCheckOut }) {
    if (!cart) return null;
    console.log(cart);
    const lineItems = cart.lineItems.map((item) => (
        <LineItem
            lineItem={item}
            isPaid={cart.isPaid}
            key={item._id}
            handleChangeQty={handleChangeQty}
        />
    ));

    return (
        <div className='flex flex-col pl-20'>
            <div className='font-mono text-2xl font-bold'>Order Summary</div>
            <div className='font-mono text-lg'>
                <div className='flex justify-left'>
                    {cart.isPaid ? (
                        <span>
                            ORDER{' '}
                            <span className='smaller'>{cart.orderId}</span>
                        </span>
                    ) : (
                        <span>NEW ORDER</span>
                    )}
                    <span className='pl-10'>
                        {new Date(cart.updatedAt).toLocaleDateString()}
                    </span>
                </div>
                <div className='pt-10'>
                    {lineItems.length ? (
                        <>
                            {lineItems}
                            <section className='flex justify-between pl-40 pt-10'>
                                {cart.isPaid ? (
                                    <span className='right'>
                                        TOTAL&nbsp;&nbsp;
                                    </span>
                                ) : (
                                    <button
                                        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'
                                        onClick={() => handleCheckOut()}
                                        disabled={!lineItems.length}>
                                        CHECKOUT
                                    </button>
                                )}
                                <span>{cart.totalQty}</span>
                                <span className='right'>
                                    ${cart.orderTotal}
                                </span>
                            </section>
                        </>
                    ) : (
                        <div className='hungry'>No Product in Cart!</div>
                    )}
                </div>
            </div>
        </div>
    );
}
