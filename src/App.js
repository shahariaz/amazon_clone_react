import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

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
