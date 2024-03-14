import { BlogLayout } from "../layout/BlogLayout"
import { FeaturedPost, MainFeaturedPost } from "../components"
import { featuredPosts } from "../../mock/data";
import { Grid } from "@mui/material"



export const DashboardPage = () => {
  return (
    <BlogLayout>
      <MainFeaturedPost />
      <Grid container spacing={4}>
        {
          featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))
        }
      </Grid>
    </BlogLayout>

  )
}
