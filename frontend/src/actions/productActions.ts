import axios from 'axios'
import { Dispatch } from 'redux'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstant'
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
