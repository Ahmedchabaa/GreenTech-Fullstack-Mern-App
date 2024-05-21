import React, { useState, useEffect } from "react";
import { CurrentUser } from "../../apis/UserApi";
import { Link } from "react-router-dom";
const Header = ({ping}) => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  const isAuthorized = localStorage.getItem("isAuthorized");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isAuthorized");
  };

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  

  useEffect(() => {
    isLoggedIn();
    
  }, [ping]);

  
  return (
    <div id="home">
      <nav class="navbar navbar-expand-lg  shadow-5-strong">
        <div class="container-fluid txt">
          <a class="navbar-brand" href="/">
            Moon
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           <i class="fa fa-bars" aria-hidden="true"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/card">
                  Plants
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">
                 Pots
                </a>
              </li>

             
            </ul>
            <div class="d-flex align-items-center">
              <ul>
            <li class="nav-item">
                <a class="nav-link" href="/card">
                  Plants
                </a>
              </li>
              </ul>
            {!token  ?(
              <>
              <a type="button" class="btn  px-3 me-2" href="/login">
                Login
              </a>
              <a type="button" class="btn btn-success me-3" href="/register">
                Sign up for free
              </a>
              </>
               ):(
                <li>
                 
                <a
                
                  className="btn btn-danger"
                  onClick={handleLogout}
                  href="/logout"
                > <i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;
                  Logout
                </a>
              </li>

               )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
