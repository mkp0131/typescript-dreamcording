{
    var CoffeeMaker = /** @class */ (function () {
        function CoffeeMaker(beans) {
            this.BEANS_GRAMM_PER_SHOT = 7;
            this.coffeeBeans = 0;
            this.coffeeBeans = beans;
        }
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        };
        return CoffeeMaker;
    }());
    var americano = new CoffeeMaker(0);
    americano.coffeeBeans = 21;
    var result = americano.makeCoffee(3);
    console.log(result);
}
