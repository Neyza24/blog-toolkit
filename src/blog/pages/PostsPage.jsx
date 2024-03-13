import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../store";
import { Post } from "../components";
import { Typography } from "@mui/material";


export const PostsPage = () => {

  const dispatch = useDispatch();
  const {posts, loading, hasErrors} = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  // console.log(posts);

  if(loading) return <p>Loading posts...</p>
  if(hasErrors) return <p>Unable to display posts.</p>


  return (
    <section>
      <Typography variant="h4">Posts</Typography>
      {
        posts.map( post => <Post key={post.id}  post={post} excerpt/>)
      }
    </section>
  )
}

