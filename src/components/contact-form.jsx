import React from "react";
// import PropTypes from "prop-types";

const options = [
  { id: 1, label: "I have question about my membership" },
  { id: 2, label: "I have technical question" },
  { id: 3, label: "I would like to change membership" },
  { id: 4, label: "Other question" },
];

export function ContactForm(props) {
  const { contact, onChange, onSubmit } = props;

  const { name, email, option, select, message, terms } = contact;

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(contact);
  }

  function fieldChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
  }

  function isSelected(key, option) {
    // return this.props.data[key] == option;
  }

  return (
    <form>
      <h3>Contact Form</h3>

      <div class="form-group">
        <label className="form-label">Your Name:</label>
        <input name="name" className="form-control" />
      </div>

      <div class="form-group">
        <label className="form-label">Your Best Email:</label>
        <input name="email" className="form-control" />
      </div>

      <label className="form-label">Select your membership option:</label>
      <div class="form-group row">
        <label className="form-label col-xs-4">
          <input type="radio" name="option" value="A" /> Option A
        </label>
        <label className="form-label col-xs-4">
          <input type="radio" name="option" value="B" /> Option B
        </label>
        <label className="form-label col-xs-4">
          <input type="radio" name="option" value="C" /> Option C
        </label>
      </div>

      <hr />

      <div class="form-group">
        <label className="form-label">What can we help you with:</label>
        <select className="form-control" name="select">
          <option value="1">I have question about my membership</option>
        </select>
      </div>

      <div class="form-group">
        <label className="form-label">Message:</label>
        <textarea
          name="message"
          rows="10"
          placeholder="Please type your question here"
          className="form-control"
        />
      </div>

      <div class="form-group">
        <label className="form-label">
          {" "}
          <input type="checkbox" name="terms" /> I agree to terms and conditions{" "}
        </label>
      </div>

      <input type="submit" value="Send" className="contactform-submit" />
    </form>
  );
}

// ContactForm.propTypes = {
//   contact: {
//     name: PropTypes.string,
//     email: PropTypes.string,
//     option: PropTypes.string,
//     select: PropTypes.number,
//     message: PropTypes.string,
//     terms: PropTypes.bool,
//   }.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
