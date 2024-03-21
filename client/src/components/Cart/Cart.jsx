import { CartItem } from '../CartItem/CartItem';
import * as orderAPI from '../../utilities/orders-api';
import { HStack, VStack } from '@chakra-ui/react';
import { CartSummary } from '../CartSummary/CartSummary';

export function Cart({ user, cart, handleChangeQty, handleCheckOut }) {
    if (!cart) return null;
    console.log(cart);

    return (
        <>
            <div>Order Details</div>
            {cart.lineItems.length ? (
                <HStack>
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
                    <CartSummary
                        cart={cart}
                        handleChangeQty={handleChangeQty}
                        handleCheckOut={handleCheckOut}
                    />
                </HStack>
            ) : (
                <div>No Product in Cart!</div>
            )}
        </>
    );
}
