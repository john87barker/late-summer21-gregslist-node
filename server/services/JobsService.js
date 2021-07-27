import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class JobsService {
  async getAll(query = {}) {
    const jobs = await dbContext.Jobs.find(query)
    return jobs
  }

  async getById(id) {
    const job = await dbContext.Jobs.findById(id)
    if (!job) {
      throw new BadRequest('invalid id')
    }
    return job
  }

  async create(body) {
    const job = await dbContext.Jobs.create(body)
    return job
  }

  async edit(body) {
    const job = await dbContext.Jobs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!job) {
      throw new BadRequest('invalid id')
    }
    return job
  }

  async destroy(id) {
    const job = await dbContext.Jobs.findByIdAndDelete(id)
    if (!job) {
      throw new BadRequest('invalid id')
    }
    return job
  }
}

export const jobsService = new JobsService()
