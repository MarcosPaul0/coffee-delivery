import { CartReducerActions } from "../constants/cartReducerActions";

export function removeCartItemAction(itemId: number) {
  return {
    type: CartReducerActions.REMOVE_ITEM,
    payload: {
      itemId,
    },
  };
}
