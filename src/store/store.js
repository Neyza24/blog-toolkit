import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./posts/postSlice";


export const store = configureStore({
    reducer: {
        posts: postSlice.reducer,
    }
});