import { jobsService } from '../services/JobsService'
import BaseController from '../utils/BaseController'

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      // .put('/:id', this.bid)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const jobs = await jobsService.getAll(req.query)
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const job = await jobsService.getById(req.params.id)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const job = await jobsService.create(req.body)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const job = await jobsService.edit(req.body)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await jobsService.destroy(req.params.id)
      res.send({ message: 'Job has been filled' })
    } catch (error) {
      next(error)
    }
  }
}
