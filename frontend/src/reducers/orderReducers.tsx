import { Reducer } from 'redux'
import { CreateOrderActionTypes, OrderDetailsActionTypes } from '../actions/orderActions'
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from '../constants/orderConstants'

const initialOrderCreateState = {
  loading: false,
  error: '',
  success: false,
}
export type OrderCreateState = {
  loading?: boolean
  order?: any
  error?: string
  success?: boolean
}

export const orderCreateReducer: Reducer<OrderCreateState, CreateOrderActionTypes> = (
  state = initialOrderCreateState,
  action: CreateOrderActionTypes
) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true }
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload }
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const initialOrderDetailsState = {
  loading: false,
  error: '',
}
export type OrderDetailsState = {
  loading?: boolean
  error?: string
  orderItems?: any
  shippingAddress?: any
}

export const orderDetailsReducer: Reducer<OrderDetailsState, OrderDetailsActionTypes> = (
  state = initialOrderDetailsState,
  action: OrderDetailsActionTypes
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload }
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
