import { createSlice } from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
//call api

//initstate
const initialState = {
  isLoggedIn: false,
  username: "",
  password: "",
};
//call api here
//create slice
export const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      //getState when click button login for test
      state.isLoggedIn = !state.isLoggedIn;
      state.username = action.payload.username;
      state.password = action.payload.password;
      //set token
      sessionStorage.setItem("token",JSON.stringify(Date.now()));
    },
  },
});

//export actions
export const { setSignIn } = userSlice.actions;
//export state
export const currentUser = (state) => state.userAuth.username;
//export reducer
export default userSlice.reducer;
