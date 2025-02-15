import { Reducer } from 'redux'
import {
  ProductCreateActionTypes,
  ProductCreateReviewActionTypes,
  ProductDeleteActionTypes,
  ProductDetailsActionTypes,
  ProductListActionTypes,
  ProductTopRatedActionTypes,
  ProductUpdateActionTypes,
} from '../actions/productActions'
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
} from '../constants/productConstants'
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
      reviews: [],
    },
  ],
  pages: 0,
  page: 0,
}
export type ProductListState = {
  loading: boolean
  products: IProduct[]
  pages: number
  page: number
  error: string
}

export const productListReducer: Reducer<ProductListState, ProductListActionTypes> = (
  state = initialListState,
  action: ProductListActionTypes
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
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
    reviews: [],
  },
}
export type ProductDetailsState = {
  loading: boolean
  product: IProduct
  error: string
}

export const productDetailsReducer: Reducer<ProductDetailsState, ProductDetailsActionTypes> = (
  state = initialDetailsState,
  action: ProductDetailsActionTypes
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const initialDeleteState = {
  loading: false,
  success: false,
  error: '',
}
export type ProductDeleteState = {
  loading: boolean
  success: boolean
  error: string
}

export const productDeleteReducer: Reducer<ProductDeleteState, ProductDeleteActionTypes> = (
  state = initialDeleteState,
  action: ProductDeleteActionTypes
) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_DELETE_SUCCESS:
      return { ...state, loading: false, success: true }
    case PRODUCT_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const initialCreateState = {
  loading: false,
  success: false,
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
    reviews: [],
  },
  error: '',
}
export type ProductCreateState = {
  loading: boolean
  success: boolean
  error: string
  product: IProduct
}

export const productCreateReducer: Reducer<ProductCreateState, ProductCreateActionTypes> = (
  state = initialCreateState,
  action: ProductCreateActionTypes
) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, product: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return initialCreateState
    default:
      return state
  }
}

const initialUpdateState = {
  loading: false,
  success: false,
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
    reviews: [],
  },
  error: '',
}
export type ProductUpdateState = {
  loading: boolean
  success: boolean
  error: string
  product: IProduct
}

export const productUpdateReducer: Reducer<ProductUpdateState, ProductUpdateActionTypes> = (
  state = initialUpdateState,
  action: ProductUpdateActionTypes
) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_UPDATE_SUCCESS:
      return { ...state, loading: false, success: true, product: action.payload }
    case PRODUCT_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    case PRODUCT_UPDATE_RESET:
      return initialCreateState
    default:
      return state
  }
}

const initialReviewCreateState = {
  loading: false,
  success: false,
  error: '',
}
export type ProductReviewCreateState = {
  loading: boolean
  success: boolean
  error: string
}

export const productReviewCreateReducer: Reducer<
  ProductReviewCreateState,
  ProductCreateReviewActionTypes
> = (state = initialReviewCreateState, action: ProductCreateReviewActionTypes) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false, success: true }
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload }
    case PRODUCT_CREATE_REVIEW_RESET:
      return initialCreateState
    default:
      return state
  }
}

const initialTopRatedState = {
  loading: false,
  products: [],
  error: '',
}
export type ProductTopRatedState = {
  loading: boolean
  products: IProduct[]
  error: string
}

export const productTopRatedReducer: Reducer<ProductTopRatedState, ProductTopRatedActionTypes> = (
  state = initialTopRatedState,
  action: ProductTopRatedActionTypes
) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_TOP_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case PRODUCT_TOP_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
