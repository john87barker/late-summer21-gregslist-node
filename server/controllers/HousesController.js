import { housesService } from '../services/HomesService'
import BaseController from '../utils/BaseController'

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      // .put('/:id', this.bid)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  /**
   * Get all Houses
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const houses = await housesService.getAll(req.query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get House by id
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getById(req, res, next) {
    try {
      const house = await housesService.getById(req.params.id)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create House
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const house = await housesService.create(req.body)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
     * Edit House
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const house = await housesService.edit(req.body)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Delete House
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async destroy(req, res, next) {
    try {
      await housesService.destroy(req.params.id)
      res.send({ message: 'Removed House Successfully' })
    } catch (error) {
      next(error)
    }
  }
}
