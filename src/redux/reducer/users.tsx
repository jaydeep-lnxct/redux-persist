import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { RootState } from "./index";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    setUserData: (
      state: any,
      action: { payload: { name: string; email: string; password: string } }
    ) => {
      state.userData.push(action.payload);
    },
    deleteUserData: (state, action) => {
      state.userData.splice(action.payload, 1);
    },
  },
});

export const userPersistConfig = {
  key: "user",
  storage,
};

export const { setUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const useUserState = () => {
  const allUsers = useSelector((state: RootState) => state?.users?.userData);
  return allUsers;
};
