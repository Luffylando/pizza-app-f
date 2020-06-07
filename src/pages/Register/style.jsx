import styled from "styled-components";

const RegisterStyle = styled.div`
  padding-top: 200px;

  .register-page {
    background-image: url("/images/login-bg-blur.jpg");
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 80vh;
    height: auto;
    width: 100%;
    padding: 75px 400px 100px 400px;
  }

  .register-icon .icon-text {
    font-size: 50px;
    color: #000;
    font-weight: 300;
    text-align: center;
    letter-spacing: 1.5px;
  }
  .register-icon i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    color: #000;
    padding: 25px 0px;
  }

  .register-wrap {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
  }

  .register-form {
    min-width: 350px;
  }

  .register-wrap .input-div {
    display: flex;
    margin-bottom: 20px;
    height: 40px;
    min-width: 350px;
  }

  .register-wrap .input-div i {
    color: #000;
    font-size: 20px;
    padding: 10px 15px;
    background: rgba(5, 5, 5, 0.342);
  }

  .register-wrap .input-div .input-style {
    outline: none;
    padding: 0px 10px;
    width: 350px;
  }

  .register-wrap .input-div .input-style:focus {
    -webkit-box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px 6px rgba(78, 40, 95, 0.5);
    border: 2px solid transparent;
  }

  .register-wrap .input-div .error-msg {
    position: absolute;
    top: -30px;
    text-align: center;
    color: #000;
    max-width: 400px;
    width: 400px;
    line-height: 1;
    text-shadow: 2px 2px #371f4f;
  }

  .register-wrap .links-row {
    display: flex;
    justify-content: space-between;
    min-width: 350px;
    margin-top: -5px;
  }

  .register-wrap .links-row a {
    color: #000;
    font-size: 14px;
  }
  .register-wrap .submit-btn {
    min-width: 350px;
    height: 45px;
    width: 100%;
    margin: 20px 0px;
    color: #000;
    text-transform: uppercase;
    font-size: 30px;
    background: rgba(5, 5, 5, 0.342);
    border: none;
    font-weight: 300;
    letter-spacing: 1.5px;
  }

  .error-msg {
    position: absolute;
    top: -30px;
    text-align: center;
    color: #000;
    max-width: 400px !important;
    width: 400px !important;
    line-height: 1;
    font-weight: 600;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    color: #a11919;
  }

  @media screen and (max-width: 1200px) {
    .register-page {
      padding: 100px 250px;
    }
  }

  @media screen and (max-width: 950px) {
    .register-page {
      padding: 100px 100px;
    }
  }

  @media screen and (max-width: 650px) {
    .register-page {
      padding: 100px 50px;
    }
  }

  @media screen and (max-width: 460px) {
    padding-top: 150px;
    .register-page {
      padding: 20px 10px;
      height: auto;
    }

    .error-msg {
      width: 300px !important;
      max-width: 300px !important;
    }

    .register-form {
      min-width: 300px;
      width: 300px;
    }

    .input-div {
      min-width: 250px !important;
      width: 300px;
      margin-bottom: 10px !important;
    }

    .input-div input {
      border-radius: 0 !important;
    }
    .input-style {
      min-width: 200px !important;
      width: 250px;
    }

    .links-row {
      min-width: 250px !important;
      width: 300px;
    }

    .submit-btn {
      min-width: 250px !important;
      width: 300px;
    }

    .register-wrap .input-div .error-msg {
      max-width: 300px;
      width: 300px;
      top: -40px;
    }
  }
`;

export default RegisterStyle;
