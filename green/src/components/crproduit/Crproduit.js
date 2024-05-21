import "./Crproduit.css";
import {
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../../apis/UserApi";

const Crproduit = () => {
  const navigate = useNavigate();
  const [create, setCreate] = useState({
    createdbyId: "",
    createdbyName: "",
    prjectname: "",
    budget: "",
    detail: "",
    duree: "",
    type: "",
    images: [],
  });

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setCreate({
      ...create,
      createdbyId: userLg.data.user._id,
      createdbyName: userLg.data.user.username,
      
    });
  };

  const [multipleFiles, setMultipleFiles] = useState();
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const uploadFileHandler1 = async () => {
    setCreate({ ...create, images: [] });
    // console.log(multipleFiles)
    // const file = e.target.files[0];
    const bodyFormData = new FormData();
    for (let i = 0; i < multipleFiles.length; i++) {
      bodyFormData.append("files", multipleFiles[i]);
    }
    // console.log(bodyFormData);

    const res = await axios.post(
      "http://localhost:5000/api/produit/upload/multipesfiles",
      bodyFormData
    );
    // console.log(res.data.imgs)
    setCreate({ ...create, images: res.data.imgs });
    // res.data.imgs.map((el)=>values.images.push(el))

    // console.log(imgs)
  };

  const handelCheck = (e) => {
    e.preventDefault();

    if (
      !create.prjectname ||
      !create.budget ||
      !create.detail ||
      !create.duree ||
      !create.type ||
      !create.images
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please check your informations !",
      });
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    //Object DeStructuring
    //Store Object Data into Variables

    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/produit/create", create, config);

      alert(`${res.data.msg}`);
      navigate("/produit");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  useEffect(() => {
    isLoggedIn();
  }, []);
  console.log(create);

  return (
    
      <div id="Create" className="body">
        <section >
          <div className="formgroup  col-sm-6 offset-sm-3 text-center">
            <br />
            <div className="container back shadow my-7 mb-1 py-5">
              <Form.Group as={Col} controlId="offer">
                <b className=" d-flex justify-content-center">
                  Describe your Product in a few words
                </b>
                <br />
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  className="form-control "
                  type="text"
                  placeholder="EX: Name of the product "
                  value={create?.prjectname}
                  onChange={(e) =>
                    setCreate({ ...create, prjectname: e.target.value })
                  }
                />
                <br />
                <Form.Label>Budget</Form.Label>
                <NumberInput
                  className="rounded-pill"
                  onChange={(valueString) =>
                    setCreate({ ...create, budget: parse(valueString) })
                  }
                  value={format(create.budget)}
                  min={0}
                  backgroundColor="white"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <br />
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  className="form-control "
                  type="text"
                  placeholder="Add quantity"
                  value={create?.duree}
                  onChange={(e) =>
                    setCreate({ ...create, duree: e.target.value })
                  }
                />
                <br />

                <div>
                  <label for="Inputtype" class="form-label">
                    Type
                  </label>
                  <select
                    class="form-control"
                   
                    onChange={(e) =>
                        setCreate({ ...create, type: e.target.value })}
                    name="type"
                  >
                    <option>--select--</option>
                    <option value="animal">Animals Waste</option>
                    <option value="plant">Plants Waste</option>
                    <option value="sea">Sea Waste</option>
                  </select>
                </div>
                <br />

                <Form.Label>Detail your needs precisely</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={create?.detail}
                  onChange={(e) =>
                    setCreate({ ...create, detail: e.target.value })
                  }
                  placeholder=" Add your product discription..."
                />
                <div class="blue">
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => MultipleFileChange(e)}
                    className="igmh myimage"
                    multiple
                  />
                </div>
                <br />
                <button
                  className="btn btn-primary rounded-pill"
                  type="button"
                  onClick={uploadFileHandler1}
                >
                  Upload
                </button>
                <br />
              </Form.Group>
              <br />
              <Link to="/">
                <Button
                  className="btn  me-4 rounded-pill px-4 py-2"
                  variant="danger"
                  onClick={handelCheck}
                href="/"
                >
                  <i class="fa fa-check px-1" aria-hidden="true"></i>Submit
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    
  );
};

export default Crproduit;
