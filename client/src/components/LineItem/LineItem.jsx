export function LineItem({ lineItem, isPaid, handleChangeQty }) {
    console.log(lineItem);
    console.log(lineItem.extPrice);
    return (
        <div className='flex justify-around font-bold'>
            <div className='flex-ctr-ctr flex-col'>
                <span className='pr-20'>{lineItem.item.name}</span>
                <span className='pr-10 w-80'>
                    {lineItem.item.price.toFixed(2)}
                </span>
            </div>
            <div className='qty' style={{ justifyContent: isPaid && 'center' }}>
                {!isPaid && (
                    <button
                        className='pr-5'
                        onClick={() =>
                            handleChangeQty(lineItem.item._id, lineItem.qty - 1)
                        }>
                        −
                    </button>
                )}
                <span>{lineItem.qty}</span>
                {!isPaid && (
                    <button
                        className='pl-5 pr-10'
                        onClick={() =>
                            handleChangeQty(lineItem.item._id, lineItem.qty + 1)
                        }>
                        +
                    </button>
                )}
            </div>
            <div className='ext-price'>${lineItem.extPrice}</div>
        </div>
    );
}
