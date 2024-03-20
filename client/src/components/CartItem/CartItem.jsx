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
                    <Image
                        src={`/user-upload/${lineItem.item.images[0]?.name}`}
                        alt={lineItem.item.name}
                    />
                    <aside>
                        <Heading size='md'>{lineItem.item.name}</Heading>
                        <Text py='2'>{lineItem.item.description}</Text>
                    </aside>
                    <aside>
                        <Text>{lineItem.qty}</Text>
                        <Text>{lineItem.item.price}</Text>
                    </aside>
                </CardBody>
            </Stack>
        </Card>
    );
}
