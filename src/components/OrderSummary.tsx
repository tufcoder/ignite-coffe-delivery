import { useContext } from "react";

import { CoffeesContext } from "../contexts/CoffeesContext";
import { CoffeeType } from "../contexts/CoffeesContextProvider";

import { ButtonPlusMinus } from "./ButtonPlusMinus";
import { ButtonRemove } from "./ButtonRemove";

import { priceConverter } from "../utils/functions";

import {
  ButtonsContainer,
  OrderSummaryContainer,
  ContentContainer
} from "./OrderSummary.styles";

interface OrderSummaryProps {
  items: CoffeeType[]
}

export function OrderSummary({ items }: OrderSummaryProps) {
  const { removeOrderItem } = useContext(CoffeesContext)

  function handleClickRemove(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) {
    event.preventDefault()
    removeOrderItem(id)
  }

  return (
    <>
      {items.map(item => (
        <OrderSummaryContainer key={item.id}>
          <ContentContainer>
            <img
              src={`coffees/${item.img}`}
              alt={item.description}
              width={64}
              height={64}
            />
            <div>
              <p>{item.title}</p>
              <ButtonsContainer>
                <ButtonPlusMinus item={item} />
                <ButtonRemove onClick={(e) => handleClickRemove(e, item.id)} />
              </ButtonsContainer>
            </div>
          </ContentContainer>
          <strong>{priceConverter.convertToCurrencyBRL(item.price)}</strong>
        </OrderSummaryContainer>
      ))}
    </>
  )
}
