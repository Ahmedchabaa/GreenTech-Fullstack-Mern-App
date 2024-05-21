import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="sak">
      <section >
        <div className="container p3 my-6 py-6">
          <div className="row">
            <div className="col-md-4 promise-block__img promise-block__img--fixed promise-block__img--large">
              <img  src="./images/img1.jpg" alt="About" className="imggg2 p2  mt-5" />
              <p className="text-center"><b> Recycling</b> helps to reduce the pollution caused by <br/>the extraction and processing of <br/>virgin materials..</p>
            </div>
            <div className="col-md-4 promise-block__img promise-block__img--fixed promise-block__img--large">
              <img src="./images/img2.jpg" alt="About" className="imggg p1  mt-5" />
              <p className="text-center"><b> With the involvement and enthusiasm </b> of people like you, recycling is back and so are thousands upon thousands of recycled products made from materials .</p>
            </div>
            <div className="col-md-4 promise-block__img promise-block__img--fixed promise-block__img--large">
              <img src="/images/img3.jpg" alt="About" className="imgg1 p1  mt-5" />
              <p className="text-center"><b>The world </b>has changed a lot in the past century. From individually packaged food servings to disposable diapers, more garbage is generated now than ever before.</p>
            </div>
          
         
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
