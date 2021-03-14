import { Reducer } from 'redux'
import {
  UserDeleteActionTypes,
  UserDetailsActionTypes,
  UserListActionTypes,
  UserLoginActionTypes,
  UserRegisterActionTypes,
  UserUpdateActionTypes,
  UserUpdateProfileActionTypes,
} from '../actions/userActions'
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
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
    case USER_UPDATE_PROFILE_RESET:
      return initialUserUpdateProfileState
    default:
      return state
  }
}

const initialUserListState = {
  loading: false,
  error: '',
  users: [],
}
export type UserListState = {
  loading: boolean
  users: Array<IUserProfile>
  error: string
}

export const userListReducer: Reducer<UserListState, UserListActionTypes> = (
  state = initialUserListState,
  action: UserListActionTypes
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true }
    case USER_LIST_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_LIST_RESET:
      return initialUserListState
    default:
      return state
  }
}

const initialUserDeleteState = {
  loading: false,
  error: '',
  success: false,
}
export type UserDeleteState = {
  loading: boolean
  success: boolean
  error: string
}

export const userDeleteReducer: Reducer<UserDeleteState, UserDeleteActionTypes> = (
  state = initialUserDeleteState,
  action: UserDeleteActionTypes
) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { ...state, loading: true }
    case USER_DELETE_SUCCESS:
      return { ...state, loading: false, success: true }
    case USER_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const initialUserUpdateState = {
  loading: false,
  error: '',
  success: false,
}
export type UserUpdateState = {
  loading: boolean
  success: boolean
  error: string
}

export const userUpdateReducer: Reducer<UserUpdateState, UserUpdateActionTypes> = (
  state = initialUserUpdateState,
  action: UserUpdateActionTypes
) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true }
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false, success: true }
    case USER_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_UPDATE_RESET:
      return initialUserUpdateState
    default:
      return state
  }
}
