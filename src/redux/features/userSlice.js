import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'cclr',
    age: 18
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state,{payload}) => {
            state.name = payload;
        },
        setUserAge: (state,{payload}) => {
            state.age = payload;
        }
    }
});

export const {
    setUserName, setUserAge
} = userSlice.actions;

export default userSlice.reducer;