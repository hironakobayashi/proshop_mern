import express from 'express'
import { config } from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

import productRoute from './routes/productRoutes.js'

config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...!!')
})

app.use('/api/products', productRoute)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)
