{


	type CoffeCup = {
		shots:number,
		hasMilk:boolean,
	}

	class CoffeeMaker {
		// static 클래스레벨에 저장하는 변수
		static BEANS_GRAMM_PER_SHOT:number = 7;
		private coffeeBeans:number = 0;

		constructor(beans: number) {
			this.coffeeBeans = beans;
		}

		fillCoffeeBeans(beans:number) {
			if(beans < 0) {
				throw new Error("Invalid value");
			}
			this.coffeeBeans += beans;
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
	// americano.fillCoffeeBeans(21);
	console.log('americano', americano);
	let result = americano.fillCoffeeBeans(-1);
	

	// americano.coffeeBeans = 21;
	// let result = americano.makeCoffee(3);

	console.log('#', result);
}

