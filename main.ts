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
  
}

