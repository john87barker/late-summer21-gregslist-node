import { ProxyState } from '../AppState.js'
import { jobsService } from '../Services/JobsService.js'

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.TemplateJob
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    ProxyState.on('jobs', () => {
      console.log('new job')
    })
    _draw()
  }

  async createJob() {
    try {
      event.preventDefault()
      const form = event.target

      const rawJob = {
        jobTitle: form.jobTitle.value,
        company: form.company.value,
        rate: form.rate.value,
        hours: form.hours.value,
        description: form.description.value
      }
      await jobsService.createJob(rawJob)
      form.reset()
    } catch (error) {
      console.error(error)
      window.alert(error.message)
    }
  }

  deleteJob(jobId) {
    console.log('Deleting job number', jobId)
    jobsService.deleteJob(jobId)
  }
}
