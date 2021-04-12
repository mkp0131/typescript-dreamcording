type Coffee = {
	shots: number;
	hasMilk: boolean;
}

let beansGram: number = 0;
const BEANS_GRAM_PER_SHOT = 20;

function makeCoffee(shots: number): Coffee {
	const useBeansGram = shots * BEANS_GRAM_PER_SHOT;
	if(useBeansGram > beansGram) {
		throw new Error('Not enough beans!');
	}
	beansGram -= useBeansGram;
	return {
		shots,
		hasMilk: false
	}
}

beansGram = 100;
const re1 = makeCoffee(2);

console.log('re1', re1);
console.log('beansGram', beansGram);
