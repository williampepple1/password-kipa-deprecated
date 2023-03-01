import { configureStore } from '@reduxjs/toolkit';

import  passwordReducer  from '../features/appSlice';

export const store = configureStore({
    reducer: {
        password: passwordReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})