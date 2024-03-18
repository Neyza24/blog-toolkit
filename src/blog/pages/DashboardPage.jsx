import { BlogLayout } from "../layout/BlogLayout"
import { FeaturedPost, MainFeaturedPost } from "../components"
import { Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByLimit } from "../../store";
import { useEffect, useState } from "react";

export const DashboardPage = () => {

  const dispatch = useDispatch();
  const { postsLimit, loading, hasErrors } = useSelector(state => state.postsByLimit);

  const [image, setImage] = useState('');


  useEffect(() => {
    dispatch(fetchPostsByLimit(6));
    setImage('https://source.unsplash.com/random?wallpapers');

  }, [dispatch])


  if (loading) return <p>Loading posts...</p>
  if (hasErrors) return <p>Unable to display posts.</p>



  return (
    <BlogLayout>
      <MainFeaturedPost />
      <Grid container spacing={4}>
        {
          postsLimit.map((post) => (
            <FeaturedPost key={post.id} post={post} img={image} excerpt/>
          ))
        }
      </Grid>
    </BlogLayout>

  )
}
