import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoading : false,
    hasError: false,
    comments: []
}

export const commentsByPostIdSlice = createSlice({
    name: 'commentsByPostId',
    initialState,
    reducers: {
        getComments: (state) => {
            state.isLoading = true;
        },
        getCommentsSuccess: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload
        },
        getCommentsError: (state) => {
            state.hasError = true;
        }
    }
}); 

export const { getComments, getCommentsSuccess, getCommentsError } = commentsByPostIdSlice.actions;