import axios from 'axios'
import { Dispatch } from 'redux'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
} from '../constants/orderConstants'
import { IOrder, IOrderDetails, IPaymentResult, IUserInfo } from '../interfaces'

interface CreateOrderRequestAction {
  type: typeof ORDER_CREATE_REQUEST
}
interface CreateOrderSuccessAction {
  type: typeof ORDER_CREATE_SUCCESS
  payload: IOrderDetails
}
interface CreateOrderFailAction {
  type: typeof ORDER_CREATE_FAIL
  payload: string
}
export type CreateOrderActionTypes =
  | CreateOrderRequestAction
  | CreateOrderSuccessAction
  | CreateOrderFailAction

export const createOrder = (order: IOrder) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put('/api/orders', order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface OrderDetailsRequestAction {
  type: typeof ORDER_DETAILS_REQUEST
}
interface OrderDetailsSuccessAction {
  type: typeof ORDER_DETAILS_SUCCESS
  payload: IOrderDetails
}
interface OrderDetailsFailAction {
  type: typeof ORDER_DETAILS_FAIL
  payload: string
}
export type OrderDetailsActionTypes =
  | OrderDetailsRequestAction
  | OrderDetailsSuccessAction
  | OrderDetailsFailAction

export const getOrderDetails = (id: string) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/orders/${id}`, config)

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface OrderPayRequestAction {
  type: typeof ORDER_PAY_REQUEST
}
interface OrderPaySuccessAction {
  type: typeof ORDER_PAY_SUCCESS
  payload: boolean
}
interface OrderPayFailAction {
  type: typeof ORDER_PAY_FAIL
  payload: string
}
interface OrderPayResetAction {
  type: typeof ORDER_PAY_RESET
}
export type OrderPayActionTypes =
  | OrderPayRequestAction
  | OrderPaySuccessAction
  | OrderPayFailAction
  | OrderPayResetAction

export const payOrder = (orderId: string, paymentResult: IPaymentResult) => async (
  dispatch: Dispatch,
  getState: any
) => {
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)

    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface OrderListMyRequestAction {
  type: typeof ORDER_LIST_MY_REQUEST
}
interface OrderListMySuccessAction {
  type: typeof ORDER_LIST_MY_SUCCESS
  payload: Array<IOrderDetails>
}
interface OrderListMyFailAction {
  type: typeof ORDER_LIST_MY_FAIL
  payload: string
}
export type OrderListMyActionTypes =
  | OrderListMyRequestAction
  | OrderListMySuccessAction
  | OrderListMyFailAction

export const listMyOrders = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get('/api/orders/myorders', config)

    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
