import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const cartItems = localStorage.getItem('cartItems')
const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : []

const initialState = { cart: { cartItems: cartItemsFromStorage } }
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export type AllState = ReturnType<typeof store.getState>
export default store

export type RootState = ReturnType<typeof reducer>
