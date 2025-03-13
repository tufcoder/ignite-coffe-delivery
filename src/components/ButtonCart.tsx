import { ButtonHTMLAttributes } from "react";
import { ShoppingCart } from "@phosphor-icons/react";

import { IconWrapper } from "./IconWrapper";

import { IconTitles } from "../utils/constants";

import { ButtonCartContainer } from "./ButtonCart.styles";

type ButtonCartProps = ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonCart({ ...props }: ButtonCartProps) {
  return (
    <ButtonCartContainer {...props}>
      <IconWrapper icon={<ShoppingCart size={22} weight="fill" />} title={IconTitles.ShoppingCart} />
    </ButtonCartContainer>
  )
}
