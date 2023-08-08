// react import
import { Routes, Route, Navigate } from "react-router-dom";
// pages - components imports
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Success from "./pages/formSuccess/formSuccess";
// passing user object to content to check if user is logged in. conditionally rendering routes based on whether a user is logged in
export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
