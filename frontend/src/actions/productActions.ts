import axios from 'axios'
import { Dispatch } from 'redux'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_RESET,
} from '../constants/productConstants'
import { IProduct } from '../interfaces'

interface ProductListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST
}
interface ProductListSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS
  payload: IProduct[]
}
interface ProductListFailAction {
  type: typeof PRODUCT_LIST_FAIL
  payload: string
}
export type ProductListActionTypes =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction

export const listProducts = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    const { data } = await axios.get('/api/products')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface ProductDetailsRequestAction {
  type: typeof PRODUCT_DETAILS_REQUEST
}
interface ProductDetailsSuccessAction {
  type: typeof PRODUCT_DETAILS_SUCCESS
  payload: IProduct
}
interface ProductDetailsFailAction {
  type: typeof PRODUCT_DETAILS_FAIL
  payload: string
}
export type ProductDetailsActionTypes =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction

export const listProductDetails = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface ProductDeleteRequestAction {
  type: typeof PRODUCT_DELETE_REQUEST
}
interface ProductDeleteSuccessAction {
  type: typeof PRODUCT_DELETE_SUCCESS
}
interface ProductDeleteFailAction {
  type: typeof PRODUCT_DELETE_FAIL
  payload: string
}
export type ProductDeleteActionTypes =
  | ProductDeleteRequestAction
  | ProductDeleteSuccessAction
  | ProductDeleteFailAction

export const deleteProduct = (id: string) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    await axios.delete(`/api/products/${id}`, config)

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface ProductCreateRequestAction {
  type: typeof PRODUCT_CREATE_REQUEST
}
interface ProductCreateSuccessAction {
  type: typeof PRODUCT_CREATE_SUCCESS
  payload: IProduct
}
interface ProductCreateFailAction {
  type: typeof PRODUCT_CREATE_FAIL
  payload: string
}
interface ProductCreateResetAction {
  type: typeof PRODUCT_CREATE_RESET
}
export type ProductCreateActionTypes =
  | ProductCreateRequestAction
  | ProductCreateSuccessAction
  | ProductCreateFailAction
  | ProductCreateResetAction

export const createProduct = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post('/api/products', {}, config)

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
