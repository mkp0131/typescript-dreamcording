class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	set age(val) {
		return this._age = val < 0 ? 0 : val;
	}

	get age() {
		return this._age;
	}
}
	
// const mkp = new Person('mkp', -200);
// console.log('mkp', mkp);
// console.log('age', mkp.age);

const obj1 = {
	a: 111,
	b: 222,
	c: 333
}

console.log('obj1', obj1);


const obj2 = {
	...obj1,
	a: 999
}

console.log('obj2', obj2);