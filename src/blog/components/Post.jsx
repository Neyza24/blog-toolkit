import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"


export const Post = ({ post, excerpt }) => {
    

    return (
        <Card sx={{ minWidth: 345 }}>
            <CardContent
                variant="outlined"
            >
                <Typography variant="h5" component="div">{post.title}</Typography>
                <Typography>{excerpt ? post.body.substring(0, 100) : post.body}</Typography>

            </CardContent>
            <CardActions>
                {
                    excerpt && (
                        <Button to={`/posts/${post.id}`} component={RouterLink} variant="outlined">View Post</Button>
                    )
                }
            </CardActions>
        </Card>
    )
}

/* eslint react/prop-types: 0 */