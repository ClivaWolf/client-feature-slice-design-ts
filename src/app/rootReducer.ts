import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from 'features/themeSwitcher/components/themeReducer'

export const rootReducer = combineReducers({
    theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>