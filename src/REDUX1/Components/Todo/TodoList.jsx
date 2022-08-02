import {
  Box,
  Spinner,
  Text,
  Alert,
  AlertIcon,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  InfoIcon,
  CheckIcon,
  CheckCircleIcon,
  EditIcon,
} from "@chakra-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} from "../../Redux/AppReducer/action";
import { Link } from "react-router-dom";
const TodoList = () => {
  const [error, setError] = useState("");
  const { todos, isLoading, isError } = useSelector(
    (store) => store.todoReducer
  );
  const dispatch = useDispatch();
  const getTodos = async () => {
    dispatch(getTodoRequest());
    return await axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
        // console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
        dispatch(getTodoFailure());
      });
  };
  const deleteTodo = async (id) => {
    dispatch(deleteTodoRequest());
    return await axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteTodoSuccess);
      })
      .catch((err) => {
        dispatch(deleteTodoFailure());
      });
  };
  const deleteTodoHandler = (id) => {
    deleteTodo(id)
      .then(() => getTodos())
      .catch((err) => setError(err.message));
  };
  const toggleStatus = (id, ele) => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: !ele.status })
      .then((res) => {
        getTodos();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  if (isError) {
    return (
      <Box h="100vh" m="auto" bgColor="white" color="black">
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </Box>
    );
  }
  return (
    <div
      style={{
        height: "100vh",
        background: "white",
        color: "black",
        position: "relative",
      }}
    >
      <Flex justify="center" align="center" flexDir="column">
        <Link to="/">
          <Button variant="outline" colorScheme="red" m="1rem">
            Add todo
          </Button>
        </Link>
        {isLoading ? (
          <Spinner color="red.500" />
        ) : (
          <Box w="70%" m="auto">
            {todos?.map((ele) => (
              <Flex
                key={ele.id}
                m="1"
                border="1px solid gray"
                p="2"
                borderRadius="md"
                justify="space-between"
                align="center"
              >
                <Flex align="center" justify="space-between" w="50px">
                  <Link to={`/todolist/${ele.id}`}>
                    <InfoIcon />
                  </Link>
                  <Button onClick={() => toggleStatus(ele.id, ele)}>
                    {ele.status ? (
                      <CheckCircleIcon color="green" />
                    ) : (
                      <CheckIcon color="red" />
                    )}
                  </Button>
                </Flex>
                <Text textDecoration={ele.status ? "line-through" : null}>
                  {ele.title}
                </Text>
                <Flex align="center">
                  <Button m="1" variant="outline" colorScheme="green">
                    <Link to={`/todolist/${ele.id}/edit`}>
                      <Icon as={EditIcon} color="green.500" />
                    </Link>
                  </Button>
                  <Button
                    m="1"
                    onClick={() => deleteTodoHandler(ele.id)}
                    variant="outline"
                    colorScheme="red"
                  >
                    <Icon as={DeleteIcon} color="red.500" />
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Box>
        )}
      </Flex>
    </div>
  );
};

export default TodoList;
