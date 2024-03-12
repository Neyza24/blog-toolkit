import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    loading: false,
    hasErrors: false,
    posts: []
}

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.loading = true;
        },
        getPostsSucces: (state, action) => {
            state.loading = false;
            state.posts = action.payload
        },
        getPostsError: (state) => {
            state.hasErrors = true;
        }
    }
}); 


export const { getPosts, getPostsSucces, getPostsError } = postsSlice.actions;
