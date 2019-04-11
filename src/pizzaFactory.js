const VeggiePizza = require('./veggiePizza');

class PizzaFactory {
    createPizza (pizzaType) {
        switch (pizzaType) {
            case 'VeggiePizza':
                return new VeggiePizza().prepare();
    };
}

module.exports = PizzaFactory;
