import React from "react";

export default function UserDetailsComponent({ currentUser }) {
  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      {/* Add more details as needed */}
    </div>
  );
}
