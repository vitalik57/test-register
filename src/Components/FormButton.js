import React from "react";
const FormButton = ({ singUPClick }) => {
  return (
    <>
      {" "}
      <button className="form__button"> Sign Up</button>
      <div className="form__comment">
        <span>
          Already have an account?{" "}
          <a className="form__link" href="/">
            log in
          </a>
        </span>
      </div>
      <div className="form__comment">
        <span>
          Review privacy and disclosures{" "}
          <a className="form__link" href="/">
            here
          </a>
        </span>
      </div>
    </>
  );
};

export default FormButton;
