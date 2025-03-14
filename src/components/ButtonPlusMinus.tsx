import { useContext } from "react";
import { Minus, Plus } from "@phosphor-icons/react";

import { CoffeesContext } from "../contexts/CoffeesContext";

import { IconWrapper } from "./IconWrapper";
import { IconTitles } from "../utils/constants";

import {
  AmountSpan,
  ButtonPlusMinusContainer
} from "./ButtonPlusMinus.styles";

interface ButtonPlusMinusProps {
  id: number
}

export function ButtonPlusMinus({ id }: ButtonPlusMinusProps) {
  const { coffees, addAmount, subtractAmount } = useContext(CoffeesContext)
  const coffee = coffees.find(item => item.id === id)

  function onAddAmount(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    addAmount(id)
  }

  function onSubtractAmount(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    subtractAmount(id)
  }

  return (
    <ButtonPlusMinusContainer>
      <button onClick={(e) => onSubtractAmount(e)}>
        <IconWrapper icon={<Minus size={14} weight="bold" />} title={IconTitles.Minus} />
      </button>
      <AmountSpan>{coffee ? coffee.amount : 0}</AmountSpan>
      <button onClick={(e) => onAddAmount(e)}>
        <IconWrapper icon={<Plus size={14} weight="bold" />} title={IconTitles.Plus} />
      </button>
    </ButtonPlusMinusContainer>
  )
}
