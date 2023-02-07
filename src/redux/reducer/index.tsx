import { combineReducers } from "@reduxjs/toolkit";
import { userPersistConfig, userReducer } from "./users";
import {persistReducer} from "redux-persist";

export const rootReducer = combineReducers({
    users: persistReducer(userPersistConfig, userReducer)
})

export type RootState = ReturnType<typeof rootReducer>