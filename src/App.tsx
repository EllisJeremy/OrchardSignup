import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/Signup/Signup";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";

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
