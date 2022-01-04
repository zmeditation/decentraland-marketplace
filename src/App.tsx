import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
