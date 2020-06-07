import { GET_NUMBERS_BASKET } from "./types";

export const getBasketNumbers = () => {
  return (dispatch) => {
    console.log("Getting all Basket Numbers");
    dispatch({
      type: GET_NUMBERS_BASKET,
    });
  };
};
