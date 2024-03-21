import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { ProductForm } from '../ProductForm/ProductForm';

export function ProductsListing({ user, products, setProducts }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const productsListing = products.map((product) => {
        if (product.user === user._id) {
            return (
                <div key={product._id}>
                    <img
                        src={`/user-upload/${product.images[0]?.name}`}
                        alt={product.name}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            );
        }
    });

    return (
        <>
            <Button onClick={onOpen}>Add New Product</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Fill in product information</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ProductForm
                            user={user}
                            products={products}
                            setProducts={setProducts}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <div>
                <div>{productsListing}</div>
            </div>
        </>
    );
}
