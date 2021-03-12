import { Reducer } from 'redux'
import { CreateOrderActionTypes } from '../actions/orderActions'
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
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
