import { useContext } from "react";

import { CoffeesContext } from "../contexts/CoffeesContext";

import { ButtonPlusMinus } from "./ButtonPlusMinus";
import { ButtonRemove } from "./ButtonRemove";

import { priceConverter } from "../utils/functions";

import {
  ButtonsContainer,
  OrderSummaryContainer,
  ContentContainer
} from "./OrderSummary.styles";

export function OrderSummary() {
  const { orders, removeOrderItems } = useContext(CoffeesContext)

  function handleClickRemove(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) {
    event.preventDefault()
    removeOrderItems(id)
  }

  return (
    <>
      {orders.map(item => (
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
                <ButtonPlusMinus id={item.id} />
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
