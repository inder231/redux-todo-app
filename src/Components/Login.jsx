import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../Redux/AuthReducer/action";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(userEmail, userPassword);
  const handleLogin = () => {
    if (userPassword && userEmail) {
      const payload = {
        email: userEmail,
        password: userPassword,
      };
      console.log(payload);
      dispatch(loginRequest());
      return axios
        .post("https://reqres.in/api/login", payload)
        .then((res) => {
          console.log(res.data);
          dispatch(loginSuccess(res.data));
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          dispatch(loginFailure());
        });
    }
  };

  return (
    <Box h="100vh" bgColor="white" color="black" position="relative">
      <Heading>User Login</Heading>
      {error && (
        <Box>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        </Box>
      )}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        w="250px"
        h="250px"
        border="2px solid lightblue"
        p="1rem"
        borderRadius="md"
        display="flex"
        flexDir="column"
        justifyContent="space-evenly"
      >
        <Input
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          bg="gray.400"
          placeholder="Enter email"
          type="email"
        />
        <Input
          required
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          bg="gray.400"
          placeholder="Enter password"
          type="password"
        />
        <Button
          onClick={handleLogin}
          variant="outline"
          colorScheme="whatsapp"
          bg="white"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
