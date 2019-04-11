const Pizza = require('./interfaces/pizza');

class CheesePizza extends Pizza {
    prepare() {};
    getIngredients() { return ['double cheese', 'ham']; };
}

module.exports = CheesePizza;
