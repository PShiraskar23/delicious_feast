import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SuccessPage from "./Pages/Success";
import ProtectedRoute from "./Components/protectedRoute";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/success" element={<SuccessPage />} /> */}
          <Route
            path="/success"
            element={<ProtectedRoute element={<SuccessPage />} />}
          />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
