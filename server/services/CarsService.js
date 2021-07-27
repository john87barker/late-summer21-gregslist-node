import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CarsService {
  async getAll(query = {}) {
    const cars = await dbContext.Cars.find(query)
    return cars
  }

  async getById(id) {
    const car = await dbContext.Cars.findById(id)
    if (!car) {
      throw new BadRequest('Invalid Id')
    }
    return car
  }

  async create(body) {
    const car = await dbContext.Cars.create(body)
    return car
  }

  async edit(body) {
    const car = await dbContext.Cars.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!car) {
      throw new BadRequest('Invalid Id')
    }
    return car
  }

  async bid(body) {
    let car = await this.getById(body.id)
    if (car.price > body.price) {
      throw new BadRequest('Cars can only be bid up')
    }
    car = await dbContext.Cars.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return car
  }

  async destroy(id) {
    const car = await dbContext.Cars.findByIdAndDelete(id)
    if (!car) {
      throw new BadRequest('Invalid Id')
    }
    return car
  }
}

export const carsService = new CarsService()
