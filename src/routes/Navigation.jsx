import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Navigation = ({disable}) => {
  const navigate = useNavigate();
  return (
    <div className="navi">
      <h3> Navigation:  </h3>
      <button className="button-30" role="button" disabled={disable==="Home"} onClick={() => navigate("/")}>Home</button>
      <button className="button-30" role="button" disabled={disable==="Pagination"} onClick={() => navigate("/pagination")}>Pagination</button>
      <button className="button-30" role="button" disabled={disable==="Movies"} onClick={() => navigate("/movies")}>Movies</button>
      <button className="button-30" role="button" disabled={disable==="Form"} onClick={() => navigate("/form")}>Form</button>
      <button className="button-30" role="button" disabled={disable==="RegisterAndLogin"} onClick={() => navigate("/register-and-login")}>Register/Login</button>
    </div>
  );
};

export default Navigation;
