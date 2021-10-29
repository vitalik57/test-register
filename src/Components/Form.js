import React from "react";
import { useState } from "react/cjs/react.development";
import eye from "../icons/eye.png";
import icon from "../icons/icon.png";
import FormButton from "./FormButton";
import FormLogo from "./FormLogo";
import { FormStyled } from "./FormStyled";
const initialState = { email: "", password: "", confirmPassword: "" };
const Form = () => {
  const [state, setState] = useState(initialState);
  const changeInput = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };
  const reset = () => {
    setState({ email: "", password: "", confirmPassword: "" });
  };
  function singUPClick() {
    alert(`Email:${state.email}, Password:${state.password}  `);
    reset();
  }

  return (
    <>
      <FormStyled>
        <form onSubmit={singUPClick} className="form__container">
          <img src={icon} alt="icon" />
          <h1 className="form__name">Sign Up with email</h1>
          <div>
            <h2 className="form__gender">Gender</h2>
            <FormLogo />
            <label>
              <h2 className="form__gender"> E-mail</h2>
              <input className="form__input" onChange={changeInput} name="email" value={state.email} type="email" />
            </label>
            <label>
              <h2 className="form__gender"> Create Password</h2>
              <span className="form__input__container">
                {" "}
                <input className="form__input" onChange={changeInput} name="password" value={state.password} type="password" />
                <img className="form__input__eye" src={eye} alt="eye" />
              </span>
            </label>
            <label>
              <h2 className="form__gender"> Confirm Password</h2>
              <span className="form__input__container">
                <input
                  className="form__input"
                  onChange={changeInput}
                  name="confirmPassword"
                  value={state.password}
                  type="password"
                />
                <img className="form__input__eye" src={eye} alt="eye" />
              </span>
            </label>

            <FormButton singUPClick={singUPClick} />
          </div>
        </form>
      </FormStyled>
    </>
  );
};

export default Form;
