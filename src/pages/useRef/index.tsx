import { Container, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export const PageUseRef = () => {
    const [name, setName] = useState('');
    const renders = useRef(0);

    // useRef para referenciar um elemento do DOM
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    // infinite loop
    // const [renders, setRenders] = useState(0);
    // useEffect(() => {
    //     setRenders((prev) => prev + 1);
    // });

    const focusInput = () => {
        inputRef.current?.focus();
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
            <Input
                ref={inputRef}
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter customer name"
            />

            <Typography variant="h1" component="h1" sx={{ fontSize: 48, fontWeight: 'bold' }}>
                Name: {name}
            </Typography>

            <Typography variant="h1" component="h1" sx={{ fontSize: 48, fontWeight: 'bold' }}>
                Renders: {renders.current}
            </Typography>

            <Button onClick={focusInput}>Focus Input</Button>
        </Container>
    );
};
