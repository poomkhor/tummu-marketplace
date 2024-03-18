import { CartItem } from '../CartItem/CartItem';
import * as orderAPI from '../../utilities/orders-api';

export function Cart({ user, cart, handleChangeQty, handleCheckOut }) {
    if (!cart) return null;
    console.log(cart);

    return (
        <>
            <div>Order Details</div>
            {cart.lineItems.map((item) => (
                <CartItem
                    key={item._id}
                    lineItem={item}
                    isPaid={cart.isPaid}
                    handleChangeQty={handleChangeQty}
                />
            ))}
        </>
    );
}
