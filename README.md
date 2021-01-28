# typescript - dreamcording

## typescript 설치

1. typescript 글로벌 설치

```
npm install -g typescript
```

2. tsc 명령어를 이용하여 .js 파일로 컴파일

```
tsc main.ts
```

3. 터미널에서 컴파일과 실행까지 한번에 처리 ts-node 설치

```
npm install -g ts-node
ts-node script.ts
```

4. tsc watch 모드 -w

```
tsc main.ts -w
```

> 프로그래밍 3가지 순서
> input(db) => operation => output

## typescript 타입 (Type)
1. 기본타입
```
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
```

> null, undefined 차이
> null: 비어있는게 확정적인 값, undefined: 말그대로 모르는 값


## typescript class
1. static 클래스레벨에 저장하는 변수
2. private 외부에서 접근 불가능한 멤버 (명시 하지 않는다면 모두 public 으로 지정되어있다.)