import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    SimpleGrid,
    useDisclosure,
    Card,
    CardBody,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import { ProductForm } from '../ProductForm/ProductForm';

export function ProductsListing({ user, products, setProducts, getProducts }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const productsListing = products.map((product) => {
        if (product.user === user.sub) {
            return (
                <div key={product._id}>
                    <Card maxW='sm' className='font-mono'>
                        <CardBody>
                            <img
                                src={`/user-upload/${product.images[0]?.name}`}
                                alt={product.name}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{product.name}</Heading>
                                <Text>{product.description}</Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${product.price}
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    });

    return (
        <center>
            <div className='flex justify-center mt-10 mb-10'>
                <Button onClick={onOpen}>Add New Product</Button>
                <div className='flex justify-around'>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>
                                Fill in product information
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <ProductForm
                                    user={user}
                                    products={products}
                                    setProducts={setProducts}
                                    getProducts={getProducts}
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    type='submit'
                                    form='product-form'
                                    colorScheme='blue'
                                    mr={3}
                                    onClick={onClose}>
                                    Submit
                                </Button>
                                {/* <Button variant='ghost'>Secondary Action</Button> */}
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            </div>
            {productsListing.length ? (
                <>
                    <div className='container mx-auto'>
                        <SimpleGrid
                            spacing={4}
                            templateColumns='repeat(3, minmax(200px, 1fr))'>
                            {productsListing}
                        </SimpleGrid>
                    </div>
                </>
            ) : (
                <div className='flex justify-center mt-10 mb-10'>
                    <h1>No products found</h1>
                </div>
            )}
        </center>
    );
}
