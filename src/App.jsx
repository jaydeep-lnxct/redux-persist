import "./App.css";
import "./../public/assets/style/index.css";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const routes = [
    { url: "/signup", component: <SignupPage /> },
    { url: "/login", component: <LoginPage /> },
  ];
  return (
    <>
      <Routes>
        <Route exact path="/" element={<div>home</div>}></Route>
        {routes.map((data, index) => (
          <Route key={index} exact path={data?.url} element={data?.component} />
        ))}
      </Routes>
    </>
  );
};

export default App;
