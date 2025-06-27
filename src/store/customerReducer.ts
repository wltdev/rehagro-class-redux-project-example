import { createSlice } from '@reduxjs/toolkit';
import { Customer } from '../types/customer';

const initialState = {
    clientes: [] as Customer[],
    clienteSelecionado: {} as Customer
};

const customerSlice = createSlice({
    name: 'clientes',
    initialState: initialState,
    reducers: {
        addNewCliente: (state, action) => {
            return {
                ...state,
                clientes: [action.payload, ...state.clientes]
            };
        },
        setClienteSelecionado: (state, action) => {
            return {
                ...state,
                clienteSelecionado: action.payload
            };
        },
        setMultipleClientes: (state, action) => {
            return {
                ...state,
                clientes: action.payload
            };
        },
        updateCliente: (state, action) => {
            return {
                ...state,
                clientes: state.clientes.map((cliente) => {
                    if (cliente.id === action.payload.id) {
                        return action.payload;
                    }

                    return cliente;
                })
            };
        },
        deleteCliente: (state, action) => {
            console.log(action);
            return {
                ...state,
                clientes: state.clientes.filter((cliente) => cliente.id !== action.payload.id)
            };
        }
    }
});

export const { addNewCliente, setMultipleClientes, updateCliente, deleteCliente, setClienteSelecionado } =
    customerSlice.actions;
export const customerReducer = customerSlice.reducer;
