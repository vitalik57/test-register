import React from "react";
import sprite from "../Components/logo/Vector.svg";

const FormLogo = () => {
  return (
    <>
      <ul className="form__svg">
        <li class="form__svg__container">
          <a class="kokos" href="/">
            <div>
              {" "}
              <svg class="checkoutIcon">
                <use href={sprite + "#icon-male"} />
              </svg>
              <p class="form__text"> Male</p>
            </div>
          </a>
        </li>
        <li class="form__svg__container">
          <a class="kokos" href="/">
            <div>
              {" "}
              <svg class="checkoutIcon__female">
                <use href={sprite + "#icon-female"} />
              </svg>
              <p class="form__text"> Female</p>
            </div>
          </a>
        </li>
        <li class="form__svg__container">
          <a class="kokos" href="/">
            <div>
              {" "}
              <svg class="checkoutIcon">
                <use href={sprite + "#icon-other"} />
              </svg>
              <p class="form__text"> Outher</p>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};

export default FormLogo;
