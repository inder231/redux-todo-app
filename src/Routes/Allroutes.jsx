import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Edit from "../Components/Todo/Edit";
import Todo from "../Components/Todo/Todo";
import TodoItem from "../Components/Todo/TodoItem";
import TodoList from "../Components/Todo/TodoList";
import ProtectedRoute from "./ProtectedRoute";

const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute><Todo/></ProtectedRoute>
        }
      />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/todolist/:id" element={<TodoItem />} />
      <Route path="/todolist/:id/edit" element={<Edit />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Allroutes;
