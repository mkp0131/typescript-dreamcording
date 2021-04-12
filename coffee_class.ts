type Coffee = {
	shots: number;
	hasMilk: boolean;
}

interface CoffeeMachine {
	makeCoffee(shots: number): Coffee;
}

interface ProCoffeeMachine {
	makeCoffee(shots: number): Coffee;
	fillBeans(gram: number): void;
	clean(): void;
}

class CoffeMaker implements CoffeeMachine, ProCoffeeMachine {

	private static BEANS_GRAM_PER_SHOT:number = 20;
	private beansGram: number = 0;

	private constructor(beansGram: number) {
		this.beansGram = beansGram;
	}

	static makeMachine(beansGram: number) {
		return new CoffeMaker(beansGram);
	}

	fillBeans(gram: number) {
		if(gram < 0) throw new Error('value should be greater than 0');
		this.beansGram += gram;
	}

	clean() {
		console.log('clean 🍄');
	}

	private grindBeans(shots: number) {
		console.log('Grind Beans 🧤');
		const useBeansGram = shots * CoffeMaker.BEANS_GRAM_PER_SHOT;
		if(useBeansGram > this.beansGram) {
			throw new Error('Not enough beans!');
		}
		this.beansGram -= useBeansGram;
	}

	private preheatMachine() {
		console.log('Preheat Machine 🔥');
	}

	private brewCoffee(shots: number):Coffee {
		return {
			shots,
			hasMilk: false
		}
	}

	makeCoffee(shots: number):Coffee {
		this.grindBeans(shots);
		this.preheatMachine();
		return this.brewCoffee(shots);
	}

}

console.log('====================================================');
const maker1: ProCoffeeMachine = CoffeMaker.makeMachine(100);
const maker2: CoffeeMachine = CoffeMaker.makeMachine(300);

class AmatuerBarista {
	constructor(private machine: CoffeeMachine) {};
	makeCoffee(shots) {
		const coffee = this.machine.makeCoffee(shots);
		console.log('coffee', coffee);
	}
}
class ProBarista {
	constructor(private machine: ProCoffeeMachine) {}
	makeCoffee(shots) {
		const coffee = this.machine.makeCoffee(shots);
		console.log('coffee', coffee);
		this.machine.fillBeans(1000);
		this.machine.clean();
		console.log('this.machine', this.machine);
	}
}

const amatuer = new AmatuerBarista(maker2);
amatuer.makeCoffee(2);
console.log('===================', );
const pro = new ProBarista(maker1);
pro.makeCoffee(4);
console.log('maker1', maker1);
