import React from "react";

export function Message({ header, text, children }) {
  return (
    <div className="text-center">
      {!!header && <h3 className="message-header">{header}</h3>}
      <div className="message-body">{text || children}</div>
    </div>
  );
}
