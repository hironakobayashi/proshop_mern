import axios from 'axios'
import { Dispatch } from 'redux'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../constants/orderConstants'
import { IOrder, IUserInfo } from '../interfaces'

interface CreateOrderRequestAction {
  type: typeof ORDER_CREATE_REQUEST
}
interface CreateOrderSuccessAction {
  type: typeof ORDER_CREATE_SUCCESS
  payload: IUserInfo
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
