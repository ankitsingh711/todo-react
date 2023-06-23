import "./App.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import TodoItem from "./Pages/Todo-Item";
import Error from "./Pages/Error";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navbar home="Home" todolist="Todo List" about="About" />}
          />
          <Route path="about" element={<About />} />
          <Route path="todoitem" element={<TodoItem />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
