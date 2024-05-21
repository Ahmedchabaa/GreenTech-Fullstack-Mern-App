import React, { useEffect, useState } from "react";
import "./ClientProfile.css";
import { GetAllOff } from "../../apis/OfferApi";
import Cltoff from "./Cltoff";
import { CurrentUser, GetAllDev } from "../../apis/UserApi";
import { Avatar } from "@chakra-ui/react";

const ClientProfile = () => {
  const [offer, setOffer] = useState([]);
  const [user, setUser] = useState({});
  

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
  };




  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

 
 
  
 
  useEffect( () => {
   
    isOffer();
    isLoggedIn();
   
  },[user._id]); 
  // console.log(offer);
  // console.log(user)
  // console.log(useroffers); 
// console.log(alldeve);

  return (
    <div className="body">
      <section id="cltt">
        <div className="ctn shadow">
          <div className=" ctnn shadow">
            <div className="flex  row">
              {offer?.map((el,index) => (
                <Cltoff off={el}  key={index}/>
              ))}
            </div>
          </div> 

          <div className="ctnn1 row shadow">
            <div className="name"><p>{user.username}</p></div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ClientProfile;
