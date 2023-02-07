import { CartItem } from "../../../contexts/CartContext";
import { CartReducerActions } from "../constants/cartReducerActions";

export function setCartAction(cart: CartItem[]) {
  return {
    type: CartReducerActions.SET_CART,
    payload: cart
  };
}
