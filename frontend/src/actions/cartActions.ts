import axios from 'axios'
import { Dispatch } from 'redux'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstant'
import { ICartItem } from '../interfaces'

interface CartAddItemAction {
  type: typeof CART_ADD_ITEM
  payload: ICartItem
}

interface CartRemoveItemAction {
  type: typeof CART_REMOVE_ITEM
  payload: string
}

export type CartActionTypes = CartAddItemAction | CartRemoveItemAction

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
