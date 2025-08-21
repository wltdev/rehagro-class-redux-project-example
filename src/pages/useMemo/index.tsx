import { Container, Typography, Box } from '@mui/material';
import { useState, useMemo } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const expensiveCalculation = () => {
    console.log('❌ Calculando SEM useMemo (sempre executa)...');
    let result = 0;
    for (let i = 0; i < 100000; i++) {
        result += Math.random();
    }
    return result.toFixed(2);
};

export const PageUseMemo = () => {
    const [text, setText] = useState('');
    const [counter, setCounter] = useState(0);

    // Exemplo prático: processamento custoso de texto
    const processedText = useMemo(() => {
        console.log('🔄 Processando texto (função custosa) com useMemo...');

        // Simula processamento custoso
        let result = '';
        for (let i = 0; i < 1000000; i++) {
            result = text.toUpperCase().split('').reverse().join('');
        }

        return {
            reversed: result,
            wordCount: text
                .trim()
                .split(' ')
                .filter((word) => word.length > 0).length,
            charCount: text.length,
            vowelCount: (text.match(/[aeiouAEIOU]/g) || []).length
        };
    }, [text]); // Só reexecuta quando 'text' mudar

    // Função sem memoização para comparação
    const expensiveCalculationWithoutMemo = expensiveCalculation();

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                py: 4
            }}
        >
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Exemplo Prático: useMemo
            </Typography>

            <Box sx={{ width: '100%', maxWidth: 400 }}>
                <Input
                    label="Digite um texto"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ex: React é incrível!"
                />
            </Box>

            <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: 'green', mb: 1 }}>
                    ✅ WITH useMemo (only recalculates when text changes):
                </Typography>
                <Typography>
                    Reversed text: <strong>{processedText.reversed}</strong>
                </Typography>
                <Typography>
                    Words: <strong>{processedText.wordCount}</strong>
                </Typography>
                <Typography>
                    Characters: <strong>{processedText.charCount}</strong>
                </Typography>
                <Typography>
                    Vowels: <strong>{processedText.vowelCount}</strong>
                </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: 'red', mb: 1 }}>
                    ❌ WITHOUT useMemo (always recalculates):
                </Typography>
                <Typography>
                    Result: <strong>{expensiveCalculationWithoutMemo}</strong>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                    Click to force re-render
                </Typography>
                <Button onClick={() => setCounter((prev) => prev + 1)}>Counter: {counter}</Button>
            </Box>
        </Container>
    );
};
