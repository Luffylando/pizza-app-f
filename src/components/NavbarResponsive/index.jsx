import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarResponsiveStyle from "./style";
import { connect } from "react-redux";
import { getBasketNumbers } from "../../actions/getAction";
import { Link, withRouter } from "react-router-dom";
import { cart } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import AuthService from "../../services/auth-service";

const NavbarResponsive = (props) => {
  const user = AuthService.getCurrentUser();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getBasketNumbers();
    if (user) {
      const fetchData = async () => {
        let result = await axios.get(`http://localhost:8000/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        });
        setUserData(result.data);
      };
      fetchData();
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  useEffect(() => {
    getBasketNumbers();
  }, []);
  return (
    <NavbarResponsiveStyle>
      <div className="menu-wrap">
        <div className="logo">
          <Link to="/">
            <img src={`../logo192.png`} alt="pizza-img" />
          </Link>
        </div>
        {/* <img className="icon" src="{{ URL::to('/images/logos/tet.png')}}" /> */}

        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={() => (window.location.href = "/")}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    onClick={() => (window.location.href = "/cart")}
                  >
                    Cart
                  </Link>
                </li>
                {user && userData.name ? (
                  <span className="custom-dropdown">
                    <li className="trigger">
                      <Link
                        to="/profile"
                        onClick={() => (window.location.href = "/profile")}
                      >
                        Profile
                      </Link>
                    </li>
                  </span>
                ) : null}
                <li className="sign-up">
                  {user ? (
                    <Link to="#" onClick={logOut}>
                      Logout
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/register"
                        onClick={() => (window.location.href = "/register")}
                      >
                        Register
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => (window.location.href = "/login")}
                      >
                        Login
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cart-container">
        {user && userData.name ? (
          <div className="name-log">Hi, {userData.name}</div>
        ) : null}
        <div className="cart btn btn-primary">
          <Link to="/cart">
            <SVGInline svg={cart} />{" "}
            <p>( {props.basketProps.basketNumbers} )</p>
          </Link>
        </div>
        <div className="sign-up">
          {user ? (
            <Link to="#" onClick={logOut}>
              Logout
            </Link>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div> */}
    </NavbarResponsiveStyle>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default withRouter(
  connect(mapStateToProps, { getBasketNumbers })(NavbarResponsive)
);
