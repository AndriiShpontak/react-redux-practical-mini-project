import { configureStore } from '@reduxjs/toolkit';
import filters from '../components/heroesFilters/filtersSlice';
import { apiSlace } from '../api/apiSlice';

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);
};

const store = configureStore({
    reducer: {  filters, 
                [apiSlace.reducerPath]: apiSlace.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlace.middleware),
    devTools: process.env.NODE_ENV !== 'production'
    
})

export default store;