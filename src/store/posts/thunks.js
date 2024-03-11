// Asynchronous thunk action

import { getPosts } from "./postsSlice"

export function fetchPosts() {
    return async(dispatch) => {
        dispatch(getPosts());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}