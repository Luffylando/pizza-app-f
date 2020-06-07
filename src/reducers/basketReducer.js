import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  REMOVE_PRODUCT_BASKET,
} from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    QuattroStagioni: {
      pizza_name: "Quattro Stagioni",
      pizza_price: 14.5,
      pizza_description:
        "Tomato sauce, mozzarella, mushrooms, ham, artichokes, olives, and oregano",
      pizza_image: "QuattroStagioni.png",
      inCart: false,
      numbers: 0,
    },

    Carbonara: {
      pizza_name: "Carbonara",
      pizza_price: 17.5,
      pizza_description:
        "CarbonTomato sauce, mozzarella, parmesan, eggs, and baconara",
      pizza_image: "Carbonara.png",
      inCart: false,
      numbers: 0,
    },
    QuattroFormaggi: {
      pizza_name: "Quattro Formaggi",
      pizza_price: 19.5,
      pizza_description: "Tomato sauce, mozzarella, and oregano",
      pizza_image: "QuattroFormaggi.png",
      inCart: false,
      numbers: 0,
    },
    Margherita: {
      pizza_name: "Margherita",
      pizza_price: 12.5,
      pizza_description:
        "Tomato sauce, mozzarella, parmesan, gorgonzola cheese, artichokes, and oregano",
      pizza_image: "Margherita.png",

      inCart: false,
      numbers: 0,
    },
    Prosciutto: {
      pizza_name: "Prosciutto",
      pizza_price: 18.5,
      pizza_description: "Tomato sauce, mozzarella, ham, and oregano",
      pizza_image: "Prosciutto.png",
      inCart: true,
      numbers: 4,
    },
    Vegetariana: {
      pizza_name: "Vegetariana",
      pizza_price: 22.5,
      pizza_description: "Tomato sauce, mozzarella and a various vegetable",
      pizza_image: "Vegetariana.png",
      inCart: true,
      numbers: 2,
    },
    FruttiDiMare: {
      pizza_name: "Frutti Di Mare",
      pizza_price: 20.5,
      pizza_description: "Tomato sauce and seafood",
      pizza_image: "FruttiDiMare.png",
      inCart: false,
      numbers: 0,
    },
    Napoletana: {
      pizza_name: "Napoletana",
      pizza_price: 16.5,
      pizza_description: "Tomato sauce, mozzarella, oregano, anchovies",
      pizza_image: "Napoletana.png",
      inCart: false,
      numbers: 0,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT_BASKET:
      let removeQuantity = { ...state.products[action.payload] };

      if (removeQuantity.numbers > 0) {
        removeQuantity.numbers -= 1;
        if (removeQuantity.numbers === 0) {
          removeQuantity.inCart = false;
        }
      }

      return {
        ...state,
        basketNumbers: state.basketNumbers - 1,
        cartCost: state.cartCost - removeQuantity.pizza_price,
        products: {
          ...state.products,
          [action.payload]: removeQuantity,
        },
      };

    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] };

      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + addQuantity.pizza_price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
