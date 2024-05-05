import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Layout from "./Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
