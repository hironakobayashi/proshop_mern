import { Reducer } from 'redux'
import { ProductDetailsActionTypes, ProductListActionTypes } from '../actions/productAction'
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstant'
import { IProduct } from '../interfaces'

const initialListState = {
  loading: false,
  error: '',
  products: [
    {
      _id: '',
      name: '',
      image: '',
      description: '',
      brand: '',
      category: '',
      price: 0,
      countInStock: 0,
      rating: 0,
      numReviews: 0,
    },
  ],
}
export type ProductListState = {
  loading: boolean
  products?: IProduct[]
  error?: string
}

export const productListReducer: Reducer<ProductListState, ProductListActionTypes> = (
  state = initialListState,
  action: ProductListActionTypes
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const initialDetailsState = {
  loading: false,
  error: '',
  product: {
    _id: '',
    name: '',
    image: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
}
export type ProductDetailsState = {
  loading: boolean
  product?: IProduct
  error?: string
}

export const productDetailsReducer: Reducer<ProductDetailsState, ProductDetailsActionTypes> = (
  state = initialDetailsState,
  action: ProductDetailsActionTypes
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
