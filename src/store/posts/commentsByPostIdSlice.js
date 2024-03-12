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
        getCommentsSucces: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload
        }
    }
}); 

export const { getComments, getCommentsSucces } = commentsByPostIdSlice.actions;