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
        <>
            <div>Order Summary</div>
            <div className='OrderDetail'>
                <div className='section-heading'>
                    {cart.isPaid ? (
                        <span>
                            ORDER{' '}
                            <span className='smaller'>{cart.orderId}</span>
                        </span>
                    ) : (
                        <span>NEW ORDER</span>
                    )}
                    <span>{new Date(cart.updatedAt).toLocaleDateString()}</span>
                </div>
                <div className='line-item-container flex-ctr-ctr flex-col scroll-y'>
                    {lineItems.length ? (
                        <>
                            {lineItems}
                            <section className='total'>
                                {cart.isPaid ? (
                                    <span className='right'>
                                        TOTAL&nbsp;&nbsp;
                                    </span>
                                ) : (
                                    <button
                                        className='btn-sm'
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
        </>
    );
}
