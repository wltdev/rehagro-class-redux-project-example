import { configureStore } from '@reduxjs/toolkit';
import { customerReducer } from './customerReducer';
import { pageReducer } from './pageReducer';

export const store = configureStore({
    reducer: {
        clientes: customerReducer,
        pages: pageReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
