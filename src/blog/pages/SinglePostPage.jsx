import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCommentsByPostId } from "../../store";
import { useParams } from "react-router-dom";
import { Comment } from "../components";



export const SinglePostPage = () => {

    const dispatch = useDispatch();
    const {isLoading, comments} = useSelector(state => state.comments);
    
    const {id} = useParams();

    console.log(isLoading, comments);

    useEffect(() => {

        dispatch(fetchCommentsByPostId(id));
    }, [dispatch, id])



    return (
        <section>
            <h2>Comments</h2>
            {
                comments?.map( comment => <Comment key={comment.id} comment={comment}/>)
            }
        </section>
    )
}


/* eslint react/prop-types: 0 */