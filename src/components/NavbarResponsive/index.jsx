import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarResponsiveStyle from "./style";
import { connect } from "react-redux";
import { getBasketNumbers } from "../../actions/getAction";
import { Link, withRouter } from "react-router-dom";
import { cart } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import AuthService from "../../services/auth-service";
import backendApi from "../../_config/backendApi";

const NavbarResponsive = (props) => {
  const user = AuthService.getCurrentUser();
  const [userData, setUserData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getBasketNumbers();
    if (user) {
      const fetchData = async () => {
        let result = await axios.get(`${backendApi}/api/auth/me`, {
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
        <input
          type="checkbox"
          onChange={(event) => setIsChecked(event.currentTarget.checked)}
          checked={isChecked}
          className="toggler"
        />

        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={() => setIsChecked(!isChecked)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cart" onClick={() => setIsChecked(!isChecked)}>
                    Cart
                  </Link>
                </li>
                {user && userData.name ? (
                  <span className="custom-dropdown">
                    <li className="trigger">
                      <Link
                        to="/profile"
                        onClick={() => setIsChecked(!isChecked)}
                      >
                        Profile
                      </Link>
                    </li>
                  </span>
                ) : null}
                <li className="sign-up">
                  {user ? (
                    <Link to="/" onClick={logOut}>
                      Logout
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/register"
                        onClick={() => setIsChecked(!isChecked)}
                      >
                        Register
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => setIsChecked(!isChecked)}
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
    </NavbarResponsiveStyle>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default withRouter(
  connect(mapStateToProps, { getBasketNumbers })(NavbarResponsive)
);
