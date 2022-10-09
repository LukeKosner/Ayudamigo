import Link from "next/link";

import { Center, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center bg="gray.800" textColor="white">
      <Text fontSize="sm" padding={3}>
        Hecho en Nueva York, EE.UU., por {""}
        <Link href="https://lukekosner.com" target="_blank">
          <a>
            <u>Luke Kosner</u>
          </a>
        </Link>
        .
      </Text>
    </Center>
  );
}
