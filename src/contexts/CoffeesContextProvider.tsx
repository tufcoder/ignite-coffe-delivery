import { ReactNode, useEffect, useState } from "react"
import { useImmerReducer } from "use-immer"
import axios from "axios"

import { CoffeesContext, jsonData } from "./CoffeesContext"

import {
  //coffeesReducer,
  coffeesImmerReducer,
  addAmountAction,
  clearItemsAction,
  removeOrderItemsAction,
  subtractAmountAction,
  CoffeeState,
} from "../reducers/coffees"

import { FormSubmitOrderType } from "../pages/Checkout"

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
  const storageKey = import.meta.env.VITE_STORAGE
  const initialState: CoffeeState = {
    coffees: jsonData,
    orders: [],
  }
  const [coffeeState, dispatch] = useImmerReducer(
    coffeesImmerReducer,
    initialState,
    () => {
      const storedState = localStorage.getItem(storageKey)
      if (storedState) {
        return JSON.parse(storedState) as CoffeeState
      }
      return initialState
    }
  )
  const [cityLocation, setCityLocation] = useState('')
  const [ufLocation, setUfLocation] = useState('')
  const [address, setAddress] = useState<FormSubmitOrderType>({
    cep: '',
    street: '',
    houseNumber: 0,
    complement: '',
    district: '',
    city: '',
    uf: '',
    payment: '',
  })
  const { coffees, orders } = coffeeState

  function addAmount(id: number) {
    dispatch(addAmountAction(id))
  }

  function subtractAmount(id: number) {
    dispatch(subtractAmountAction(id))
  }

  function removeOrderItems(id: number) {
    dispatch(removeOrderItemsAction(id))
  }

  function clearItems() {
    dispatch(clearItemsAction())
  }

  function deliveryAddress(address: FormSubmitOrderType) {
    setAddress(address)
  }

  async function fetchAddress(latitude: number, longitude: number) {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      return response.data
    } catch (error) {
      console.error('Erro ao buscar endereço:', error)
      return null
    }
  }

  useEffect(() => {
    function getLocalization() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const obj = await fetchAddress(latitude, longitude)
            if (obj && obj.address) {
              setCityLocation(obj.address.city)
              setUfLocation(obj.address['ISO3166-2-lvl4'].split('-')[1])
            }
          },
          (error) => {
            console.error("Error fetching location:", error)
          }
        )
      } else {
        console.error("Browser dont support geolocation.")
      }
    }
    if (import.meta.env.MODE !== 'development') {
      getLocalization()
    }
  }, [])

  useEffect(() => {
    const stateJson = JSON.stringify(coffeeState)
    localStorage.setItem(storageKey, stateJson)
  }, [coffeeState, storageKey])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        orders,
        cityLocation,
        ufLocation,
        address,
        addAmount,
        subtractAmount,
        removeOrderItems,
        clearItems,
        deliveryAddress,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
