import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { coursesApi } from './api/courses/coursesAPI';

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath]: coursesApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesApi.middleware),
    
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(pokemonApi.middleware)
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {courses: CoursesState,...}
export type AppDispatch = typeof store.dispatch;

/* const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer> */