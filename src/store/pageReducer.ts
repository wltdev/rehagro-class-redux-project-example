import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 'customers'
};

const pageSlice = createSlice({
    name: 'pages',
    initialState: initialState,
    reducers: {
        navigatePage: (state, action) => {
            return {
                ...state,
                currentPage: action.payload
            };
        }
    }
});

export const { navigatePage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
