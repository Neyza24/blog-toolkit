// Asynchronous thunk action

import { getComments, getCommentsError, getCommentsSuccess} from "./commentsByPostIdSlice";
import { getPost, getPostError, getPostSuccess } from "./postByIdSlice";
import { getPosts, getPostsError, getPostsSuccess } from "./postsSlice"

export function fetchPosts() {
    return async(dispatch) => {
        dispatch(getPosts());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(getPostsSuccess(data));
        } catch (error) {
            
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
            dispatch(getCommentsSuccess(data));
            
        } catch (error) {
            dispatch(getCommentsError());
            
        }
    }
}

export function fetchPostById(id) {
    return async(dispatch) => {
        dispatch(getPost());
        
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            console.log(data);
            dispatch(getPostSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(getPostError());
        }
    }
}