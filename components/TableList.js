import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Data from "./Data.js";
const TableList = ({ show, setShow }) => {
  const handleDelete = (id) => {
    let index = Data.map((e) => e.id).indexOf(id);
    Data.splice(index, 1);
    console.log(Data);
  };
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data && Data.length > 0
            ? Data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Button onClick={() => alert(item.id)} className="me-3">
                        Edit
                      </Button>
                      <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                    </td>
                  </tr>
                );
              })
            : "No data found"}
        </tbody>
      </Table>
      <Button
        variant="primary"
        type="submit"
        className="float-end"
        onClick={() => (!show ? setShow(true) : setShow(false))}
      >
        Create user
      </Button>
    </div>
  );
};

export default TableList;
