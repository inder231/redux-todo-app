import { Box, Input, Button,Alert,AlertIcon,AlertTitle,Text,Flex } from "@chakra-ui/react";
import {useNavigate,Link} from 'react-router-dom';
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { logIn } from "../../REDUX2/redux/action";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    setError("");
    try {
       logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <Box
      w="300px"
      m="100px auto"
      h="250px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      border="1px solid gray"
      borderRadius="md"
      p="1rem"
    >
      {error&&<Alert status="error" >
        <AlertIcon/><AlertTitle>
          {error}</AlertTitle></Alert>}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} >LOGIN</Button>
      <GoogleButton
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
      <Flex>If you are a new user please <Link to="/signup"><Text color="blue" >_SIGNUP</Text></Link></Flex>
    </Box>
  );
};

export default Login;
