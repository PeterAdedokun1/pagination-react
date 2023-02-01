import logo from "./logo.svg";
import "./App.css";
import Character from "./component/Characters";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>rick and morty</h1>
        <QueryClientProvider client={queryClient}>
          <Character />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
