import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeContext } from './themeContext';
import { useTypedSelector } from 'shared/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ThemeActionsTypes } from '../types';

interface ThemeProviderProps {
   children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
   // const [theme, setTheme] = useState<string>('light');
   const {theme} = useTypedSelector(state => state.theme)
   // const theme = 'light';

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getThemeFromLocalStorage());
   }, []);

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme]);

   const setTheme = (theme: string) => {
      dispatch({ type: ThemeActionsTypes.SET_THEME, payload: theme });
   }

   return (
      <ThemeContext.Provider value={theme}>
         {children}
      </ThemeContext.Provider>
   );
};

// interface ChangeThemeAction {
//    type: ThemeActionsTypes.SET_THEME;
//    payload: string;
// }

// const themeReducer = (state = 'light', action: ChangeThemeAction): string => {
//    switch (action.type) {
//       case ThemeActionsTypes.SET_THEME:
//          return action.payload;
//       default:
//          return state;
//    }
// }

const getThemeFromLocalStorage = () => {
   const theme = localStorage.getItem('theme');
   if (theme) {
      return { type: ThemeActionsTypes.SET_THEME, payload: theme };
   } else {
      return { type: ThemeActionsTypes.SET_THEME, payload: 'light' };
   }
}

export default ThemeProvider;