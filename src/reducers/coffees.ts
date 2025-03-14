import { CoffeeType } from "../contexts/CoffeesContext"

export enum ActionTypes {
  ADD_AMOUNT,
  SUBTRACT_AMOUNT,
  REMOVE_ORDER_ITEM,
  CLEAN,
}

type AmountItemsType = {
  type: ActionTypes.ADD_AMOUNT | ActionTypes.SUBTRACT_AMOUNT
  payload: { id: number }
}

type RemoveOrderItemsType = {
  type: ActionTypes.REMOVE_ORDER_ITEM
  payload: {
    id: number
    amount: number
  }
}

type ClearItemsType = {
  type: ActionTypes.CLEAN
  payload: { amount: number }
}

type CoffeeAction =
  | AmountItemsType
  | RemoveOrderItemsType
  | ClearItemsType

export interface CoffeeState {
  coffees: CoffeeType[],
  orders: CoffeeType[],
}

export function coffeesImmerReducer(draft: CoffeeState, action: CoffeeAction) {
  switch (action.type) {
    case ActionTypes.ADD_AMOUNT: {
      const currentCoffeeIndex = draft.coffees.findIndex(item => item.id === action.payload.id)
      if (currentCoffeeIndex < 0) return draft
      draft.coffees[currentCoffeeIndex].amount++
      draft.orders = draft.coffees.filter(item => item.amount > 0)
      return draft
    }
    case ActionTypes.SUBTRACT_AMOUNT: {
      const currentCoffeeIndex = draft.coffees.findIndex(item => item.id === action.payload.id)
      if (currentCoffeeIndex < 0) return draft
      if (draft.coffees[currentCoffeeIndex].amount > 1) {
        draft.coffees[currentCoffeeIndex].amount--
        draft.orders = draft.coffees.filter(item => item.amount > 0)
      }
      return draft
    }
    case ActionTypes.REMOVE_ORDER_ITEM: {
      const currentCoffeeIndex = draft.coffees.findIndex(item => item.id === action.payload.id)
      if (currentCoffeeIndex < 0) return draft
      draft.coffees[currentCoffeeIndex].amount = action.payload.amount
      draft.orders = draft.coffees.filter(item => item.amount > 0)
      return draft
    }
    case ActionTypes.CLEAN: {
      draft.coffees.forEach(item => item.amount = action.payload.amount)
      draft.orders = []
      return draft
    }
    default:
      return draft
  }
}

export function coffeesReducer(state: CoffeeState, action: CoffeeAction) {
  switch (action.type) {
    case ActionTypes.ADD_AMOUNT: {
      return {
        ...state,
        coffees: state.coffees.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + 1 }
          }
          return item
        }),
        orders: state.coffees.filter(item => item.amount > 0),
      }
    }
    case ActionTypes.SUBTRACT_AMOUNT: {
      return {
        ...state,
        _coffees: state.coffees.map(item => {
          if (item.amount > 1 && item.id === action.payload.id) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        }),
        orders: state.coffees.filter(item => item.amount > 0),
      }
    }
    case ActionTypes.REMOVE_ORDER_ITEM: {
      return {
        ...state,
        coffees: state.coffees.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, amount: action.payload.amount }
          }
          return item
        }),
        orders: state.orders.filter(item => item.id !== action.payload.id),
      }
    }
    case ActionTypes.CLEAN: {
      return {
        ...state,
        coffees: state.coffees.map(item => (
          { ...item, amount: action.payload.amount }
        )),
        orders: [],
      }
    }
    default:
      return state
  }
}

export function addAmountAction(id: number): CoffeeAction {
  return {
    type: ActionTypes.ADD_AMOUNT,
    payload: { id },
  }
}

export function subtractAmountAction(id: number): CoffeeAction {
  return {
    type: ActionTypes.SUBTRACT_AMOUNT,
    payload: { id },
  }
}

export function removeOrderItemsAction(id: number, amount: number = 0): CoffeeAction {
  return {
    type: ActionTypes.REMOVE_ORDER_ITEM,
    payload: { id, amount },
  }
}

export function clearItemsAction(amount: number = 0): CoffeeAction {
  return {
    type: ActionTypes.CLEAN,
    payload: { amount },
  }
}
