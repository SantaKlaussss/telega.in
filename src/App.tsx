import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owners from "./components/Owners/Owners";
import {Customers} from "./components/Customers/Customers";
import Footer from "./components/Footer/Footer";
import '@mantine/carousel/styles.css';

export function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Owners />} />
        <Route path="/toggle-u" element={<Customers />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
}
