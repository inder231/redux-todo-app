import React, { useEffect, useState } from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const TodoItem = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  return (
    <Box p="1rem">
      <Box align="left">
        {data && (
          <Box>
            <Heading size="1xl">Todo title :{data.title}</Heading>
            <Heading size="1xl">
              Todo Status : {data.status ? "Done" : "Not Done"}
            </Heading>
          </Box>
        )}
      </Box>
      <Box>
        <Link to="/todolist">
          <Button>Go Back</Button>
        </Link>
        <Button m="1">
          <Link to={`/todolist/${id}/edit`}>Edit</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
