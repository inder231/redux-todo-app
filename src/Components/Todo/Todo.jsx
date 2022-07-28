import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TodoInput from "./TodoInput";
const Todo = () => {
  return (
    <div style={{ height: "100vh", background: "white", color: "black" }}>
      <Heading> Todo App </Heading>
      <Link to="/todolist">
        <Button variant="outline" colorScheme="teal">
          My Todos
        </Button>
      </Link>
      <TodoInput />
    </div>
  );
};

export default Todo;
