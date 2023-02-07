import { CartReducerActions } from "../constants/cartReducerActions";

export function decrementCartItemAction(itemId: number) {
  return {
    type: CartReducerActions.DECREMENT_ITEM,
    payload: {
      itemId,
    },
  };
}
