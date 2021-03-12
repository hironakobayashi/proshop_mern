export interface IProduct {
  _id: string
  name: string
  image: string
  description: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
}

export interface ICartItem {
  product: string
  name: string
  image: string
  price: number
  countInStock: number
  qty: number
}

export interface IUserInfo {
  name: string
  email: string
  isAdmin: boolean
  token: string
}

export interface IUserProfile {
  _id: string
  name: string
  email: string
  isAdmin: boolean
}

export interface IAddress {
  address: string
  city: string
  postalCode: string
  country: string
}
