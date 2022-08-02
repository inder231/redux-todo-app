import {
  Box,
  Input,
  Button,
  Flex,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  deleteTodo,
  getTodos,
  logOut,
  toggleTodo,
} from "../../REDUX2/redux/action";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todoReducer.todos);
  const isLoading = useSelector((store) => store.todoReducer.isLoading);
  const isError = useSelector((store) => store.todoReducer.isError);
  useEffect(() => {
    dispatch(getTodos);
  }, []);
  return (
    <Box
      w="60%"
      m="10% auto"
      borderRadius="md"
      border="1px solid gray"
      p="1rem"
    >
      <Heading size="1xl" m="1rem">
        TODOS
      </Heading>
      <Flex>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if(e.key==="Enter"){
                const payload = {
                    todo: input,
                    status: false,
                  };
                dispatch(addTodo(payload))
            }
          }}
          type="text"
          placeholder="add something.."
        />
        <Button
          onClick={() => {
            const payload = {
              todo: input,
              status: false,
            };
            dispatch(addTodo(payload));
          }}
        >
          +
        </Button>
      </Flex>
      {isLoading ? (
        <Box m="1rem" color="green">
          <Spinner />
        </Box>
      ) : isError ? (
        <Box color="red">something went wrong....</Box>
      ) : (
        <Box m="1rem auto">
          {
            todos.length===0&&<Box>Empty todos...Please some tasks</Box>
          }
          {todos?.map((ele) => (
            <Flex key={ele.id} align="center" justify="space-between">
              <Button
                variant="ghost"
                onClick={() => dispatch(toggleTodo(ele.id, ele.status))}
              >
                <CheckCircleIcon color={ele.status ? "lightgreen" : "orange"} />
              </Button>
              <Text color={ele.status ? "black":"gray"}>
                {ele.todo}
              </Text>
              <Button
                variant="ghost"
                onClick={() => dispatch(deleteTodo(ele.id))}
              >
                <DeleteIcon color="red" />
              </Button>
            </Flex>
          ))}
        </Box>
      )}
      <Button onClick={()=>{
        logOut();
      }} >LOGOUT</Button>

    </Box>
  );
};

export default Todo;
