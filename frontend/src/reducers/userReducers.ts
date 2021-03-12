import { Reducer } from 'redux'
import {
  UserDetailsActionTypes,
  UserLoginActionTypes,
  UserRegisterActionTypes,
  UserUpdateProfileActionTypes,
} from '../actions/userActions'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants'
import { IUserInfo, IUserProfile } from '../interfaces'

const initialUserLoginState = {
  loading: false,
  error: '',
  userInfo: undefined,
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
  userInfo: undefined,
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

const initialUserDetailsState = {
  loading: false,
  error: '',
  user: undefined,
}
export type UserDetailsState = {
  loading?: boolean
  user?: IUserProfile
  error?: string
}

export const userDetailsReducer: Reducer<UserDetailsState, UserDetailsActionTypes> = (
  state = initialUserDetailsState,
  action: UserDetailsActionTypes
) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case USER_DETAILS_RESET:
      return initialUserDetailsState
    default:
      return state
  }
}

const initialUserUpdateProfileState = {
  loading: false,
  error: '',
  userInfo: undefined,
}
export type UserUpdateProfileState = {
  loading?: boolean
  success?: boolean
  userInfo?: IUserInfo
  error?: string
}

export const userUpdateProfileReducer: Reducer<
  UserUpdateProfileState,
  UserUpdateProfileActionTypes
> = (state = initialUserUpdateProfileState, action: UserUpdateProfileActionTypes) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
