import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./REDUX2/components/firebase";

export const authContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};
