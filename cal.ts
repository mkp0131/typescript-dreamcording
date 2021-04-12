
type Mode = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(mode: Mode, num1: number, num2: number): number {
	switch (mode) {
		case 'add':
			return num1 + num2;
			break;
		case 'substract':
			return num1 - num2;
			break;
		case 'multiply':
			return num1 * num2;
			break;
		case 'divide':
			return num1 / num2;
			break;
		case 'remainder':
			return num1 % num2;
			break;
	
		default:
			throw new Error('Unkown Mode');
			break;
	}
}





const re1 = calculate('add', 1, 3) // 4
const re2 = calculate('substract', 3, 1) // 2
const re3 = calculate('multiply', 4, 2) // 8
const re4 = calculate('divide', 4, 2) // 2
const re5 = calculate('remainder', 5, 2) // 1
const re6 = calculate('ttt', 5, 2) // 1


console.log('re1', re1);
console.log('re2', re2);
console.log('re3', re3);
console.log('re4', re4);
console.log('re5', re5);