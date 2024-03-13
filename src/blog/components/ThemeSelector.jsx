import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../../store";
import { Switch } from "@mui/material";


export const ThemeSelector = () => {

    const dispatch = useDispatch();
    const {value} = useSelector(state => state.theme);

    const handleChangeTheme = (e) => {
        if(e.target.checked) {
            dispatch(setTheme('dark'));
        } else {
            dispatch(setTheme('light'));
        }

    }


    return (
        <>
            <Switch checked={value == 'dark'} onChange={handleChangeTheme}  />
        </>
    )
}
