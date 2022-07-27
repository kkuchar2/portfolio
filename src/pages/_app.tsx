import {ChakraProvider} from "@chakra-ui/provider";

import "../styles/globals.css";
import {AppWrapper} from "../context/state";
import theme from "../theme";

const App = function ({ Component, pageProps }) {
    return <AppWrapper>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    </AppWrapper>;
};

export default App;
