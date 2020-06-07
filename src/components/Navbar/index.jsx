import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarStyle from "./style";
import { connect } from "react-redux";
import { getBasketNumbers } from "../../actions/getAction";
import { Link, withRouter } from "react-router-dom";
import { cart } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import AuthService from "../../services/auth-service";

const Navbar = (props) => {
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
    <NavbarStyle>
      <div className="logo">
        <Link to="/">
          <img src={`../logo192.png`} alt="pizza-img" />
        </Link>
        <Link className="home" to="/">
          Home
        </Link>
        {user && userData.name ? (
          <Link className="home" to="/profile">
            Profile
          </Link>
        ) : null}
      </div>
      <div className="cart-container">
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
      </div>
    </NavbarStyle>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default withRouter(
  connect(mapStateToProps, { getBasketNumbers })(Navbar)
);
