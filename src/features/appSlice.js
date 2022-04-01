import { createSlice } from "@reduxjs/toolkit";
const dataApp =  [
  {
    key: "1",
    id: "zl",
    name: "Zalo",
  },
  {
    key: "2",
    id: "tv",
    name: "Teamview",
  },
  {
    key: "3",
    id: "ds",
    name: "MSBOT",
  },
  {
    key: "4",
    id: "fe",
    name: "Fire Eye",
  },
];
localStorage.setItem('dataApp',JSON.stringify(dataApp));
const initialState = [];

export const appSlice = createSlice({
  name: "appCrud",
  initialState,
  reducers: {
    loadDataApp : (state,action) =>{
      
    },
    AddApp: (state, action) => {
        
    },
    editApp: (state, action) => {

    },
    delApp: (state, action) => {

    },
  },
});
// action
export const { appCrud } = appSlice.actions;
// state

//reducer
export default appSlice.reducer;
