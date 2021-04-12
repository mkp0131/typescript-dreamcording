class User {
	private first_name: string;
	private last_name: string;
	private _age: number;

	constructor(first_name: string, last_name: string, age: number) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.age = age;
	}

	get fullname(): string {
		return this.first_name + ' ' + this.last_name;
	}

	set age(val: number) {
		if(val < 0) throw new Error('Shoude be greater than 0');
		this._age = val;
	}

}

const mkp = new User('민규', '박', 999);
console.log('mkp', mkp);
mkp.age = 546; 
console.log('mkp', mkp);
// mkp.age = 40000;
// console.log('mkp', mkp);


