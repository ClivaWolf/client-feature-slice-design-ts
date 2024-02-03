import { Select } from "antd";
import { useTypedSelector } from "shared/hooks/useTypedSelector";
import { ThemeActionsTypes } from "../types";
import { useDispatch } from "react-redux";


function ThemeSwitcher() {
    const {theme} = useTypedSelector(state => state.theme)
    const dispatch = useDispatch();

    const handleThemeChange = (theme: string) => {
        dispatch({type: ThemeActionsTypes.SET_THEME, payload: theme})
    }
    
    return ( 
        <Select 
            defaultValue={theme} 
            style={{ width: 120 }}
            onChange={handleThemeChange}
            >
            <Select.Option value="light">Light</Select.Option>
            <Select.Option value="dark">Dark</Select.Option>
            <Select.Option value="neon">Neon</Select.Option>
        </Select>
     );
}

export default ThemeSwitcher;