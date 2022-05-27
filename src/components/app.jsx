import React, { useState } from "react";
import { ContactForm } from "./contact-form";
import { Message } from "./message";
import { UserPanel } from "./user-panel";

const DEFAULT_CONTACT_FORM = {
  name: "",
  email: "",
  option: "A",
  select: 1,
  type: "",
  message: "",
};

export function App() {
  const [contact, setContact] = useState(DEFAULT_CONTACT_FORM);
  const [hasFormSent, setHasFormSent] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  function contactChanged(contact) {
    setContact(contact);
  }

  function sendContact(contact) {
    // For now just mark it as `sent`
    setHasFormSent(true);
  }

  function handleLogin() {
    setCurrentUser({
      name: "Test User",
      email: "user@example.com",
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="pull-right">
            <button className="btn btn-default">
              <i className="glyphicon glyphicon-user"></i> Log In
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h2>Contact us</h2>
          <p>Please fill in form on the right to get fast reply</p>
          <img
            style={{ width: "100%" }}
            alt="User contact image"
            src="http://via.placeholder.com/300x200"
          />
        </div>
        <div className="col-md-8">
          <ContactForm
            data={contact}
            onChange={contactChanged}
            onSubmit={sendContact}
          />
        </div>
      </div>
    </div>
  );
}
