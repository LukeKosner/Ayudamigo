import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spacer,
  Center,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Alert status="info">
        <AlertIcon />
        <AlertDescription>
          Este sitio está en construcción.
        </AlertDescription>
      </Alert>
      <Center bg="gray.800" textColor="white">
        <Text fontSize="2xl" fontWeight="bold" padding={3}>
          ¡Ayudamigo!
        </Text>
        <Spacer />
      </Center>
    </div>
  );
}
