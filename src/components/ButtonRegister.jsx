import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navigation.css";

const ButtonRegister = () => {
  return (
    <Link to={"/sign-up"} className="btn" style={{ borderRadius: 0 }}>
      Register
    </Link>
  );
};

export default ButtonRegister;
