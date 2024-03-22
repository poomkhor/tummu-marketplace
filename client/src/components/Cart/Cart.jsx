import { CartItem } from '../CartItem/CartItem';
import * as orderAPI from '../../utilities/orders-api';
import { HStack, VStack } from '@chakra-ui/react';
import { CartSummary } from '../CartSummary/CartSummary';

export function Cart({ user, cart, handleChangeQty, handleCheckOut }) {
    if (!cart) return null;
    console.log(cart);

    return (
        <>
            <div className='font-mono text-2xl font-bold pt-20 pb-10 flex justify-center'>
                Order Details
            </div>
            {cart.lineItems.length ? (
                <div className='flex justify-center'>
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
                </div>
            ) : (
                <div>No Product in Cart!</div>
            )}
        </>
    );
}
