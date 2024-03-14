import { Grid, Card, CardContent, Typography, CardActionArea } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"


export const Post = ({ post, excerpt }) => {


    return (
        <Grid item xs={12} md={12}>
            <CardActionArea to={`/posts/1`} component={RouterLink}>
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {excerpt ? post.body.substring(0, 100) : post.body}
                        </Typography>

                        {
                            excerpt && (
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            )
                        }

                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

/* eslint react/prop-types: 0 */