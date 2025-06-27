import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { navigatePage } from '../../store/pageReducer';
import { Button } from '@mui/material';

export const OutroTela = () => {
    const { clienteSelecionado } = useSelector((state: RootState) => state.clientes);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{clienteSelecionado.name}</h1>
            <p>{clienteSelecionado.email}</p>

            <Button onClick={() => dispatch(navigatePage('customers'))} sx={{ mt: 4, backgroundColor: '#fff' }}>
                Voltar
            </Button>
        </div>
    );
};
