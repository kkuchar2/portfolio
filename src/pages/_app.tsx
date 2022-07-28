import {ChakraProvider} from "@chakra-ui/react";

import "../styles/globals.css";
import {AppWrapper} from "../context/state";
import theme from "../theme";
import Head from "next/head";

const App = function ({ Component, pageProps }) {
    return <AppWrapper>
        <Head>
            <title>My new cool app</title>
        </Head>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    </AppWrapper>;
};

export default App;
