import React, { useState, useEffect } from "react";
import HomeStyle from "./style";
import axios from "axios";
import SVGInline from "react-svg-inline";
import { cart } from "../../assets/icons";
import { connect } from "react-redux";
import { addToBasket } from "../../actions/addAction";
import { store } from "react-notifications-component";

const Home = (props) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(`http://localhost:8000/api/pizzas`);
      setPizzas(result.data);
    };
    fetchData();
  }, []);

  const clickToAdd = (val) => {
    props.addToBasket(camelize(val));
    store.addNotification({
      title: "Successfully Added",
      message: `Pizza - ${val}`,
      type: "info",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: false,
      },
    });
  };

  function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    });
  }
  return (
    <HomeStyle>
      <div className="page-title">Our Offer</div>
      <div className="pizzas">
        {pizzas.length !== undefined
          ? pizzas.map((val, key) => (
              <div className="pizza-single" key={key}>
                <div className="pizza-img">
                  <img src={`../images/${val.pizza_image}`} alt="pizza-img" />
                </div>
                <div className="pizza-description">
                  <p className="pizza-name">{val.pizza_name}</p>
                  <p className="pizza-desc">{val.pizza_description}</p>
                  <div className="price">
                    <p className="pizza-price">{val.pizza_price}0 $</p>
                    <div
                      className="btn btn-secondary"
                      onClick={() => {
                        clickToAdd(val.pizza_name);
                      }}
                    >
                      Buy <SVGInline svg={cart} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "No Pizzas!"}
      </div>
    </HomeStyle>
  );
};

export default connect(null, { addToBasket })(Home);
