import { MapPin } from "@phosphor-icons/react";
import { NavLink } from "react-router";

import { CoffeesContext } from "../contexts/CoffeesContext";

import { IconWrapper } from "./IconWrapper";
import { Cart } from "./Cart";

import { IconTitles, ImageTitles } from "../utils/constants";

import coffeDeliveryLogo from '../assets/svg/logo.svg'

import { HeaderContainer } from "./Header.styles";
import { useContext } from "react";

export function Header() {
  const { orders, cityLocation, ufLocation } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={coffeDeliveryLogo} alt={ImageTitles.Logo} width={85} height={40} />
      </NavLink>
      <aside>
        <address>
          <IconWrapper icon={<MapPin size={22} weight="fill" />} title={IconTitles.MapPin} />
          {cityLocation && ufLocation && `${cityLocation}, ${ufLocation}`}
          {!cityLocation && !ufLocation && `Desconhecido`}
        </address>
        <nav>
          <Cart items={orders.length} />
        </nav>
      </aside>
    </HeaderContainer>
  )
}
