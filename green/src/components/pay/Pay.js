import React from "react";
import "./Pay.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";



const Pay = () => {
  const navigate = useNavigate();

  const hundelUpdate1 =()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!'
    }).then((result) => {
      if (result.isConfirmed) {
      
        Swal.fire(
          'Payedd!',
          'Your Payment is successful.',
          'success'
  
    )
    navigate("/");}
    })
  }


  return (
    <MDBContainer
    className="pay py-5 "
    fluid
    style={{
      backgroundImage:
        "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
    }}
  >
    <MDBRow className=" d-flex justify-content-center">
      <MDBCol md="" lg="8" xl="5">
        <MDBCard className="pay rounded-3">
          <MDBCardBody className=" p-4">
            <div className="text-center mb-4">
              <h3>Settings</h3>
              <h6>Payment</h6>
            </div>
            <p className="fw-bold mb-4 pb-2">Saved cards:</p>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              />
              <div className="flex-fill mx-3">
                <div className="form-outline">
                  <MDBInput
                    label="Card Number"
                    id="form1"
                    type="text"
                    size="lg"
                   
                  />
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/visa.png"
              />
              <div className="flex-fill mx-3">
                <div className="form-outline">
                  <MDBInput
                    label="Card Number"
                    id="form2"
                    type="text"
                    size="lg"
                    
                  />
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>
            <p className="fw-bold mb-4">Add new card:</p>
            <MDBInput
              label="Cardholder's Name"
              id="form3"
              type="text"
              size="lg"
             
            />
            <MDBRow className="my-4">
              <MDBCol size="7">
                <MDBInput
                  label="Card Number"
                  id="form4"
                  type="text"
                  size="lg"
                  
                />
              </MDBCol>
              <MDBCol size="3">
                <MDBInput
                  label="Expire"
                  id="form5"
                  type="password"
                  size="lg"
                  placeholder="MM/YYYY"
                />
              </MDBCol>
              <MDBCol size="2">
                <MDBInput
                  label="CVV"
                  id="form6"
                  type="password"
                  size="lg"
                  placeholder="CVV"
                />
              </MDBCol>
            </MDBRow>
            <Button color="success" size="lg" block  onClick={hundelUpdate1}>
              PAY NOW
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  )
}

export default Pay