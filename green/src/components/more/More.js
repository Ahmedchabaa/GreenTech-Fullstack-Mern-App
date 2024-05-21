import React from 'react';
import "./More.css"
const More = () => {
  return (
    <div>
 <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/logo.jpg" alt="About" className="plant mt-5" />
            </div>
            <div className="who col-md-6 ">
              <h3 className="fs-5">About Us</h3>
              <h1 className="display-6">
                Who <b>We</b> Are
              </h1>
              <hr />
              <p className="lead mb-4">
              Recycly is a website that encourage for rcycling, our strategies are providing customers 
              by a huge types of products. our products are 100% bio and natural extracted.<br/>
               <a href='/about' className='linkk'>More...</a>
              </p>
              <a
                href="/comunity"
                className="btn btn-success rounded-pill px-4 py-2"
              >
                Our Services
              </a>
             
              <a
                href="/contact"
                className="btn btn-success rounded-pill px-4 py-2 ms-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default More