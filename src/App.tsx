import { HelmetProvider } from "react-helmet-async";
import ToDoList from "./components/ToDoList";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <ToDoList />
      </HelmetProvider>
    </>
  );
}

export default App;
