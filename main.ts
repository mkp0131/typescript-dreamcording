{
  const num:number = 1;
  const str:string = 'a';
  const boal:boolean = true;
  // undefined or null 을 사용할때는 단독적으로 사용하지 않는다.
  // => 단독으로 사용될 경우에는 undefined(null) 밖에 담지 못하게 때문에,
  let age:number|undefined;
  age = undefined;
  let name:string|null;
  name = null;
  // function (함수) 타입지정
  const find = function():number {
    return 1;
  };
	// unknown 모든 type 할당가능(가능한 쓰면 안됨)
	let notSure:unknown = 0;
	notSure = 'dkdkfjqn';
	// any 모든 type 할당가능(가능한 쓰면 안됨)
	let anything: any = 0;
	anything = 'hello';
	// void (함수에서 어떤 값도 리턴하지 않을때)
	// => 변수에 할당할 경우 undefined 밖에 사용못함(즉 변수사용 X)
	function print32():void {
		return;
	}
	let unusable: void = undefined;
	// never (절대 다른 것을 리턴 할 수 없다.)
	function throwError(message: string): never {
		throw new Error(message);
	}
	// object (가능하면 쓰지 않는 것이 좋다.)
	let obj: object;
	function acceptSomeObject(obj: object) {
		console.log(obj);
	}
	acceptSomeObject({name: 'mkp'});
}


// 함수타입이용하기
{
	function add(num1:number, num2:number):number {
		return num1 + num2;
	}
	// promise 타입
	// function fetchNum(id: string):Promise<number> {
	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	})
	// }
	// optional parameter 
	// => 파라미터에 ? 를 붙어줌으로써 꼭 필요한 파라미터는 아라고 명시
	function printName(firstName: string, lastName?: string) {
		console.log('firstName', firstName);
		console.log('lastName', lastName);
	}
	printName('asdasd');

	// default parameter(파라미터 기본값 설정)
	function printMsg(msg: string = 'HEEEEELLLO') {
		console.log('msg', msg);
	}
	printMsg();
	
	// Rest parameter
	function addNum(...nums: number[]):number {
		let total:number = 0;
		for (let i = 0; i < nums.length; i++) {
			const num:number = nums[i];
			total += num;
		}
		return total;
	}
	console.log(addNum(1,2,3,4));
}

{
	// Array
	// string[] 을 더 많이 사용한다. readonly를 사용할 수 있음.
	const fruits: string[] = ['apple', 'banana'];
	const scores: Array<number> = [1, 2, 3];
	function printArr(fruits: readonly string[]) {
		// fruits.push('d'); // 수정 불가
	}

	// Tuple => 사용을 권장하지 않는다.(가독성이 좋지 않아서)
	// => interface, type alias, class 로 대체해서 사용하는 것이 좋다.
	let student: [string, number];
	student = ['name', 123];
	student[0]; // name
	student[1]; // 123
}

{
	// aliases (커스텀 타입 생성)
	type Text = string;
	const name:Text = 'df';
	type Student = {
		name: string,
		age: number,
	}
	const kan:Student = {
		name: 'asdas',
		age: 23,
	}
	// String Literal Types (지정한 문자열밖에 값으로 할당할 수 있다.)
	type Name = 'name';
	let mkpName:Name;
	mkpName = 'name';
}

{
	// Union Types: OR
	type Direction = 'left'|'right'|'up'|'down';
	function move(direction: Direction) {
		console.log('direction', direction);
	}
	move('down');
	type TileSize = 6|9|15;
	const tile: TileSize = 15;

	type SuccessSate = {
		result: 'success',
		response: {
			body: string;
		}
	}
	type FailState = {
		result: 'fail',
		reason: string;
	}
	type LoginState = SuccessSate|FailState
	function login(id:string, password: string):Promise<LoginState> {
		return new Promise((res, rej) => {
			res(
				{
					result: 'success',
					response: {
						body: 'logged in!'
					}
				}
			)
		})
	}

	// printLoginState(state)
	// success -> 💫 body -> 💥 reason
	function printLoginState(state:LoginState) {
		if(state.result == 'success') {
			console.log(state.response.body);
		}
		else {
			console.log(state.reason);
		}
	}
}

{
	// Intersection Types: & (여러가지 Type 동시에 받기)
	type Student = {
		name: string,
		score: number,
	}
	type Worker = {
		empolyeeId: number,
		work: () => void,
	}
	// 여러가지 type 을 동시에 맏을경우 모든 요소가 다 있어야된다.
	function internWork(person: Student & Worker) {
		console.log(person.name, person.empolyeeId, person.work());
	}
	internWork({
		name: 'dfdf',
		score: 12,
		empolyeeId: 23,
		work: () => {},
	})
}