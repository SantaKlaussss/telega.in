import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owners from "./components/Owners/Owners";
import {Customers} from "./components/Customers/Customers";
import '@mantine/carousel/styles.css';
import {Catalog} from "./components/Catalog/Catalog";

export function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Owners />} />
        <Route path="/toggle-u" element={<Customers />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}
