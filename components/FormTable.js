import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormTable = () => {
  return (
    <Form>
      <Form.Group className="mb-3 row align-items-center" controlId="formBasicEmail">
        <Form.Label className="col-4">Name:</Form.Label>
        <div className="col-8">
          <Form.Control type="name" placeholder="Enter name" />
        </div>
      </Form.Group>
      <Form.Group
        className="mb-3 mb-3 row align-items-center"
        controlId="formBasicPassword"
      >
        <Form.Label className="col-4">Age:</Form.Label>
        <div className="col-8">
          <Form.Control type="number" placeholder="Enter age" />
        </div>
      </Form.Group>
      <Form.Group
        className="mb-3 mb-3 row align-items-center"
        controlId="formBasicPassword"
      >
        <Form.Label className="col-4">Address:</Form.Label>
        <div className="col-8">
          <Form.Control type="text" placeholder="Enter address" />
        </div>
      </Form.Group>
      <Form.Group
        className="mb-3 mb-3 row align-items-center"
        controlId="formBasicPassword"
      >
        <Form.Label className="col-4">Phone:</Form.Label>
        <div className="col-8">
          <Form.Control type="number" placeholder="Enter number" />
        </div>
      </Form.Group>
      <Button variant="success" type="submit" className="float-end">
        Create
      </Button>
    </Form>
  );
};

export default FormTable;
