import React from "react";
import "./App.css";
import "./../public/assets/style/index.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
const App = () => {
  
  return (
    <>
      <Routes>
        {routes.map((data, index) => (
          <Route key={index} path={data?.url} element={data?.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
