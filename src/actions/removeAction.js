import { REMOVE_PRODUCT_BASKET } from "./types";

export const removeFromBasket = (productName) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_BASKET,
      payload: productName,
    });
  };
};
