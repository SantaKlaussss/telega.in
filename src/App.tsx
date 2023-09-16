import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owners from "./components/Owners/Owners";
import Customers from "./components/Customers/Customers";

export function App() {
  return (
    <Router >
      <Routes>
        <Route path="/toggle-f" element={<Owners />} />
        <Route path="/toggle-u" element={<Customers />} />
      </Routes>
    </Router>
  );
}
