import Car from "./Models/Car.js";
import House from "./Models/House"

let _house = {

  house: [
    new House({ price: 250000, bedrooms: 3, bathrooms: 2, sqft: 1700, address: "123 Code Ave, Boise, ID", imgUrl: "https://i.pinimg.com/236x/c7/7f/c6/c77fc649ec89a3ff68435340af113acb--funny-faces-unusual-buildings.jpg" }),
    new House({ price: 15000000, bedrooms: 10, bathrooms: 15, sqft: 15000, address: "456 Im Rich Dr, Boise, ID", imgUrl: "https://d3eys52k95jjdh.cloudfront.net/wp-content/uploads/2019/07/cropped-He_Tatooine_21.jpg" })
  ]

}
let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ title: "Jinkies", make: "Mystery", model: "Machine", price: "10000", description: "smells like a large dog in here", imgUrl: "https://i.ytimg.com/vi/ArKckzLPM0M/maxresdefault.jpg" }),
    new Car({ title: "How is this for sale", make: "Bat", model: "mobile", price: "30000", description: "look at all these cool buttons!", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81Lc2ZJXj4L._AC_SX425_.jpg" })
  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  addCar(car) {
    _state.cars.push(car)
  }
  removeCar(id) {
    // NOTE find the index of the car with the provided id
    let index = _state.cars.findIndex(c => c.id == id)
    // NOTE check to make sure it was found
    if (index == -1) {
      console.error("invalid id")
      return;
    }
    _state.cars.splice(index, 1)
  }
}



const STORE = new Store();
export default STORE;



