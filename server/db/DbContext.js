import mongoose from 'mongoose'
import CarSchema from '../models/Car'
import ValueSchema from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Cars = mongoose.model('Car', CarSchema)
}

export const dbContext = new DbContext()
