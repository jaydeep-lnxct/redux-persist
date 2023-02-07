import LoginPage from "../../pages/auth/login";
import SignupPage from "../../pages/auth/signup";
import CrmDetails from "../../pages/crm-details";

export const routes = [
  { url: "/signup", element: <SignupPage /> },
  { url: "/login", element: <LoginPage /> },
  { url: "/", element: <CrmDetails /> },
];
