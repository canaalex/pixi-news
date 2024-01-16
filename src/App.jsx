import React from "react";
import DashBoard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-indigo-800 to-purple-900">
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
