import React, { useEffect, useState, useRef } from "react";
import Devcard from "../devcard/Devcard";
import "./Community.css";



import { Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, Navigate } from "react-router-dom";
import { Input, List } from "@chakra-ui/react";
import { GetAllOff } from "../../apis/OfferApi";
import { CurrentUser } from "../../apis/UserApi";
const Comunity = () => {
  const [offer, setOffer] = useState([]);
  const [list, setList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");

  const isOffer = async () => {
    const oflg = await GetAllOff();
    const lg=  oflg?.filter((el)=>el.type === "animal");
    setList(lg) 
    setOffer(oflg);
  };

  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
  };


  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    const searchFruits = list.filter((el) => {
      return el.prjectname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredResults(searchFruits);
  };

 

  useEffect(() => {
    isOffer();
    isUser();
   
  }, []);
  console.log(list);
 
  // console.log(user); 

  return (
    <div id="cmnt">
      <div className="mainSection">
        <div className="contentBox ctnbox">
         
            <h1 className="text-bold">Our Products</h1>
            <p>
              A whole world of freelance talent at your fingertips{" "}
              <i className="fa fa-diamond" aria-hidden="true"></i>
              <br />
              Find the perfect freelance services for your business !
            </p>
         
          <div>
            <div className="btnn rounded-pill">
              <Input
                icon="search"
                placeholder="Search..."
                onChange={handleSearch}
                value={searchInput}
              />
            </div>
          </div>
          <CardGroup
            className="cardres "
            itemsPerRow={3}
            style={{ marginTop: 20 }}
          >
            {searchInput &&
              filteredResults &&
              filteredResults.map((item) => {
                return (
                  <Card className="cardd">
                    <Link to={`/dev/${item._id}`} state={{ dev: item }}>
                      <CardHeader>{item.prjectname}</CardHeader>
                    </Link>
                  </Card>
                );
              })}
          </CardGroup>
        </div>
        <div className="imgContainer">
          <img src="/images/animals.png" alt="home" />
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-12 mb-5">
      
              <h1 className="display-6 fw-bolder text-center">
                Our Products{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </h1>
        
            <br />
            <hr />
          </div>
        </div>
      </div>
      
  
      <div className="flex  row">
        {list
          ?.filter(
            (e) =>
              (e._id != user._id &&
                e.prjectname.toLowerCase().includes(search.toLowerCase()))
          )
          .map((el) => (
            <Devcard dev={el} />
          ))}
      </div>
    </div>
  );
};

export default Comunity;
