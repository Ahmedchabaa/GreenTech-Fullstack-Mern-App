import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };

    
    try {
      const res = await axios.post("/api/user/login", user, config);
      localStorage.setItem("token", res.data.token);
      console.log(res.data.searchedUser);
      if (res.data.searchedUser.authorize.toString()==="true") {
        localStorage.setItem("isAuthorized", res.data.searchedUser.authorize);
        navigate("/");
        window.location.reload();
      }
      if (res.data.searchedUser.isAdmin.toString() === "true") {
        localStorage.setItem("isAdmin", res.data.searchedUser.isAdmin);
      }

      if (res.data.searchedUser.isAdmin) {
        navigate("/dashboard");
        window.location.reload();
      }
     
      
   
     
    } catch (error) {
      const { errors, msg } = error.response.data;
      if (Array.isArray(errors)) {
        errors.map((el) => alert(el.msg));
      }
      if (msg) {
        alert(msg);
      }

      console.log(error);
    }
  };
    
  return (
    <div className="back">
      <div className="container shadow my-5">
        <div className="row">
          <div
            className="col-md-5 d-flex flex-column
               align-items-center text-white justify-content-center formm"
          >
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">
              Enter Your Email And Password To Login
            </p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light
           rounded-pill pb-2 w-50 text-black"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 ">LOGIN</h1>

            <form className="logform">
              <div className="mb-3 pass">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <input
                  placeholder="E-mail"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 pass">
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input
                  placeholder="Password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary  mt-4 rounded-pill btlog"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </button>

              <NavLink to="/check" className="forget">
                {" "}
                <h4 className="mb-3">Forget Password?</h4>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
