
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DemoPage from "./components/DemoPage"; // You'll need to create this if it doesn't exist yet


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<DemoPage />} />
    </Routes>
  );
}
