import React, { useState } from "react";
import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux/es/exports";
import axios from "axios";
import {
  setTodoFailure,
  setTodoRequest,
  setTodoSuccess,
} from "../../Redux/AppReducer/action";
const TodoInput = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const payload = {
    title: input,
    status: false,
  };
  const addTodo = async () => {
    if (input === "") {
      setError(true);
      return;
    }
    dispatch(setTodoRequest());
    await axios
      .post("http://localhost:8080/todos", payload)
      .then((res) => {
        console.log(res.data);
        dispatch(setTodoSuccess());

        toast({
          title: "Task added",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setInput("");
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(setTodoFailure());
      });
  };
  return (
    <Box w="300px" m="auto">
      <Input
        isInvalid={error}
        m="1rem auto"
        colorScheme="blackAlpha.100"
        variant="outline"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add something"
        bgColor="gray.400"
        fontSize="md"
      />
      <Button varinat="solid" colorScheme="blue" onClick={addTodo}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
