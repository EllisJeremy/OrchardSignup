import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import CalendarPage from "./pages/CalendarPage/CalendarPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Menu" element={<Menupage />} />
        <Route path="/Menu/Calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  )
}