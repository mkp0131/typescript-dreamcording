{
    var num = 1;
    var str = 'a';
    var boal = true;
    // undefined or null 을 사용할때는 단독적으로 사용하지 않는다.
    // => 단독으로 사용될 경우에는 undefined(null) 밖에 담지 못하게 때문에,
    var age = void 0;
    age = undefined;
    var name_1;
    name_1 = null;
    // function (함수) 타입지정
    var find = function () {
        return 1;
    };
    // unknown 모든 type 할당가능(가능한 쓰면 안됨)
    var notSure = 0;
    notSure = 'dkdkfjqn';
    // any 모든 type 할당가능(가능한 쓰면 안됨)
    var anything = 0;
    anything = 'hello';
    // void (함수에서 어떤 값도 리턴하지 않을때)
    // => 변수에 할당할 경우 undefined 밖에 사용못함(즉 변수사용 X)
    function print32() {
        return;
    }
    var unusable = undefined;
    // never (절대 다른 것을 리턴 할 수 없다.)
    function throwError(message) {
        throw new Error(message);
    }
    // object (가능하면 쓰지 않는 것이 좋다.)
    var obj = void 0;
    function acceptSomeObject(obj) {
        console.log(obj);
    }
    acceptSomeObject({ name: 'mkp' });
}
// 함수타입이용하기
{
    function add(num1, num2) {
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
    function printName(firstName, lastName) {
        console.log('firstName', firstName);
        console.log('lastName', lastName);
    }
    printName('asdasd');
    // default parameter(파라미터 기본값 설정)
    function printMsg(msg) {
        if (msg === void 0) { msg = 'HEEEEELLLO'; }
        console.log('msg', msg);
    }
    printMsg();
}
