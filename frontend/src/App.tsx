import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import LoginPage from "./pages/AccountPages/LoginPage/LoginPage";
import SignupPage from "./pages/AccountPages/SignupPage/SignupPage";
import ForgotPasswordPage from "./pages/AccountPages/ForgotPasswordPage/ForgotPasswordPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Menu/Calendar" element={<CalendarPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
