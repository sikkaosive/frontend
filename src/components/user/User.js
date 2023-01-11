import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

export const User = ({ userId, name, avatar }) => {
  return (
    <Link className="homeUser" to={`/user/${userId}`}>
      {avatar ? <img src={avatar} alt={name} /> : <AccountCircle />}
      <Typography>{name}</Typography>
    </Link>
  );
};
