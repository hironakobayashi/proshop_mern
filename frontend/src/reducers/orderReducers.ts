import { Reducer } from 'redux'
import {
  CreateOrderActionTypes,
  OrderDetailsActionTypes,
  OrderListActionTypes,
  OrderListMyActionTypes,
  OrderPayActionTypes,
} from '../actions/orderActions'
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from '../constants/orderConstants'
import { IOrder, IOrderDetails } from '../interfaces'

const initialOrder = {
  _id: '',
  isPaid: false,
  isDelivered: false,
  orderItems: [],
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
  user: {
    name: '',
    email: '',
  },
  paidAt: undefined,
  deliveredAt: undefined,
}

const initialOrderCreateState = {
  loading: false,
  error: '',
  order: initialOrder,
  success: false,
}
export type OrderCreateState = {
  loading: boolean
  order: IOrderDetails
  error: string
  success: boolean
}

export const orderCreateReducer: Reducer<OrderCreateState, CreateOrderActionTypes> = (
  state = initialOrderCreateState,
  action: CreateOrderActionTypes
) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { ...state, loading: true }
    case ORDER_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, order: action.payload }
    case ORDER_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const initialOrderDetailsState = {
  loading: true,
  error: '',
  order: initialOrder,
}
export type OrderDetailsState = {
  loading: boolean
  error: string
  order: IOrderDetails
}

export const orderDetailsReducer: Reducer<OrderDetailsState, OrderDetailsActionTypes> = (
  state = initialOrderDetailsState,
  action: OrderDetailsActionTypes
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case ORDER_DETAILS_SUCCESS:
      return { ...state, loading: false, order: action.payload }
    case ORDER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const initialOrderPayState = {
  loading: false,
  error: '',
  success: false,
}
export type OrderPayState = {
  loading: boolean
  error: string
  success: boolean
}

export const orderPayReducer: Reducer<OrderPayState, OrderPayActionTypes> = (
  state = initialOrderPayState,
  action: OrderPayActionTypes
) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { ...state, loading: true }
    case ORDER_PAY_SUCCESS:
      return { ...state, loading: false, success: true }
    case ORDER_PAY_FAIL:
      return { ...state, loading: false, error: action.payload }
    case ORDER_PAY_RESET:
      return initialOrderPayState
    default:
      return state
  }
}

const initialOrderListMyState = {
  loading: false,
  error: '',
  orders: [],
}
export type OrderListMyState = {
  loading: boolean
  error: string
  orders: Array<IOrderDetails>
}

export const orderListMyReducer: Reducer<OrderListMyState, OrderListMyActionTypes> = (
  state = initialOrderListMyState,
  action: OrderListMyActionTypes
) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return { ...state, loading: true }
    case ORDER_LIST_MY_SUCCESS:
      return { ...state, loading: false, orders: action.payload }
    case ORDER_LIST_MY_FAIL:
      return { ...state, loading: false, error: action.payload }
    case ORDER_LIST_MY_RESET:
      return initialOrderListMyState
    default:
      return state
  }
}

const initialOrderListState = {
  loading: false,
  error: '',
  orders: [],
}
export type OrderListState = {
  loading: boolean
  error: string
  orders: Array<IOrderDetails>
}

export const orderListReducer: Reducer<OrderListState, OrderListActionTypes> = (
  state = initialOrderListState,
  action: OrderListActionTypes
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { ...state, loading: true }
    case ORDER_LIST_SUCCESS:
      return { ...state, loading: false, orders: action.payload }
    case ORDER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
