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
        }
    }
}); 


export const { getPosts } = postsSlice.actions;
