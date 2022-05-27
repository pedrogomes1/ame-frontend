import React from "react";

export function UserPanel({ user }) {
  return (
    <div>
      <h3>
        <i className="glyphicon glyphicon-user"></i> Welcome, {user.name}
      </h3>
    </div>
  );
}
