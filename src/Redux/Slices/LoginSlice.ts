import { createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "../Thunks/LoginThunk";

let initialState = {
    isLoading: false
}

const UserLoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserLogin.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(UserLogin.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(UserLogin.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
})

export const loginReducer = UserLoginSlice.reducer;