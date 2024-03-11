import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../store";


export const PostsPage = () => {

  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  console.log(posts);

  return (
    <section>
      <h1>Posts</h1>
    </section>
  )
}
