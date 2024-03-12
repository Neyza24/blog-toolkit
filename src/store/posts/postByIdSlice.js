import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    hasErrors: false,
    post: {}
}

export const postByIdSlice = createSlice({
    name: 'postById',
    initialState,
    reducers: {
        getPost: (state ) => {
            state.isLoading = true;
        },
        getPostSuccess: (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
        },
        getPostError: (state) => {
            state.hasErrors = true;
        }
    }
}); 

export const { getPost, getPostSuccess, getPostError } = postByIdSlice.actions;