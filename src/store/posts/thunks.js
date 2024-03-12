// Asynchronous thunk action

import { getComments, getCommentsSucces } from "./commentsByPostIdSlice";
import { getPosts, getPostsError, getPostsSucces } from "./postsSlice"

export function fetchPosts() {
    return async(dispatch) => {
        dispatch(getPosts());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            dispatch(getPostsSucces(data));
        } catch (error) {
            console.log(error);
            dispatch(getPostsError());
        }
    }
}

export function fetchCommentsByPostId(postId) {
    return async(dispatch) => {
        dispatch(getComments());

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const data = await response.json();
            console.log(data);
            dispatch(getCommentsSucces(data));
            
        } catch (error) {
            console.log(error);
            
        }
    }
}