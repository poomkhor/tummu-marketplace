import { ProductItem } from '../ProductItem/ProductItem';
import { SimpleGrid } from '@chakra-ui/react';

export function Products({ user, products, cart, handleAddToOrder }) {
    return (
        <div className='container mx-auto'>
            <SimpleGrid
                spacing={4}
                templateColumns='repeat(3, minmax(200px, 1fr))'>
                {products.map((product) => {
                    return (
                        <ProductItem
                            key={product._id}
                            product={product}
                            user={user}
                            cart={cart}
                            handleAddToOrder={handleAddToOrder}
                        />
                    );
                })}
            </SimpleGrid>
        </div>
    );
}
