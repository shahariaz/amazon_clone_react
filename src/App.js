// import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/LogingPage/Login";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/Context/StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51NcVmWLiyBnNMqpMWsBZNIyuJzY9lWvwAzZPXkGs0gppw7qM8SaNxTA4cBm1eKZJI919GvXlr3J1mXhMemQZFqXP00rAGAThQv"
);
function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    //this will only run once when the app component is loaded
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch({
          type: "SET_USER",
          user: user,
        });
        // ...
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  //BEM
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
