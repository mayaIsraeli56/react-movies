import "./App.css";
import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Pagination from "./routes/Pagination";
import Movies from "./routes/Movies";
import Form from "./routes/Form";
import RegisterAndLogin from "./routes/RegisterAndLogin";

function App() {
  const [users, setUsers] = useState([
    {
      email: "email1@gmail.com",
      password: "1234567",
    },
  ]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pagination",
      element: <Pagination />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/register-and-login",
      element: <RegisterAndLogin users={users} setUsers={setUsers} />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
