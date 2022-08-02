import {
  Box,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  Flex,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate,Link } from "react-router-dom";
import { signUp } from "../../REDUX2/redux/action";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
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
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
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
      <Button onClick={handleSignUp}>SIGN UP</Button>
      <GoogleButton
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
      <Flex>Already a user please <Link to="/login"><Text color="blue" >_LOGIN</Text></Link></Flex>
    </Box>
  );
};

export default SignUp;
