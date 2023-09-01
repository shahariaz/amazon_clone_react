import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const singIn = (e) => {
    e.preventDefault();
    //some fancy firebase stuff
  };
  const register = (e) => {
    e.preventDefault();
    //some fancy firebase stuff
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sing-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={singIn}
            type="submit"
            className="login__singInButton"
          >
            Sing In
          </button>
        </form>
        <p>
          By singing-in you agree to the Amazon Fake Clone conditions of Use &
          Sale. Please see our Privacy Notice,our Cookies Notice and Our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
