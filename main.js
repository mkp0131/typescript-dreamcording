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
    function find() {
        return 1;
    }
    console.log(find());
}
