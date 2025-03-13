import { NavLink } from "react-router";
import { ShoppingCart } from "@phosphor-icons/react";

import { IconWrapper } from "./IconWrapper";

import { IconTitles } from "../utils/constants";

import { CartContainer } from "./Cart.styles";

interface CartProps {
  items: number
}

export function Cart({ items }: CartProps) {
  return (
    <NavLink to="/checkout">
      <CartContainer $items={items}>
        <IconWrapper title={IconTitles.ShoppingCart} icon={<ShoppingCart size={22} weight="fill" />} />
      </CartContainer>
    </NavLink>
  )
}
