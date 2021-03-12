import axios from 'axios'
import { Dispatch } from 'redux'
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'
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
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants'
import { IUserInfo, IUserProfile } from '../interfaces'

interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST
}
interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS
  payload: IUserInfo
}
interface UserLoginFailAction {
  type: typeof USER_LOGIN_FAIL
  payload: string
}
interface UserLogoutAction {
  type: typeof USER_LOGOUT
}
export type UserLoginActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutAction

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post('/api/users/login', { email, password }, config)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })
  dispatch({ type: ORDER_LIST_MY_RESET })
}

interface UserRegisterRequestAction {
  type: typeof USER_REGISTER_REQUEST
}
interface UserRegisterSuccessAction {
  type: typeof USER_REGISTER_SUCCESS
  payload: IUserInfo
}
interface UserRegisterFailAction {
  type: typeof USER_REGISTER_FAIL
  payload: string
}
export type UserRegisterActionTypes =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction

export const register = (name: string, email: string, password: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post('/api/users', { name, email, password }, config)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface UserDetailsRequestAction {
  type: typeof USER_DETAILS_REQUEST
}
interface UserDetailsSuccessAction {
  type: typeof USER_DETAILS_SUCCESS
  payload: IUserProfile
}
interface UserDetailsFailAction {
  type: typeof USER_DETAILS_FAIL
  payload: string
}
interface UserDetailsResetAction {
  type: typeof USER_DETAILS_RESET
}
export type UserDetailsActionTypes =
  | UserDetailsRequestAction
  | UserDetailsSuccessAction
  | UserDetailsFailAction
  | UserDetailsResetAction

export const getUserDetails = (id: string) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
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
    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

interface UserUpdateProfileRequestAction {
  type: typeof USER_UPDATE_PROFILE_REQUEST
}
interface UserUpdateProfileSuccessAction {
  type: typeof USER_UPDATE_PROFILE_SUCCESS
  payload: IUserInfo
}
interface UserUpdateProfileFailAction {
  type: typeof USER_UPDATE_PROFILE_FAIL
  payload: string
}
export type UserUpdateProfileActionTypes =
  | UserUpdateProfileRequestAction
  | UserUpdateProfileSuccessAction
  | UserUpdateProfileFailAction

export const updateUserProfile = (user: {
  id: string
  name: string
  email: string
  password: string
}) => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
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
    const { data } = await axios.put('/api/users/profile', user, config)

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
