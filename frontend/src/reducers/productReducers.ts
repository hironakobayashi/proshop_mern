import { Reducer } from 'redux'
import { ProductListActionTypes } from '../actions/productAction'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstant'
import { IProduct } from '../interfaces'

const initialState = {
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
  state = initialState,
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
