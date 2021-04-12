type CalculateMode = 'add'|'subtract'|'multiply'|'divide'|'remainder';

function calculate(mode:CalculateMode, num1:number, num2:number):number {
  let result = 0;
  if(mode == 'add') {
    result = num1 + num2;
  }
  else if (mode == 'subtract') {
    result = num1 - num2;
  }
  else if (mode == 'multiply') {
    result = num1 * num2;
  }
  else if (mode == 'divide') {
    result = num1 / num2;
  }
  else if (mode == 'remainder') {
    result = num1 % num2;
  } else {
    throw Error('알 수 없는 mode 입니다.');
  }
  return result;
}

const add = calculate('add', 1, 2);
const subtract = calculate('subtract', 1, 2);




console.log('add', add);
console.log('subtract', subtract);