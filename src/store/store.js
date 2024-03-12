import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts/postsSlice";
import { commentsByPostIdSlice } from "./posts/commentsByPostIdSlice";
import { postByIdSlice } from "./posts/postByIdSlice";


export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        comments: commentsByPostIdSlice.reducer,
        post: postByIdSlice.reducer
    }
});