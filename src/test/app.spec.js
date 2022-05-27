/* eslint-disable no-unused-expressions */
import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import "./setup.js";

import { App } from "../App";
import { ContactForm } from "../components/ContactForm";
import { Message } from "../components/Message";
import { UserPanel } from "../components/UserPanel";

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should render ContactForm", () => {
    expect(wrapper.find(ContactForm).exists()).to.be.true;
  });

  it("should hide <ContactForm/> after sendContact() was called", () => {
    wrapper.find('form [type="submit"]').simulate("submit");
    expect(wrapper.find(ContactForm).exists()).not.to.be.true;
  });

  it("should show <Message/> after sendContact() was called", () => {
    expect(wrapper.find(Message).exists()).to.be.false;
    wrapper.find('form [type="submit"]').simulate("submit");
    expect(wrapper.find(Message).exists()).to.be.true;
  });

  it("should have empty currentUser data until logged in", () => {
    const DEFAULT_CONTACT_FORM = {
      name: "",
      email: "",
      option: "A",
      select: 1,
      terms: false,
      message: "",
    };

    mount(
      <ContactForm
        contact={DEFAULT_CONTACT_FORM}
        onChange={() => {}}
        onSubmit={() => {}}
      />
    );

    const logginButton = wrapper.find("button");

    const inputName = wrapper.find('[name="name"]');
    expect(inputName).to.have.value("");

    logginButton.simulate("click");

    expect(inputName).not.to.have.value("");
  });

  it("should populate contact with user details (name, email) after login", () => {
    const logginButton = wrapper.find("button");
    const inputName = wrapper.find('[name="name"]');
    const inputEmail = wrapper.find('[name="email"]');

    expect(inputName).to.have.value("");
    expect(inputEmail).to.have.value("");
    expect(logginButton).to.have.text("Log In");

    logginButton.simulate("click");

    const contact = {
      name: "Test User",
      email: "user@example.com",
    };

    expect(inputName).to.have.value(contact.name);
    expect(inputEmail).to.have.value(contact.email);
  });

  it("should show <UserPanel> with currentUser info after login", () => {
    expect(wrapper.find(UserPanel).exists()).to.be.false;

    const logginButton = wrapper.find("button");
    logginButton.simulate("click");

    expect(wrapper.find(UserPanel).exists()).to.be.true;
  });
});
