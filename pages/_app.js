import * as React from "react";

import { ChakraProvider, Box } from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Box minH="80vh">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
