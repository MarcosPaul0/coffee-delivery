import { StorageItems } from "../../constants/storageItems";
import { CartItem } from "../../contexts/CartContext";
import { CartReducerActions } from "./constants/cartReducerActions";

interface CartReducerAction {
  type: string;
  payload?: any;
}

export function cartReducer(state: CartItem[], action: CartReducerAction):  CartItem[] {
  switch (action.type) {
    case CartReducerActions.ADD_ITEM:
      if (action.payload.newItem.quantity === 0) {
        return state;
      }

      const itemAlreadyExists = state.find(
        (item) => item.id === action.payload.newItem.id
      );

      if (itemAlreadyExists) {
        const updatedCartWithNewItem: CartItem[] = state.map((item) => {
          if (item.id === action.payload.newItem.id) {
            const newQuantity = item.quantity + action.payload.newItem.quantity;

            return {
              ...item,
              quantity: newQuantity,
              amount: newQuantity * action.payload.newItem.price,
            };
          }

          return item;
        });

        localStorage.setItem(
          StorageItems.CART,
          JSON.stringify(updatedCartWithNewItem)
        );

        return updatedCartWithNewItem;
      } else {
        const { price, ...newItemRest } = action.payload.newItem;

        const updatedCartWithNewItem: CartItem[] = [
          ...state,
          {
            ...newItemRest,
            amount: newItemRest.quantity * price,
          },
        ];

        localStorage.setItem(
          StorageItems.CART,
          JSON.stringify(updatedCartWithNewItem)
        );

        return updatedCartWithNewItem;
      }

    case CartReducerActions.INCREMENT_ITEM:
      const updatedCartWithIncrementedItem: CartItem[] = state.map((item) => {
        if (item.id === action.payload.itemId) {
          const quantity = item.quantity + 1;
          const price = item.amount / item.quantity;

          return {
            ...item,
            quantity,
            amount: price * quantity,
          };
        }

        return item;
      });

      localStorage.setItem(
        StorageItems.CART,
        JSON.stringify(updatedCartWithIncrementedItem)
      );

      return updatedCartWithIncrementedItem;

    case CartReducerActions.REMOVE_ITEM:
      const updatedCartWithoutItem: CartItem[] = state.filter(
        (item) => item.id !== action.payload.itemId
      );

      localStorage.setItem(
        StorageItems.CART,
        JSON.stringify(updatedCartWithoutItem)
      );

      return updatedCartWithoutItem;

    case CartReducerActions.DECREMENT_ITEM:
      const updatedCartWithDecrementedItem: CartItem[] = state.reduce<CartItem[]>(
        (accumulator, item) => {
          if (item.id === action.payload.itemId) {
            if (item.quantity - 1 <= 0) {
              return accumulator;
            }

            const quantity = item.quantity - 1;
            const price = item.amount / item.quantity;

            const updatedItem = {
              ...item,
              quantity,
              amount: quantity * price,
            };

            accumulator.push(updatedItem);
            return accumulator;
          }

          accumulator.push(item);
          return accumulator;
        },
        []
      );

      localStorage.setItem(
        StorageItems.CART,
        JSON.stringify(updatedCartWithDecrementedItem)
      );

      return updatedCartWithDecrementedItem;

    case CartReducerActions.RESET_CART:
      localStorage.removeItem(StorageItems.CART);

      return [];

    default:
      return state;
  }
}
