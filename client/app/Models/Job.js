export default class Job {
  constructor({ jobTitle, company, hours, rate, description, createdAt, updatedAt, id}) {
    this.jobTitle = jobTitle
    this.description = description
    this.rate = rate
    this.hours = hours
    this.company = company
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this._v = 0
    this.id = id
  }

  get TemplateJob() {
    return `
<div class="col-md-3 col-sm-2 my-3">
  <div class="car bg-light shadow rounded-bottom">
    <div class="p-3">
      <div class="text-center">
        <p><b>${this.jobTitle} - - -
         ${this.company}</b></p>
      </div>
        <p>${this.description}</p>
        <p><em>Expected Hours: ${this.hours} @ $${this.rate}</em></p>
    </div>
      <button class="btn btn-warning btn-block" onclick="app.jobsController.deleteJob('${this.id}')">DELETE </button>
  </div>
</div>
  `
  }
}