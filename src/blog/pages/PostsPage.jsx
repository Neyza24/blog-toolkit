import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../store";
import { Post } from "../components";
import { Pagination, Stack, Typography } from "@mui/material";
import { BlogLayout } from "../layout/BlogLayout";
import { paginate } from "../../utils/pagination";

const INITIAL_PAGE = 1;
const LIMIT = 10;


export const PostsPage = () => {

  const dispatch = useDispatch();
  const { posts, loading, hasErrors } = useSelector(state => state.posts);

  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const paginatedPosts = paginate(posts, LIMIT);
  const currentPosts = paginatedPosts[currentPage - 1];



  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])


  if (loading) return <p>Loading posts...</p>
  if (hasErrors) return <p>Unable to display posts.</p>


  return (
    <BlogLayout>
      <section>
        <Typography variant="h4">Posts</Typography>
        {
          currentPosts &&
          currentPosts.map(post => <Post key={post.id} post={post} excerpt />)
        }
        {
          paginatedPosts.length > 1 && (
            <Stack spacing={2} alignItems='center' margin={3} >
              <Pagination count={paginatedPosts.length} page={currentPage} onChange={(_, newPage) => setCurrentPage(newPage)} />
            </Stack>

          )
        }

      </section>
    </BlogLayout>

  )
}

