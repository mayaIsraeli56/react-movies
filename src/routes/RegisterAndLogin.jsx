import React from "react";
import Navigation from "./Navigation";
import Register from "./Register";
import Login from "./Login";
import "../App.css";

const RegisterAndLogin = ({users, setUsers}) => {
  return (
    <div>
      <Navigation disable={"RegisterAndLogin"}></Navigation>
      <h1>Register And Login</h1>
      <div className="flex">
        <Register users={users} setUsers={setUsers}></Register>
        <Login users={users} setUsers={setUsers}></Login>
      </div>
    </div>
  );
};

export default RegisterAndLogin;
