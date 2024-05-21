import React, { useEffect, useState } from "react";
import About from "../about/About";
import Cards from "../cards/Cards";

import Caroussel from "../caroussel/Caroussel";
import { GetAllOff } from "../../apis/OfferApi";

import Footer from "../footer/Footer";
import More from "../more/More";
import "./Home.css";
const Home = () => {
  const [offer, setOffer] = useState([]);


  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
  };



  useEffect(() => {
    isOffer();

   
  }, []);
  return (
    <div >
        
      <section id="home" className="sakura">
        
        <div className="container">
       
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder  text-center text-white"></h1>

              <p className="moon  text-center  mb-5 text-white">
               Recycly
              </p>

              <div className="buttons d-flex justify-content-center">
                <div className="App">
                  
                  <a className="btn btn-light" href="#about">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <About />
        <More/>
        <>
       
        </>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
