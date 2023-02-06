import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import storage from 'redux-persist/lib/storage';
const initialState = {
    userData: [],
  };

  
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,

    reducers: {
        setUserData: (state,action)=> {
            state.userData.push(action.payload);
        },
        deleteUserData: (state,action)=> {
            state.userData.splice(action.payload,1)
        }
    }
})

export const userPersistConfig = {
    key: 'user',
    storage,
}

export const {setUserData}= userSlice.actions;
export const userReducer = userSlice.reducer;
