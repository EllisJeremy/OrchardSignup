import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import LoginPage from "./pages/LoginPage/LoginPage";


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Menu/Calendar" element={<CalendarPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}