import React, { useState, useEffect } from "react";
import { CurrentUser, GetAllDev } from "../../apis/UserApi";
import { Avatar } from "@chakra-ui/react";
import "./Navvbare.css";
import { Link } from "react-router-dom";
const Navvbare = ({ping}) => {
  

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
 console.log(user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand brdd mt-2 mt-lg-0" href="/">
            <img
              src="/images/logoo.png"
              width={130}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
          
            
            <ul class="navbar-nav">
      <>  {!isAdmin && (
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Products
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a class="dropdown-item" href="/comunity">Animal Waste</a>
          </li>
          <li>
            <a class="dropdown-item" href="/commy">Plants Waste</a>
          </li>
          <li>
            <a class="dropdown-item" href="/Commuu">Sea Waste</a>
          </li>
        </ul>
      </li>
      )}
      </>
    </ul>
            
          </ul>
        
   
  
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="d-flex align-items-center">
          {/* Icon */}

          {/* Notifications */}
          <>
                
          <div className="dropdown">
         
            <>
            {isAdmin && (
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <span className="badge rounded-pill badge-notification bg-danger"></span>
              </a>)}
            </>
            <>
                  {isAdmin && (
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
             
                  <li>
                    <a className="dropdown-item" href="/produit">
                      Create
                    </a>
                  </li>
                
              
            </ul>)}</>
          </div></>
          {/* Avatar */}
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <Avatar
                className="avatar"
                size="md"
                cursor="pointer"
                name={user.username}

                
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              {!token ? (
                <>
                  <li>
                    <a className="dropdown-item" href="/login">
                    <i className="fa fa-sign-in" aria-hidden="true"/>&nbsp;
                      Login
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/register">
                    <i className="fa fa-user-plus" aria-hidden="true"/>&nbsp;
                      Registre
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {isAdmin && (
                    <>
                    <li>
                      <a className="dropdown-item" href="/dashboard">
                      <i className="fa fa-tachometer" aria-hidden="true"/>&nbsp;
                        Dashboard
                      </a>
                    </li>
                     <li>
                     <a className="dropdown-item" href="/edtprod">
                     <i class="fa fa-product-hunt" aria-hidden="true"></i>&nbsp;
                       Products
                     </a>
                   </li></>
                    
                  )}

                  <li>
                 
                    <a
                    
                      className="dropdown-item"
                      onClick={handleLogout}
                      href="/logout"
                    > <i className="fa fa-sign-out" aria-hidden="true"/>&nbsp;
                      Logout
                    </a>
                  </li>
                 
                 
                </>
              )}
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
      {/* Container wrapper */}
    </nav>
  );
};
export default Navvbare;
