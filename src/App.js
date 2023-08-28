import { Home } from "@mui/icons-material";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  //BEM
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
