import React, { useContext } from "react";
import { authContext } from "../../AuthContext";
import Todo from "../components/Todo";

const HomePage = () => {
  const user = useContext(authContext);

  return (
    <div>
      {user && <p>{user.email}</p>}
      <Todo />
    </div>
  );
};

export default HomePage;
