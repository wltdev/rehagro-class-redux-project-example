import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import Button from '../../components/ui/Button';

export const PageUseState = () => {
    const [count, setCount] = useState(0);
    const [object, setObject] = useState({
        count: 0,
        theme: 'dark'
    });

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    // Can't use useState inside a if statement
    // if (count) {
    //     useState();
    // }

    const handleObject = () => {
        setObject((prevObject) => ({
            ...prevObject,
            count: prevObject.count + 1
        }));
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}
        >
            <Typography variant="h1" component="h1" sx={{ fontSize: 48, fontWeight: 'bold' }}>
                {object.count}
            </Typography>

            <Button onClick={handleObject} sx={{ mt: 4 }}>
                Incrementar
            </Button>
        </Container>
    );
};
