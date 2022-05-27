import React from "react";
import PropTypes from "prop-types";

export function Message({ header, text, children }) {
  return (
    <div className="text-center">
      {!!header && <h3 className="message-header">{header}</h3>}
      <div className="message-body">{text || children}</div>
    </div>
  );
}

Message.propTypes = {
  props: PropTypes.shape({
    header: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
  }),
};
