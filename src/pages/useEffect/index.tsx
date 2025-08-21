import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import { Item, ItemCard } from '../../components/ItemCard';
import { ListItems } from './styles';

type ResourceType = 'posts' | 'users' | 'comments';

export const PageUseEffect = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [resourceType, setResourceType] = useState<ResourceType>('posts');

    const handleResourceType = (type: ResourceType) => {
        setResourceType(type);
    };

    const fetchResource = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
        const data = await response.json();
        setItems(data);
    };

    useEffect(() => {
        fetchResource();
    }, [resourceType]);

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Button onClick={() => handleResourceType('posts')}>Posts</Button>
                <Button onClick={() => handleResourceType('users')}>Users</Button>
                <Button onClick={() => handleResourceType('comments')}>Comments</Button>
            </Box>

            <Typography variant="h1" component="h1" sx={{ fontSize: 48, fontWeight: 'bold' }}>
                {resourceType}
            </Typography>

            <ListItems>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </ListItems>
        </Container>
    );
};
