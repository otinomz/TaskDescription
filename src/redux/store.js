import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import assignedUserReducer from './getUsers/assignedUserSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        assignedUser: assignedUserReducer
    }
})