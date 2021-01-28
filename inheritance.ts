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

		private grindBeans(shots:number) {
			console.log('grindeing beans for ' + shots);
			if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log('Heating up...');
		}

		private extract(shots:number): CoffeCup {
			console.log('Pulling ' + shots + ' shots...');
			return {
				shots,
				hasMilk: false,
			}
		}

		makeCoffee(shots:number): CoffeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}

	}


	let americano = new CoffeeMaker(21);
	americano.makeCoffee(1);
	
}
