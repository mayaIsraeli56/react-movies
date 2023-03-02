import React from "react";
import "../App.css"
import Form2 from "./Form2";

const Register = ({users, setUsers}) => {

  return (
    <div>
      <div className="flex flex-form">
        <h2>Register</h2>
        <Form2 state={"register"} users={users} setUsers={setUsers}></Form2>
      </div>
    </div>
  );
};

export default Register;