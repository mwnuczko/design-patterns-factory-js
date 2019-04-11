const Pizza = require('./interfaces/pizza');
// const PizzaFactory = require('./pizzaFactory');

class VeggiePizza extends Pizza {
  constructor() {
    super();
    this.ingredients.push('brocolli');
  }
  
  prepare() {
    // const ingredients = this.getIngredients();
    // return PizzaFactory('VeggiePizza');
    return new VeggiePizza();
  }
  
  getIngredients() {
    // super.getIngredients();
    return this.ingredients;
  }
}

module.exports = VeggiePizza;
