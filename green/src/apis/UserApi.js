import React from "react";
import axios from "axios";


export const CurrentUser = async () => {
    let opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.get("/api/user/auth", opts);
       
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllUsers = async () => {
  
    try {
      const res = await axios.get("/api/user/allusers");
       
      return res.data.allusers;
    } catch (error) {
      console.log(error);
    }
  };
