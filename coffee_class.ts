interface Coffee {
	shots: number;
	hasMilk: boolean;
}


class CoffeMaker {

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

	makeCoffee(shots: number):Coffee {
		const useBeansGram = shots * CoffeMaker.BEANS_GRAM_PER_SHOT;
		if(useBeansGram > this.beansGram) {
			throw new Error('Not enough beans!');
		}
		this.beansGram -= useBeansGram;
		return {
			shots,
			hasMilk: false
		}
	}

}

// const coffeMaker1 = new CoffeMaker(50);
// console.log('coffeMaker1', coffeMaker1);
// const re1 = coffeMaker1.makeCoffee(2);
// console.log('re1', re1);
// console.log('coffeMaker1', coffeMaker1);

// console.log('====================', );

const machine1 = CoffeMaker.makeMachine(100);
console.log('machine1', machine1);
const re2 = machine1.makeCoffee(3);
console.log('re2', re2);
console.log('machine1', machine1);
machine1.fillBeans(100)
console.log('machine1', machine1);

console.log('====================', );

// console.log('#', CoffeMaker.beansGram);