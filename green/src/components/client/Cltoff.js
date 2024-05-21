import React, { useState } from "react";
import { Button, Card, ModalTitle } from "react-bootstrap";
import ModalCl from "./ModalCl";

import { Getone, hundelUpdate } from "../../apis/OfferApi";
const Cltoff = ({ off, key }) => {
  const [offer, setOffer] = useState({});
  const hundelPosted = async (el) => {
    hundelUpdate(off._id, {
      isCompleted: true,
    });

    const Useroffer = await Getone(offer._id);
    setOffer(Useroffer);
    console.log(offer);
    window.location.reload();
  };

  return (
    <div key={key}>
      <Card style={{ width: "35rem", margin: "1%" }}>
        <Card.Body>
          <ModalTitle>{off.prjectname}</ModalTitle>

          <Card.Text>
            <b>Price : $</b>
            {off.budget}
          </Card.Text>
          <br />
       
          <Card.Text>
            <b>Quantity :</b>
            {off.duree}
          </Card.Text>
          <br />
          <Card.Text><b>description :</b>
            {off.detail.substring(0, 300)}...</Card.Text>
          <br />
          <Card.Text>
            <b>Date :</b>
            {off.date.substring(0, 10)}
          </Card.Text>
          
          <br />
          <ModalCl offrr={off} keey={key} />
          
        
        
       
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cltoff;
