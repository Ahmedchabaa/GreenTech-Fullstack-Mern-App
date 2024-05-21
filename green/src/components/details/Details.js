import React from "react";
import { useLocation } from "react-router-dom";
import Pay from "../pay/Pay";
import "./Details.css";
import { ApplyOff, Removeapply } from "../../apis/OfferApi";


const Details = () => {
  const location = useLocation();
  const { dev } = location.state;


  
  return (
    <div>
      <div>
        <section>
          <div className="container my-5 py-5">
            <div className="row">
              <div className="col-md-6">
              {dev.images.map((el) => (
              
                <img className="ml-5" src={el.filePath} alt />
             
            ))}
            <br/>
            <br/>
            <p>{dev.detail}</p>
              </div>
              <div className="why col-md-6 ">
                <h1 className="display-6">
                 Name : {dev.prjectname}
                </h1>
                <hr />
                <p className="lead mb-4">
                  Quantity : {dev.duree}
                </p>
               
               <p>Type: {dev.type}</p><br/>
                
               <a className="btn btn-primary" href="/pay">Buy Now</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
