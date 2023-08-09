import React from "react";
import DeleteAllUsers from "./DeleteAllUsers.js";

const UserDetails = () => {
  return (
    <center>
      <h2 className="admin-subtitle">List of Users</h2>
      <button style={buttonStyle}>Add New Users</button>

      <ul style={listStyle}>
        <li>hi</li>
        <li>hii2</li>
      </ul>
      <hr style={hrStyle} />
      <DeleteAllUsers />
    </center>
  );
};

// Define styles
const buttonStyle = {
  backgroundColor: "grey",
  border: "none",
  padding: "10px 20px",
  color: "white",
  fontSize: "16px",
  borderRadius: "5px",
  cursor: "pointer",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
};

const hrStyle = {
  border: "1px solid grey",
  width: "80%",
};

export default UserDetails;
