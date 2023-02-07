import { CartReducerActions } from "../constants/cartReducerActions";

export function incrementCartItemAction(itemId: number) {
  return {
    type: CartReducerActions.INCREMENT_ITEM,
    payload: {
      itemId,
    },
  };
}
