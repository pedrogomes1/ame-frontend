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

  const { name, email } = contact || {};

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(contact);
  }

  function handleChangeField(event) {
    const fieldName = event.target.name;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    onChange({ ...contact, [fieldName]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Contact Form</h3>

      <div className="form-group">
        <label className="form-label" htmlFor="fname">
          Your Name:
        </label>
        <input
          name="name"
          className="form-control"
          id="fname"
          onChange={handleChangeField}
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="femail">
          Your Best Email:
        </label>
        <input
          name="email"
          className="form-control"
          id="femail"
          onChange={handleChangeField}
          value={email}
        />
      </div>

      <label className="form-label">Select your membership option:</label>
      <div className="form-group row">
        <label className="form-label col-xs-4">
          <input
            type="radio"
            name="option"
            value="A"
            onChange={handleChangeField}
          />{" "}
          Option A
        </label>
        <label className="form-label col-xs-4">
          <input
            type="radio"
            name="option"
            value="B"
            onChange={handleChangeField}
          />{" "}
          Option B
        </label>
        <label className="form-label col-xs-4">
          <input
            type="radio"
            name="option"
            value="C"
            onChange={handleChangeField}
          />{" "}
          Option C
        </label>
      </div>

      <hr />

      <div className="form-group">
        <label className="form-label">What can we help you with:</label>
        <select
          className="form-control"
          name="select"
          onChange={handleChangeField}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="fmessage">
          Message:
        </label>
        <textarea
          name="message"
          rows="10"
          id="fmessage"
          placeholder="Please type your question here"
          className="form-control"
          onChange={handleChangeField}
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          <input type="checkbox" name="terms" onChange={handleChangeField} /> I
          agree to terms and conditions
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
