import { Reducer } from 'redux'
import { CartActionTypes } from '../actions/cartActions'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'
import { IAddress, ICartItem } from '../interfaces'

const initialCartState = {
  loading: false,
  error: '',
  cartItems: [],
  shippingAddress: {
    address: '',
    city: '',
    postalCode: '',
    country: '',
  },
  paymentMethod: '',
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
}
export type CartState = {
  loading?: boolean
  cartItems: ICartItem[]
  error?: string
  shippingAddress: IAddress
  paymentMethod: string
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}

export const cartReducer: Reducer<CartState, CartActionTypes> = (
  state = initialCartState,
  action: CartActionTypes
) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload
      const existItem = state.cartItems?.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems?.map((x) => (x.product === existItem.product ? item : x)),
        }
      } else {
        return {
          ...state,
          cartItems: [...(state.cartItems || []), item],
        }
      }
    }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems?.filter((x) => x.product !== action.payload),
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    default:
      return state
  }
}
