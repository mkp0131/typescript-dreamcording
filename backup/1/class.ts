class Person {
	private firstName:string;
	private lastName:string;
	private internalAge:number = 0;

	get fullName():string {
		return this.firstName + this.lastName;
	}
	get age() {
		return this.internalAge;
	}
	set age(num: number) {
		this.internalAge = num;
	}
	constructor(firstName:string, lastName:string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

}


const ppp = new Person('m', 'k');
console.log('ppp', ppp.age);
ppp.age = 100;
console.log('ppp', ppp.age);