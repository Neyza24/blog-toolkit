import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchCommentsByPostId, fetchPostById } from "../../store";
import { Comment, Post } from "../components";
import { BlogLayout } from "../layout/BlogLayout";



export const SinglePostPage = () => {

    const dispatch = useDispatch();
    const { post, isLoading: isLoadingPost, hasError: hasErrorPost } = useSelector(state => state.post);
    const { comments, isLoading, hasError } = useSelector(state => state.comments);


    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchPostById(id));
        dispatch(fetchCommentsByPostId(id));
    }, [dispatch, id]);


    const renderPost = () => {
        if (isLoadingPost) return <p>Loading post...</p>;
        if (hasErrorPost) return <p>Unable to display post...</p>;

        return <Post post={post} />
    };

    const renderComments = () => {
        if (isLoading) return <p>Loading post...</p>;
        if (hasError) return <p>Unable to display post...</p>;

        return comments?.map(comment => <Comment key={comment.id} comment={comment} />)
    }

    return (
        <BlogLayout>
            <section>
                <h2>Post</h2>
                {renderPost()}
                <h2>Comments</h2>
                {renderComments()}
            </section>
        </BlogLayout>

    )
}


/* eslint react/prop-types: 0 */