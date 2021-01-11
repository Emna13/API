import React from "react";
import { Table } from "react-bootstrap";

const UserCard = ({ list }) => {
  return (
    <div style={{ margin: "30px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {list.map((item, key) => (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>@{item.username}</td>
              <td>{item.email}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default UserCard;
