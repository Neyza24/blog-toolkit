import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    loading: false,
    hasErrors: false,
    postsLimit: []
}

export const postsByLimitSlice = createSlice({
    name: 'postsByLimit',
    initialState,
    reducers: {
        getPostsByLimit: (state) => {
            state.loading = true;
        },
        getPostsSuccessByLimit: (state, action) => {
            state.loading = false;
            state.postsLimit = action.payload;
        },
        getPostsErrorByLimit: (state) => {
            state.hasErrors = true;
        }
    }
}); 


export const { getPostsByLimit, getPostsSuccessByLimit, getPostsErrorByLimit } = postsByLimitSlice.actions;