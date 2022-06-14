import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import assignedUserService from './userService';

// Get user from localStorage

const initialState = {
  assignedUser: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// get Assigned user
export const getUser = createAsyncThunk('auth/getAssigned', async (_, thunkAPI) => {
  
    try {
    
    return await assignedUserService.getAssignedUser()
  
  } catch (error) {

    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})


// export const getUsers = 

export const assignedUserSlice = createSlice({
    name: "auth",
    initialState,
  
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state) => {
            state.isLoading = true
        })

        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.assignedUser = action.payload
        })

        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.assignedUser = null
        })
      },
})

export const {
  reset
} = assignedUserSlice.actions

export default assignedUserSlice.reducer