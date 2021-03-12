import axios from 'axios'
import { Dispatch } from 'redux'
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
    dispatch({
      type: USER_LOGIN_SUCCESS,
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
