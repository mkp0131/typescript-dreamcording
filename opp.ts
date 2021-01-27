{


	type CoffeCup = {
		shots:number,
		hasMilk:boolean,
	}

	class CoffeeMaker {
		// static 클래스레벨에 저장하는 변수
		static BEANS_GRAMM_PER_SHOT:number = 7;
		coffeeBeans:number = 0;

		constructor(beans: number) {
			this.coffeeBeans = beans;
		}

		makeCoffee(shots:number): CoffeCup {
			if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
			return {
				shots,
				hasMilk: false,
			}
		}
	}


	let americano = new CoffeeMaker(0);
	let americano2 = new CoffeeMaker(0);
console.log('americano', americano);
console.log('americano2', americano2);
	// americano.coffeeBeans = 21;
	// let result = americano.makeCoffee(3);

	// console.log(result);
}

