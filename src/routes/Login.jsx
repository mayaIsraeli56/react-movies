import React, {useState} from "react";
import "../App.css"
import Form2 from "./Form2";

const Login = ({users, setUsers}) => {

 /*  const [loginUser, setloginUser] = useState({
    email: "",
    password: "",
  }); */

  return (
    <div>
      <div className="flex flex-form">
        <h2>Login</h2>
        <Form2 state={"login"} users={users} setUsers={setUsers}></Form2>
      </div>
    </div>
  );
};

export default Login;