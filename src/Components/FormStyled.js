import styled from "styled-components";
export const FormStyled = styled.div`
  .kokos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    color: #5b5b5b;
  }
  .form__text {
    margin: 0;
    padding-top: 8px;
    padding-bottom: 10px;
  }
  .form__svg__container {
    fill: white;
    border: 1px solid rgba(193, 193, 193, 1);
    width: 90px;
    height: 80px;
    border-radius: 16px;
    @media (min-width: 768px) {
      width: 156px;
      height: 100px;
    }
  }
  .form__svg__container:hover {
    border-color: #3c9c41;
  }
  .kokos:hover,
  .kokos:focus {
    border-color: #3c9c41;
    color: #3c9c41;
  }
  .checkoutIcon {
    width: 32px;
    height: 32px;
    padding-top: 10px;
    fill: #5b5b5b;
  }
  .checkoutIcon__female {
    width: 32px;
    height: 32px;
    padding-top: 10px;
    fill: #5b5b5b;
    margin-left: 9px;
  }
  .kokos:hover svg {
    fill: #3c9c41;
  }
  .kokos:focus svg {
    fill: #3c9c41;
  }
  .kokos:focus {
    border: 1px solid #3c9c41;
  }
  .form__svg__container .checkoutIcon {
    width: 32px;
    height: 32px;
    fill: #5b5b5b;
    padding-top: 10px;
  }

  .form__container {
    padding: 16px 25px;
    text-align: center;
  }
  .form__svg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding-left: 0;
    padding-top: 8px;
  }
  .form__name {
    padding-top: 25px;
    margin: 0;
    color: #5b5b5b;
    font-size: 24px;
    line-height: 29px;
  }
  .form__gender {
    padding-top: 20px;
    margin: 0;
    text-align: left;
    font-style: bold;
    color: #5b5b5b;
    font-size: 18px;
    line-height: 22px;
  }

  .form__input {
    box-sizing: border-box;
    outline: none;
    width: 100%;
    border-radius: 16px;
    padding: 15px 18px;
    color: #5b5b5b;
    border: 1px solid #c1c1c1;
    margin-top: 8px;
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 768px) {
      padding: 24px 25px;
    }
  }
  .form__input:focus {
    border: 1px solid #87d78b;
  }

  .gender__name:hover {
    border-color: #3c9c41;
  }
  .gender__name {
    margin: 0;
    padding-top: 8px;
    color: #5b5b5b;
  }

  .form__button {
    width: 100%;
    border-radius: 16px;
    background: #3c9c41;
    border: 0;
    color: #ffffff;
    height: 50px;
    font-size: 18px;
    line-height: 22px;
    margin-top: 20px;
  }
  .form__button:hover {
    background: #4db252;
  }
  .form__button:active {
    background: #318636;
  }
  .form__comment {
    margin-top: 16px;
    color: #5b5b5b;
  }
  .form__link {
    padding-left: 7px;
    color: #3c9c41;
  }
  .form__input__container {
    position: relative;
  }
  .form__input__eye {
    position: absolute;
    top: -5px;
    right: 17px;
    @media (min-width: 768px) {
      right: 27px;
    }
  }
`;
