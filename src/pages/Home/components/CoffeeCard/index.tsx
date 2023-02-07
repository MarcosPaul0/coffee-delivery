import { ShoppingCart } from "phosphor-react";

import { QuantityButton } from "../../../../components/QuantityButton";
import {
  BuyContainer,
  CategoriesContainer,
  CoffeeCardContainer,
} from "./styles";
import {
  AddCartItem,
  CartItem,
  useCartContext,
} from "../../../../contexts/CartContext";
import { useState } from "react";
import { formatNumber } from "../../../../utils/formatNumber";

interface CoffeeCardProps {
  coffee: {
    id: number;
    url: string;
    name: string;
    description: string;
    categories: string[];
    price: number;
  };
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [cartItem, setCartItem] = useState<AddCartItem>({
    id: coffee.id,
    name: coffee.name,
    url: coffee.url,
    price: coffee.price,
    quantity: 0,
  });

  const { addCartItem } = useCartContext();

  function handleIncrementCartItem() {
    setCartItem((currentState) => ({
      ...currentState,
      quantity: currentState.quantity + 1,
    }));
  }

  function handleDecrementCartItem() {
    setCartItem((currentState) => {
      if (currentState.quantity <= 0) {
        return currentState;
      }

      return {
        ...currentState,
        quantity: currentState.quantity - 1,
      };
    });
  }

  const priceFormatted = formatNumber(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={coffee.url} alt={coffee.name} />

      <CategoriesContainer>
        {coffee.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </CategoriesContainer>

      <h2>{coffee.name}</h2>

      <p>{coffee.description}</p>

      <BuyContainer>
        <span>{priceFormatted}</span>

        <QuantityButton
          counter={cartItem.quantity}
          onIncrement={handleIncrementCartItem}
          onDecrement={handleDecrementCartItem}
        />

        <button>
          <ShoppingCart
            weight="fill"
            size={20}
            onClick={() => addCartItem(cartItem)}
          />
        </button>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}
