import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "../Components/Todo/Edit";
import Todo from "../Components/Todo/Todo";
import TodoItem from "../Components/Todo/TodoItem";
import TodoList from "../Components/Todo/TodoList";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/todolist/:id" element={<TodoItem />} />
      <Route path="/todolist/:id/edit" element={<Edit />} />
    </Routes>
  );
};

export default Allroutes;
