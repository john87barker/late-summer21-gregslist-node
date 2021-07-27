import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.TemplateHouse
  })
  document.getElementById('houses').innerHTML = template
}
  
export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => {
      console.log('new house')
    })
    _draw()
  }


  async createHouse() {
    try {
      event.preventDefault()
      let form = event.target
      let rawHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        year: form.year.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
        levels: form.levels.value,
        description: form.description.value
      }
      await housesService.createHouse(rawHouse)
      form.reset()
    } catch (error) {
      console.error(error)
      window.alert(error.message)
    }
  }


  deleteHouse(houseId) {
    console.log('You are trying to delete house number', houseId)
    housesService.deleteHouse(houseId)
    }

  bidHouse(houseId) {
    console.log('You are going to put more money on this silly house', houseId)
    housesService.bidHouse(houseId)
  }
}