import { ThemeActionsTypes } from '../types';

const defaultState = {
    theme: 'light',
};

interface ChangeThemeAction {
    type: ThemeActionsTypes.SET_THEME;
    payload: string; // assuming the theme is represented as a string
}

const themeReducer = (state = defaultState, action: ChangeThemeAction): typeof defaultState => {
    switch (action.type) {
        case ThemeActionsTypes.SET_THEME:
            console.log('Theme changed to ' + action.payload);
            localStorage.setItem('theme', action.payload);
            return { ...state, theme: action.payload };
        default:
            return state;
    }
}

export default themeReducer