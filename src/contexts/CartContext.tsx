import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useNotify } from "../hooks/useNotify";
import { StorageItems } from "../constants/storageItems";
import { cartReducer } from "../reducers/cart";
import { CartReducerActions } from "../reducers/cart/constants/cartReducerActions";
import { setCartAction } from "../reducers/cart/actions/setCartAction";
import { incrementCartItemAction } from "../reducers/cart/actions/incrementCartItemAction";
import { addCartItemAction } from "../reducers/cart/actions/addCartItemAction";
import { resetCartAction } from "../reducers/cart/actions/resetCartAction";
import { removeCartItemAction } from "../reducers/cart/actions/removeCartItemAction";
import { decrementCartItemAction } from "../reducers/cart/actions/decrementCartItemAction";

export interface CartItem {
  id: number;
  name: string;
  amount: number;
  quantity: number;
  url: string;
}

export interface AddCartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  url: string;
}

interface CartContextData {
  cart: CartItem[];
  incrementCartItem: (itemId: number) => void;
  addCartItem: (newItem: AddCartItem) => void;
  decrementCartItem: (itemId: number) => void;
  removeCartItem: (itemId: number) => void;
  resetCart: () => void;
}

const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

// TODO transformar o estado em um reducer
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const currentCart = localStorage.getItem(StorageItems.CART);

    if (currentCart) {
      dispatch(setCartAction(JSON.parse(currentCart) as CartItem[]));
    }
  });

  const { successNotify } = useNotify();

  function addCartItem(newItem: AddCartItem) {
    dispatch(addCartItemAction(newItem));

    successNotify("Item adicionado ao carrinho");
  }

  function incrementCartItem(itemId: number) {
    dispatch(incrementCartItemAction(itemId));
  }

  function removeCartItem(itemId: number) {
    dispatch(removeCartItemAction(itemId));
  }

  function decrementCartItem(itemId: number) {
    dispatch(decrementCartItemAction(itemId));
  }

  function resetCart() {
    dispatch(resetCartAction());
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementCartItem,
        addCartItem,
        decrementCartItem,
        removeCartItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
