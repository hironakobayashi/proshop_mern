import { Reducer } from 'redux'
import { UserLoginActionTypes } from '../actions/userActions'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
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
