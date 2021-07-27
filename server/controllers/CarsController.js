import { carsService } from '../services/CarsService'
import BaseController from '../utils/BaseController'

export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  /**
   * Get all Cars
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const cars = await carsService.getAll(req.query)
      res.send(cars)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get car by id
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const car = await carsService.getById(req.params.id)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create Car
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const car = await carsService.create(req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Edit Car
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      // remove the price from the edit
      delete req.body.price
      const car = await carsService.edit(req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async bid(req, res, next) {
    try {
      const bid = { price: req.body.price, id: req.params.id }
      const car = await carsService.bid(bid)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Delete Car
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async destroy(req, res, next) {
    try {
      await carsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted Car' })
    } catch (error) {
      next(error)
    }
  }
}
