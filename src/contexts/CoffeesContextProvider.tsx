import { ReactNode, useEffect, useState } from "react"
import axios from "axios"

import { CoffeesContext } from "./CoffeesContext"

import data from '../assets/seed/data.json'

export type CoffeeType = typeof data[0]

export type CoffeesContextType = {
  coffees: CoffeeType[],
  orders: CoffeeType[],
  cityLocation: string,
  ufLocation: string,
  addAmount: (coffee: CoffeeType) => void,
  subtractAmount: (coffee: CoffeeType) => void,
  removeOrderItem: (id: number) => void,
  clean: () => void,
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])
  const [orders, setOrders] = useState<CoffeeType[]>(coffees.filter(item => item.amount > 0))
  const [cityLocation, setCityLocation] = useState('')
  const [ufLocation, setUfLocation] = useState('')

  function addAmount(coffee: CoffeeType) {
    coffee.amount++
    setCoffees(state => {
      state.map(item => {
        if (item.id === coffee.id) {
          item.amount = coffee.amount
        }
      })
      return state
    })
    setOrders(coffees.filter(item => item.amount > 0))
  }

  function subtractAmount(coffee: CoffeeType) {
    if (coffee.amount > 1) {
      coffee.amount--
      setCoffees(state => {
        state.map(item => {
          if (item.id === coffee.id) {
            item.amount = coffee.amount
          }
        })
        return state
      })
      setOrders(coffees.filter(item => item.amount > 0))
    }
  }

  function removeOrderItem(id: number) {
    setOrders(state => state.filter(item => item.id !== id))
    setCoffees(state => {
      state.map(item => {
        if (item.id === id) {
          item.amount = 0
        }
      })
      return state
    })
  }

  function clean() {
    setCoffees(state => state.map(item => {
      item.amount = 0
      return item
    }))
    setOrders([])
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
            setCityLocation(obj.address.city)
            setUfLocation(obj.address['ISO3166-2-lvl4'].split('-')[1])
          },
          (error) => {
            console.error("Error fetching location:", error)
          }
        )
      } else {
        console.error("Browser dont support geolocation.")
      }
    }
    getLocalization()
  }, [])

  useEffect(() => {
    setCoffees(data)
  }, [])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        orders,
        cityLocation,
        ufLocation,
        addAmount,
        subtractAmount,
        removeOrderItem,
        clean,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
