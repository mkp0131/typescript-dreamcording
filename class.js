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
	
const mkp = new Person('mkp', -200);
console.log('mkp', mkp);
console.log('age', mkp.age);