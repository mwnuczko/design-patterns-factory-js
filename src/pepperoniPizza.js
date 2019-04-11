const Pizza = require('./interfaces/pizza');

class PepperoniPizza extends Pizza {
    prepare() {};
    getIngredients() { return ['pepperoni', 'onion']; };
}

module.exports = PepperoniPizza;
