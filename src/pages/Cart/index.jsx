import React, { useEffect, useState } from "react";
import CartStyle from "./style";
import { connect } from "react-redux";
import { plus, minus } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import { addToBasket } from "../../actions/addAction";
import { removeFromBasket } from "../../actions/removeAction";
import { useFormik } from "formik";
import axios from "axios";
import { store } from "react-notifications-component";
import AuthService from "../../services/auth-service";
import backendApi from "../../_config/backendApi";

const Cart = ({ basketProps, addToBasket, removeFromBasket, cartCost }) => {
  let productsInCart = [];

  const [message, setMessage] = useState("");

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  const user = AuthService.getCurrentUser();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
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

  const formik = useFormik({
    initialValues: {
      name: "",
      price: cartCost.toFixed(2),
      total_price: (cartCost + cartCost * 0.02).toFixed(2),
      address: "",
      phone: "",
      orders: productsInCart,
    },
    onSubmit: (values) => {
      try {
        axios.post(`${backendApi}/api/orders`, {
          customer_name: values.name,
          customer_address: values.address,
          customer_phone: values.phone,
          order_list: JSON.stringify(values.orders),
          price: parseFloat(values.price),
          total_price: parseFloat(values.total_price),
        });

        // setMessage("Successfully Ordered.");
        store.addNotification({
          title: "Successfully Ordered",
          message: `Pizza ...`,
          type: "success",
          container: "top-right",
          insert: "top",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
        setTimeout(() => {
          window.location.href = `/`;
        }, 3000);
      } catch (error) {
        console.log("error", error);
      }
    },
  });

  function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    });
  }

  productsInCart = productsInCart.map((val, index) => {
    return (
      <div className="product" key={index}>
        <div className="pizza-img">
          <img src={`../images/${val.pizza_image}`} alt="pizza-img" />
        </div>
        <div className="pizza-description">
          <p className="pizza-name">{val.pizza_name}</p>
          <p className="pizza-desc">{val.pizza_description}</p>
          <div className="pizza-quantity">
            Quantity: {val.numbers}
            <div className="icons">
              <SVGInline
                className="plus"
                onClick={() => {
                  addToBasket(camelize(val.pizza_name));
                }}
                svg={plus}
              />
              <SVGInline
                className="minus"
                onClick={() => {
                  removeFromBasket(camelize(val.pizza_name));
                }}
                svg={minus}
              />
            </div>
          </div>
        </div>
        <div className="pizza-price">
          <p>{(val.pizza_price * val.numbers).toFixed(2)}$</p>
        </div>
      </div>
    );
  });
  return (
    <CartStyle>
      <div className="cart">Cart</div>
      {/* {message !== "" ? (
        <div className="success-msg">
          {message}
          {refreshMessage()}
        </div>
      ) : null} */}
      {productsInCart.length > 0 ? (
        <div className="products-container">
          <div className="products">{productsInCart}</div>
          <div className="total">
            <div className="summary">Summary</div>
            <div className="subtotal">
              <p>Subtotal</p> <span>{cartCost.toFixed(2)}$</span>{" "}
            </div>
            <div className="tax">
              <p>Delivery Cost (2%)</p>
              <span>{(cartCost * 0.02).toFixed(2)}$</span>
            </div>
            <div className="final-total">
              <p>Total:</p>{" "}
              <span>{(cartCost + cartCost * 0.02).toFixed(2)}$</span>
            </div>

            {/* Modal */}
            <button
              type="button"
              className="btn btn-primary checkout-btn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Checkout
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Checkout Form
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="modal-body">
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="name">Name</label>
                          <input
                            id="name"
                            name="name"
                            className="form-control"
                            type="text"
                            onChange={formik.handleChange}
                            value={
                              userData ? userData.name : formik.values.name
                            }
                            readOnly={userData.name ? true : false}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="address">Address</label>
                          <input
                            id="address"
                            name="address"
                            className="form-control"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="phone">Phone</label>
                          <input
                            id="phone"
                            name="phone"
                            className="form-control"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                          />
                        </div>
                        <input
                          type="hidden"
                          id="price"
                          name="price"
                          value={cartCost}
                        />
                        <div className="form-group col-md-6">
                          <label htmlFor="price">Total Price</label>
                          <input
                            id="total_price"
                            name="total_price"
                            className="form-control"
                            type="number"
                            onChange={formik.handleChange}
                            // value={formik.values.price}
                            readOnly
                            placeholder={
                              (cartCost + cartCost * 0.02).toFixed(2) + ` $`
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* END of Modal */}
          </div>
        </div>
      ) : (
        <div className="callback-msg">There are no items in Cart.</div>
      )}
    </CartStyle>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  cartCost: state.basketState.cartCost,
  addToBasket: state.addToBasket,
  removeFromBasket: state.removeFromBasket,
  history: state,
});

export default connect(mapStateToProps, { addToBasket, removeFromBasket })(
  Cart
);
