import {
    Card,
    CardBody,
    CardFooter,
    Image,
    HStack,
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
            <CardBody>
                <div className='flex justify-between'>
                    <Image
                        className='pr-20'
                        src={`/user-upload/${lineItem.item.images[0]?.name}`}
                        alt={lineItem.item.name}
                    />
                    <div className='w-80'>
                        <Heading size='md'>{lineItem.item.name}</Heading>
                        <Text py='2'>{lineItem.item.description}</Text>
                    </div>
                    <div>
                        <Text>{lineItem.qty}</Text>
                        <Text>{lineItem.item.price}</Text>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
