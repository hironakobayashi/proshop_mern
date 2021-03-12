import axios from 'axios'
import { Dispatch } from 'redux'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants'

interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST
}
interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS
  payload: Object
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
