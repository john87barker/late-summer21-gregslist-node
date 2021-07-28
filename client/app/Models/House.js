export default class House {
  constructor({ bedrooms, bathrooms, levels, price, description, imgUrl, id, year, createdAt, updatedAt, _v }) {
    this.year = year || 'No info'
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels || 'No info'
    this.price = price
    this.description = description || 'No Description for the Home'
    this.imgUrl = imgUrl || '//placehold.it/200x200'
    this.createdAt = createdAt || 'No info'
    this.updatedAt = updatedAt || 'No info'
    this._v = _v || 'No info'
    this.id = id || 'No info'
  }

  get TemplateHouse() {
    return `
<div class="col-md-3 col-sm-2 my-3 ">
  <div class="card bg-light shadow rounded-bottom text-dark mx-4">
    <img src="${this.imgUrl}" class="w-100" alt="${this.bedrooms}  ${this.bathrooms} home image">
    <div class="p-3">
      <div class="text-center">
        <p><b>${this.bedrooms} bedroom - ${this.bathrooms} bathrooms </b></p> 
        <p>${this.year} sqft</p>
      </div>
        <p>${this.description}</p>
        <p><em>$${this.price}</em></p>
        <button class="btn btn-info btn-block" onclick="app.housesController.bidHouse('${this.id}')">BID </button>
        <button class="btn btn-warning btn-block" onclick="app.housesController.deleteHouse('${this.id}')">DELETE </button>
      </div>
  </div>
</div>
  `
  }
}
