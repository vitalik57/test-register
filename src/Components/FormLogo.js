import React from "react";
import sprite from "../Components/logo/Vector.svg";

const FormLogo = () => {
  return (
    <>
      <ul className="form__svg">
        <li className="form__svg__container">
          <svg className="checkoutIcon">
            <use href={sprite + "#icon-male"} />
          </svg>
          <p className="gender__name">Male</p>
        </li>
        <li className="form__svg__container">
          <svg className="checkoutIcon_female">
            <use href={sprite + "#icon-female"} />
          </svg>
          <p className="gender__name">Female</p>
        </li>
        <li className="form__svg__container">
          <svg className="checkoutIcon">
            <use href={sprite + "#icon-other"} />
          </svg>
          <p className="gender__name">Outher</p>
        </li>
      </ul>
    </>
  );
};

export default FormLogo;
