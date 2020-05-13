import Car from "./Models/Car.js";

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
