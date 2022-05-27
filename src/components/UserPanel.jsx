import React from "react";
import PropTypes from "prop-types";

export function UserPanel({ user }) {
  return (
    <div>
      <h3>
        <i className="glyphicon glyphicon-user"></i> Welcome, {user.name}
      </h3>
    </div>
  );
}

UserPanel.defaultProps = {
  props: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};
