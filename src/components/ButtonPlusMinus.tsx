import { useContext } from "react";
import { Minus, Plus } from "@phosphor-icons/react";

import { CoffeesContext } from "../contexts/CoffeesContext";
import { CoffeeType } from "../contexts/CoffeesContextProvider";

import { IconWrapper } from "./IconWrapper";
import { IconTitles } from "../utils/constants";

import {
  AmountSpan,
  ButtonPlusMinusContainer
} from "./ButtonPlusMinus.styles";

interface ButtonPlusMinusProps {
  item: CoffeeType
}

export function ButtonPlusMinus({ item }: ButtonPlusMinusProps) {
  const { addAmount, subtractAmount } = useContext(CoffeesContext)

  function onAddAmount(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    addAmount(item)
  }

  function onSubtractAmount(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    subtractAmount(item)
  }

  return (
    <ButtonPlusMinusContainer>
      <button onClick={(e) => onSubtractAmount(e)}>
        <IconWrapper icon={<Minus size={14} weight="bold" />} title={IconTitles.Minus} />
      </button>
      <AmountSpan>{item.amount}</AmountSpan>
      <button onClick={(e) => onAddAmount(e)}>
        <IconWrapper icon={<Plus size={14} weight="bold" />} title={IconTitles.Plus} />
      </button>
    </ButtonPlusMinusContainer>
  )
}
