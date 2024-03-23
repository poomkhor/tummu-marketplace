import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Divider,
    Stack,
    ButtonGroup,
    Button,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function ProductItem({ product, handleAddToOrder, user, cart }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className='font-mono container mx-auto mt-20 flex justify-center'>
            <Card maxW='sm'>
                <CardBody className='flex flex-col justify-center align-middle'>
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
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        {/* <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button> */}
                        {user ? (
                            <Button
                                variant='ghost'
                                colorScheme='blue'
                                onClick={() => handleAddToOrder(product._id)}>
                                Add to cart
                            </Button>
                        ) : (
                            <Button
                                variant='ghost'
                                colorScheme='blue'
                                onClick={handleLogin}>
                                Add to cart
                            </Button>
                        )}
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
}
