import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store';

export const ToggleColorMode = () => {
    const dispatch = useDispatch();

    const { value } = useSelector(state => state.theme);

    const toggleColorMode = () => {
        if (value === 'light') {
            dispatch(setTheme('dark'));
        } else {
            dispatch(setTheme('light'));
        }
    }


    return (
        <Box sx={{ maxWidth: '32px' }}>
            <Button
                variant="text"
                onClick={toggleColorMode}
                size="small"
                aria-label="button to toggle theme"
                sx={{ minWidth: '32px', height: '32px', p: '4px' }}
            >
                {value === 'dark' ? (
                    <Brightness7Icon fontSize="small" />
                ) : (
                    <Brightness4Icon fontSize="small" />
                )}
            </Button>
        </Box>
    );
}


