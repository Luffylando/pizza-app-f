import styled from "styled-components";

const NavbarResponsiveStyle = styled.div`
  /* START OF MOBILE-NAVBAR */

  .menu-wrap {
    display: none;
  }

  @media screen and (max-width: 950px) {
    .menu-wrap {
      display: block !important;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 9999;
      background: #fff;
      height: 100px;
      border-bottom: 1px solid #c4c4c4;
      -webkit-box-shadow: 0px 5px 11px 0px rgba(92, 92, 92, 0.21);
      -moz-box-shadow: 0px 5px 11px 0px rgba(92, 92, 92, 0.21);
      box-shadow: 0px 5px 11px 0px rgba(92, 92, 92, 0.21);
    }

    .menu-wrap .logo {
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .menu-wrap .logo img {
      height: 80px;
      margin-left: 20px;
    }

    .menu-wrap .icon {
      height: 100px;
      display: flex;
      align-items: center;
      color: #fff;
      margin-left: 20px;
    }

    .menu-wrap .toggler {
      position: absolute;
      top: 25px;
      right: 20px;
      z-index: 9999999;
      width: 55px;
      height: 55px;
      opacity: 0;
    }
    .menu-wrap .hamburger {
      position: absolute;
      top: 25px;
      right: 20px;
      z-index: 9999;
      width: 60px;
      height: 60px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }

    .menu-wrap .hamburger div {
      position: relative;
      width: 100%;
      height: 2px;
      background-color: gray;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
    }

    .menu-wrap .hamburger div::before,
    .menu-wrap .hamburger div::after {
      content: "";
      position: absolute;
      z-index: 9999;
      top: -10px;
      width: 100%;
      height: 2px;
      background: gray;
    }
    .menu-wrap .hamburger::after {
      top: 10px;
    }
    /* Toggler animate */
    .toggler:checked + .hamburger > div {
      transform: rotate(135deg);
      background: gray !important;
    }

    .toggler:checked + .hamburger > div::before,
    .toggler:checked + .hamburger > div::after {
      background: gray !important;
    }
    .toggler:checked ~ .hamburger {
      position: fixed;
    }
    /* Turn into X */

    .toggler:checked + .hamburger > div::before,
    .toggler:checked + .hamburger > div::after {
      top: 0;
      transform: rotate(90deg);
    }

    .toggler:checked:hover + .hamburger > div {
      transform: rotate(225deg);
    }

    .toggler:checked:hover + .hamburger {
      background: transparent;
    }

    /* Show Menu */

    .toggler:checked ~ .menu {
      visibility: visible;
    }

    .toggler:checked ~ .menu div {
      transform: scale(1);
      transition-duration: 0.5s;
    }

    .toggler:checked ~ .menu div div {
      opacity: 1;
      transition: opacity 0.4s ease;
    }

    .menu {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      visibility: hidden;

      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu div {
      background: #fff;
      border-radius: 50%;
      width: 300vw;
      height: 300vw;
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      transform: scale(0);
      transition: all 0.4s ease;
    }

    .menu div div {
      text-align: center;
      max-width: 90vw;
      max-height: 100vh;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .menu div div ul li {
      list-style: none;
      color: #000;
      font-size: 1.5rem;
      width: 100vw;
      padding: 1rem;
    }
    .menu div div ul {
      padding: 0px !important;
    }
    .menu div div ul li a {
      color: inherit;
      text-decoration: none;
      transition: color 0.4s ease;
    }

    .menu div div ul .sign-up {
      display: flex;
      flex-direction: column;
      padding: 0px;
    }

    .menu div div ul .sign-up a {
      padding: 15px;
    }

    .menu div div ul li button {
      color: inherit;
      text-decoration: none;
      transition: color 0.4s ease;
      background: transparent;
      border: none;
      outline: none;
    }
    .menu div div ul span .hidden-menu {
      visibility: hidden;
      position: absolute;
      top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      color: transparent;
      height: 0px;
      width: 250px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }

    .menu div div ul span .hidden-menu a {
      font-size: 18px;
      font-weight: 300;
      color: rgb(0, 0, 0);
      border-bottom: 1px solid #c4c4c4;
      width: 100%;
      padding: 10px 30px;
    }

    .menu div div ul span .hidden-menu a:last-child {
      border-bottom: none;
    }

    .menu div div ul span .auctions-not-logged:checked + .hidden-menu {
      visibility: visible;
      transition: 0.4s ease;
      background: #fff;
      height: auto;
      color: gray;
    }
    .menu div div ul .custom-dropdown .trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .menu div div ul .custom-dropdown .trigger p {
      position: relative;
      width: fit-content;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu div div ul .custom-dropdown .trigger input {
      top: 0;
      bottom: 0;
      width: 150px;
      height: 40px;
      display: flex;
      align-items: center;
      position: absolute;
      z-index: 99999;
      opacity: 0;
    }

    .menu div div ul span .carrot {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #fff;
      top: 17.5px;
      right: -10px;
    }
  }
`;

export default NavbarResponsiveStyle;
