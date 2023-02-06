import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer";
import persistStore from "redux-persist/es/persistStore";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);