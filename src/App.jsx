import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { ControlBar } from "./components/controlBar";
import { theme } from "./theme";
import { store } from "./store";
import { Provider } from "react-redux";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Provider store={store}>
          <ControlBar></ControlBar>
          <Outlet />
        </Provider>
      </div>
    </ChakraProvider>
  );
}

export default App;
