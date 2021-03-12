import { Reducer } from 'redux'
import { UserLoginActionTypes, UserRegisterActionTypes } from '../actions/userActions'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'
import { IUserInfo } from '../interfaces'

const initialUserLoginState = {
  loading: false,
  error: '',
  userInfo: {
    name: '',
    email: '',
    isAdmin: false,
    token: '',
  },
}
export type UserLoginState = {
  loading?: boolean
  userInfo?: IUserInfo
  error?: string
}

export const userLoginReducer: Reducer<UserLoginState, UserLoginActionTypes> = (
  state = initialUserLoginState,
  action: UserLoginActionTypes
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

const initialUserRegisterState = {
  loading: false,
  error: '',
  userInfo: {
    name: '',
    email: '',
    isAdmin: false,
    token: '',
  },
}
export type UserRegisterState = {
  loading?: boolean
  userInfo?: IUserInfo
  error?: string
}

export const userRegisterReducer: Reducer<UserRegisterState, UserRegisterActionTypes> = (
  state = initialUserRegisterState,
  action: UserRegisterActionTypes
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
