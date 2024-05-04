import { Container, VStack, Input, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // Here you would handle the login logic, possibly sending a request to a server
    // For now, we'll just display a toast message
    toast({
      title: "Login Attempted",
      description: `Username: ${username}, Password: ${password}`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading size="lg">Dart Login</Heading>
        <Text fontSize="md">Please enter your credentials to proceed.</Text>
        <VStack spacing={3} width="100%">
          <Input placeholder="Username" leftIcon={<FaUserCircle />} value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" leftIcon={<FaLock />} value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button colorScheme="blue" width="full" onClick={handleLogin}>
            Log In
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
