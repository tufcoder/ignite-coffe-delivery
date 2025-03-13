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
  const [orders, setOrders] = useState<CoffeeType[]>([])
  const [cityLocation, setCityLocation] = useState('')
  const [ufLocation, setUfLocation] = useState('')
  const [dataChanged, setDataChanged] = useState(false);

  const storageKey = '@coffee-delivery-1.0.0'

  function addAmount(coffee: CoffeeType) {
    coffee.amount++
    setCoffees(state => {
      return state.map(item => {
        if (item.id === coffee.id) {
          return { ...item, amount: coffee.amount }
        }
        return item
      })
    })
    setDataChanged(true);
  }

  function subtractAmount(coffee: CoffeeType) {
    if (coffee.amount > 1) {
      coffee.amount--
      setCoffees(state => {
        return state.map(item => {
          if (item.id === coffee.id) {
            return { ...item, amount: coffee.amount }
          }
          return item
        })
      })
    }
    setDataChanged(true);
  }

  function removeOrderItem(id: number) {
    setOrders(state => state.filter(item => item.id !== id))
    setCoffees(state => {
      return state.map(item => {
        if (item.id === id) {
          return { ...item, amount: 0 }
        }
        return item
      })
    })
    setDataChanged(true);
  }

  function clean() {
    setCoffees(state => state.map(item => ({ ...item, amount: 0 })))
    setOrders([])
    setDataChanged(true);
  }

  async function fetchAddress(latitude: number, longitude: number) {
    if (import.meta.env.MODE !== 'development') {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        return response.data
      } catch (error) {
        console.error('Erro ao buscar endereço:', error)
        return null
      }
    } else {
      return null;
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
    getLocalization()
  }, [])

  function persistData(coffees: CoffeeType[], orders: CoffeeType[]) {
    const dataToStore = { coffees, orders }
    localStorage.setItem(storageKey, JSON.stringify(dataToStore))
  }

  useEffect(() => {
    const storedData = localStorage.getItem(storageKey)
    if (storedData) {
      console.log('storage')
      try {
        const parsedData = JSON.parse(storedData)
        setCoffees(parsedData.coffees || [])
        setOrders(parsedData.orders || [])
      } catch (error) {
        console.error('Error parsing localStorage data', error)
        setCoffees(data)
        setOrders([])
      }
    } else {
      console.log('seed')
      setCoffees(data)
      setOrders([])
    }
  }, [])

  useEffect(() => {
    if (dataChanged) {
      persistData(coffees, orders);
      setDataChanged(false);
    }
  }, [coffees, orders, dataChanged])

  useEffect(() => {
    setOrders(coffees.filter(item => item.amount > 0))
  }, [coffees])

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
