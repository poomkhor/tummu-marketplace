import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Button,
} from '@chakra-ui/react';

export function CartItem({ lineItem, handleChangeQty, handleCheckOut }) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'>
            <Stack>
                <CardBody>
                    <Heading size='md'>{lineItem.item.name}</Heading>

                    <Text py='2'>{lineItem.item.description}</Text>
                </CardBody>
            </Stack>
        </Card>
    );
}
