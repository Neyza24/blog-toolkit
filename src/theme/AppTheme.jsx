import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

const defaultTheme = darkTheme;

export const AppTheme = ({children}) => {
    const [activeTheme, setActiveTheme] = useState(defaultTheme);

    const {value} = useSelector(state => state.theme);

    useMemo(() => {
        switch (value) {
            case 'light':
                setActiveTheme(lightTheme);
                break;
            case 'dark':
                setActiveTheme(darkTheme);
                break;
            default:
                setActiveTheme(defaultTheme);
        }
    }, [value]);

    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

/* eslint react/prop-types: 0 */