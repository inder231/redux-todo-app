import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Protected from "./Protected";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <HomePage/>
            </Protected>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
