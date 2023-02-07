import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/strore";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
