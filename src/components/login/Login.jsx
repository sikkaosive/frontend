import React from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return ( 
    <div className="login">
      <form className="loginForm">
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Media
        </Typography>
        <input type="email" />
        <input type="password" />
        <Link to={"/forgot/password"}>
          <Typography>forgot password?</Typography>
        </Link>
        <Button>Login</Button>
        <Link to={"/register"}>
          <Typography>New user?</Typography>
        </Link>
      </form>
    </div>
  );
};

export default Login;
