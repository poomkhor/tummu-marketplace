import { CartItem } from '../CartItem/CartItem';
import * as orderAPI from '../../utilities/orders-api';
import { VStack } from '@chakra-ui/react';

export function Cart({ user, cart, handleChangeQty, handleCheckOut }) {
    if (!cart) return null;
    console.log(cart);

    return (
        <>
            <div>Order Details</div>
            <VStack spacing={5} align='stretch'>
                {cart.lineItems.map((item) => (
                    <CartItem
                        key={item._id}
                        lineItem={item}
                        isPaid={cart.isPaid}
                        handleChangeQty={handleChangeQty}
                    />
                ))}
            </VStack>
        </>
    );
}
