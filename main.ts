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
	function print():void {
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

