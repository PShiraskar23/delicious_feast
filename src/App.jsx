import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SuccessPage from "./Pages/Success";
import ProtectedRoute from "./Components/protectedRoute";
import toast, { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
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
