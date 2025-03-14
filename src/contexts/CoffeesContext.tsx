import { createContext } from "react";

import { FormSubmitOrderType } from "../pages/Checkout";

import data from '../assets/seed/data.json'

export type CoffeeType = typeof data[0]

export type CoffeesContextType = {
  coffees: CoffeeType[]
  orders: CoffeeType[]
  cityLocation: string
  ufLocation: string
  address: FormSubmitOrderType
  addAmount: (id: number) => void
  subtractAmount: (id: number) => void
  removeOrderItems: (id: number) => void
  clearItems: () => void
  deliveryAddress: (address: FormSubmitOrderType) => void
}

export const jsonData = data

export const CoffeesContext = createContext({} as CoffeesContextType);
