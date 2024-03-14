import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light'
    },
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload;
        },
        resetTheme: (state) => {
            state.value = '';
        }
    }
});

export const { setTheme, resetTheme } = themeSlice.actions;