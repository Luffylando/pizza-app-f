import styled from "styled-components";

const NavbarStyle = styled.div`
  height: 100px;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px 400px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  -webkit-box-shadow: 0px 5px 11px 0px rgba(92, 92, 92, 0.21);
  -moz-box-shadow: 0px 5px 11px 0px rgba(92, 92, 92, 0.21);
  box-shadow: 0px 5px 11px 0px rgba(92, 92, 92, 0.21);

  .logo {
    height: 70px;

    .home {
      color: #000;
      margin-left: 50px;
    }

    img {
      height: 100%;
    }
  }
  z-index: 999;

  .cart-container {
    display: flex;

    .sign-up {
      margin-right: 20px;
      display: flex;
      align-items: center;
      a {
        margin: 0px 10px;
        color: #000;
      }
    }

    .name-log {
      margin-right: 20px;
      display: flex;
      align-items: center;
      width: fit-content;
    }

    .cart {
      min-width: 90px;
      svg {
        path {
          fill: #fff;
        }
      }
      a {
        width: 100%;
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 1800px) {
    padding: 10px 250px;
  }
  @media screen and (max-width: 1500px) {
    padding: 10px 150px;
  }

  @media screen and (max-width: 950px) {
    padding: 10px 75px;
    display: none;
  }
`;

export default NavbarStyle;
