import { combineReducers } from "@reduxjs/toolkit";
import { userPersistConfig, userReducer } from "./users";
import persistReducer from "redux-persist/es/persistReducer";

export const rootReducer = combineReducers({
    users: persistReducer(userPersistConfig, userReducer)
})