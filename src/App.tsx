import React from "react";
import "./App.css";
import "./../public/assets/style/index.css";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const routes = [
    { url: "/signup", element: <SignupPage /> },
    { url: "/login", element: <LoginPage /> },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<div>home</div>}></Route>
        {routes.map((data, index) => (
          <Route key={index} path={data?.url} element={data?.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
