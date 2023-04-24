import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
const AddTours = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [enterDistance, setEnterDistance] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterMaxGroupSize, setEnterMaxGroupSize] = useState("");
  const [enterDesc, setEnterDesc] = useState("");
  const [enterPhoto, setEnterPhoto] = useState("null");

  const addTour = async (e) => {
    e.preventDefault();

    const tour = {
      title: enterTitle,
      city: enterCity,
      address: enterAddress,
      distance: enterDistance,
      price: enterPrice,
      maxGroupSize: enterMaxGroupSize,
      desc: enterDesc,
      photo: enterPhoto,
    };

    console.log(tour);
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Tour</h4>
            <Form onSubmit={addTour}>
              <FormGroup className="form__group">
                <span>Tour title</span>
                <input
                  type="text"
                  placeholder=" name"
                  value={enterTitle}
                  onChange={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>City</span>
                <input
                  type="text"
                  placeholder="location"
                  value={enterCity}
                  onChange={(e) => setEnterCity(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>address</span>
                <input
                  type="text"
                  placeholder="duong"
                  value={enterAddress}
                  onChange={(e) => setEnterAddress(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>distance</span>
                <input
                  type="number"
                  placeholder="duong"
                  value={enterDistance}
                  onChange={(e) => setEnterDistance(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>price</span>
                <input
                  type="number"
                  placeholder="duong"
                  value={enterPrice}
                  onChange={(e) => setEnterPrice(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Max Group Size</span>
                <input
                  type="number"
                  placeholder="duong"
                  value={enterMaxGroupSize}
                  onChange={(e) => setEnterMaxGroupSize(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>desc</span>
                <input
                  type="text"
                  placeholder="duong"
                  value={enterDesc}
                  onChange={(e) => setEnterDesc(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Image</span>
                <input
                  type="file"
                  placeholder="duong"
                  value={enterPhoto}
                  onChange={(e) => setEnterPhoto(e.target.files[0])}
                  required
                />
              </FormGroup>
              <button className="primary__btn"> Add Tour</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddTours;
