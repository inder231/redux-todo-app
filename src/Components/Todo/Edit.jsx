import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Input,
  Checkbox,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useParams, Link,useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import { setTodoRequest } from "../../Redux/AppReducer/action";
const Edit = () => {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const store = useSelector((store)=>store.todos)
  // console.log(store);
  const getTodo = () => {
    axios.get(`http://localhost:8080/todos/${id}`).then((res) => {
      setText(res.data.title);
      setStatus(res.data.status);
    });
  };
  const payload = {
    title: text,
    status: status,
  };
  const setTodo = () => {
    dispatch(setTodoRequest());
    axios
      .patch(`http://localhost:8080/todos/${id}`, payload )
      .then((res) => {
        navigate("/todolist");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getTodo();
  }, [id]);
  return (
    <Box h="100vh" bgColor="white" color="black">
      <Heading>Edit</Heading>
      <Box w="50%" m="auto" align="left">
        <Input
          type="text"
          variant="outline"
          background="gray.200"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Flex>
          <Text>Toggle Status:-</Text>
          <Checkbox
            colorScheme="green"
            defaultChecked={status}
            borderColor="red.100"
            m="1"
            onChange={(e) => setStatus(e.target.checked)}
          />
        </Flex>
      </Box>
      <Flex m="auto" w="50%" justify="space-around" align="center" mt="1rem">
        <Button variant="outline" colorScheme="green" onClick={setTodo}>
          Commit
        </Button>
        <Button variant="outline" colorScheme="blue">
          <Link to="/todolist">Go Back</Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default Edit;
