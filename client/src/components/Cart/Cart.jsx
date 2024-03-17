export function Cart({ user, cart, handleChangeQty, handleCheckOut }) {
    if (!cart) return null;
    console.log(cart);

    return (
        <>
            <div>Order Details</div>
            {cart.lineItems.map((item) => (
                <CartItem
                    key={item._id}
                    item={item}
                    isPaid={cart.isPaid}
                    handleChangeQty={handleChangeQty}
                />
            ))}
        </>
    );
}
