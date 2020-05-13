import { generateId } from "../Utils.js"


export default class House {
    constructor(data) {
        this.generateId = generateId
        this.price = data.price
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.address = data.address
        this.imgUrl = data.imgUrl
    }
}