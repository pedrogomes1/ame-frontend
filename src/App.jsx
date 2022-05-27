import React, { useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { Message } from "./components/Message";
import { UserPanel } from "./components/UserPanel";

const DEFAULT_CONTACT_FORM = {
  name: "",
  email: "",
  option: "A",
  select: 1,
  terms: false,
  message: "",
};

export function App() {
  const [contact, setContact] = useState(DEFAULT_CONTACT_FORM);
  const [hasFormSent, setHasFormSent] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState({
    header: "",
    text: "",
  });

  function handleContactChange(contact) {
    setContact(contact);
  }

  function handleSendContact() {
    setHasFormSent(true);
    setSuccessMessage({
      header: "Thank You",
      text: "We will reply to your message in next 24h. Have a nice day! ;-)",
    });
  }

  function handleLogin() {
    setCurrentUser({
      name: "Test User",
      email: "user@example.com",
    });
    setContact((prevContact) => ({
      ...prevContact,
      name: "Test User",
      email: "user@example.com",
    }));
  }

  return (
    <div className="container">
      {hasFormSent ? (
        <Message header={successMessage.header} text={successMessage.text} />
      ) : (
        <>
          <div className="row">
            <div className="col-md-12">
              {currentUser ? (
                <UserPanel user={currentUser} />
              ) : (
                <div className="pull-right">
                  <button className="btn btn-default" onClick={handleLogin}>
                    <i className="glyphicon glyphicon-user"></i>Log In
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2>Contact us</h2>
              <p>Please fill in form on the right to get fast reply</p>
              <img
                style={{ width: "100%" }}
                alt="User profile contact"
                src="http://via.placeholder.com/300x200"
              />
            </div>
            <div className="col-md-8">
              <ContactForm
                contact={contact}
                onChange={handleContactChange}
                onSubmit={handleSendContact}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
