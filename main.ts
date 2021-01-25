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
