import axios from 'axios'
import { Dispatch } from 'redux'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'
import { IAddress, ICartItem } from '../interfaces'

interface CartAddItemAction {
  type: typeof CART_ADD_ITEM
  payload: ICartItem
}

interface CartRemoveItemAction {
  type: typeof CART_REMOVE_ITEM
  payload: string
}

interface SaveShippingAddressAction {
  type: typeof CART_SAVE_SHIPPING_ADDRESS
  payload: IAddress
}

interface SavePaymentMethodAction {
  type: typeof CART_SAVE_PAYMENT_METHOD
  payload: string
}

export type CartActionTypes =
  | CartAddItemAction
  | CartRemoveItemAction
  | SaveShippingAddressAction
  | SavePaymentMethodAction

export const addToCart = (id: string, qty: number) => async (dispatch: Dispatch, getState: any) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id: string) => (dispatch: Dispatch, getState: any) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data: IAddress) => (dispatch: Dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data: string) => (dispatch: Dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
