import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../../AuthContext";
// import {} from "../../utils/localStorage";
const Protected = ({ children }) => {
  const user = useContext(authContext);  
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default Protected;
