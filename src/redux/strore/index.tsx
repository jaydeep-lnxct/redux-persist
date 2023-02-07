import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer";


import persistStore from "redux-persist/es/persistStore";

import { compose} from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers()
);

export const persistor = persistStore(store);