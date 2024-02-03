import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// export type RootState = ReturnType<typeof rootReducer>;

export const mainStore = configureStore({
    reducer: rootReducer
})