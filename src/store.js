import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/userAuth'
import appSlice  from "./features/appSlice";
export const store = configureStore({
  reducer: {
    userAuth: userSlice,
    appCrud: appSlice
  }
});