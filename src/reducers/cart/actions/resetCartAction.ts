import { CartReducerActions } from "../constants/cartReducerActions";

export function resetCartAction() {
  return {
    type: CartReducerActions.RESET_CART,
  };
}
