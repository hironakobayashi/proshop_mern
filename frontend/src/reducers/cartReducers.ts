import { Reducer } from 'redux'
import { CartActionTypes } from '../actions/cartActions'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstant'
import { ICartItem } from '../interfaces'

const initialCartState = {
  loading: false,
  error: '',
  cartItems: [
    {
      product: '',
      name: '',
      image: '',
      price: 0,
      countInStock: 0,
      qty: 0,
    },
  ],
}
export type CartState = {
  loading?: boolean
  cartItems: ICartItem[]
  error?: string
}

export const cartReducer: Reducer<CartState, CartActionTypes> = (
  state = initialCartState,
  action: CartActionTypes
) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    default:
      return state
  }
}
