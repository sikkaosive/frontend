import React, { useState } from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { loginUser } from "../../actions/User";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password))
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Media
        </Typography>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
        />
        <Link to={"/forgot/password"}>
          <Typography>forgot password?</Typography>
        </Link>
        <Button type="submit">Login</Button>
        <Link to={"/register"}>
          <Typography>New user?</Typography>
        </Link>
      </form>
    </div>
  );
};

export default Login;
