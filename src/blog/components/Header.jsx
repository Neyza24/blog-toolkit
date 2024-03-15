import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom"
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ToggleColorMode } from './ToggleColorMode';
import { pagesData } from '../../mock/data';



export const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Toolbar position="sticky" sx={{ borderBottom: 1, borderColor: 'divider', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    BLOG-KIT
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pagesData.map((page) => (
                        <Button
                            key={page.name}
                            to={page.route}
                            component={RouterLink}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'dark', display: 'block' }}

                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pagesData.map((page) => (
                            <MenuItem key={page.name} onClick={handleCloseNavMenu}
                                to={page.route}
                                component={RouterLink}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>


                <Box>
                    <ToggleColorMode />
                </Box>
            </Toolbar>
        </>
    );
}

/* eslint react/prop-types: 0 */