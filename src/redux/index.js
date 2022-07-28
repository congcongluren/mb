import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import bookSlice from './features/bookSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        book: bookSlice
    }
});

export default store;