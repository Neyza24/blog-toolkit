import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts/postsSlice";
import { commentsByPostIdSlice } from "./posts/commentsByPostIdSlice";
import { postByIdSlice } from "./posts/postByIdSlice";
import { themeSlice } from "./theme/themeSlice";
import { postsByLimitSlice } from "./posts/postsSilceByLimit";


export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        posts: postsSlice.reducer,
        comments: commentsByPostIdSlice.reducer,
        post: postByIdSlice.reducer,
        postsByLimit: postsByLimitSlice.reducer
    }
});