import { AddCartItem } from "../../../contexts/CartContext";
import { CartReducerActions } from "../constants/cartReducerActions";

export function addCartItemAction(newItem: AddCartItem) {
  return {
    type: CartReducerActions.ADD_ITEM,
    payload: {
      newItem,
    },
  };
}
