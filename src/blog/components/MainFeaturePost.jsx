import { Link as RouterLink } from "react-router-dom"
import { mainPost } from '../../mock/data';
import { Button, Paper, Typography, Grid, Box } from '@mui/material';

export const MainFeaturedPost = () => {

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${mainPost.image})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={mainPost.image} alt={mainPost.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {mainPost.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {mainPost.description}
                        </Typography>
                        <Button variant="contained" to="/posts" component={RouterLink}>
                            {mainPost.linkText}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

/* eslint react/prop-types: 0 */