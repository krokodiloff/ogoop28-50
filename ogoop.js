//28.1
// class User {
// }
// class Employee {
// }
// class Employee extends User {
// }

// 29.1
// class User {
// 	setName(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// }
// class Employee  extends User {
// }
// let employee  = new Employee ;
// employee.setName(50000);
// let name = employee.getName();
// console.log(name);

// 30.1.2
// class Employee extends User {
// 	setEmployee(employee) {
// 		this.employee = employee;
// 	}
// 	getEmployeer() {
// 		return this.employee;
// 	}
// }
// let employee  = new Employee ;
// employee.setZp(50000);
// employee.setName('john');
// let zp = employee.getZp();
// let name = employee.getName();
// console.log(name, zp);

// 31.1.2
// class User {
// 	setAge(age) {
// 		this.age = age;
// 	}
// 	getSAge() {
// 		return this.age;
// 	}
// }
// class Employee   {
// 	setAge(age) {
// 		if (age> 18 && age<65) {
// 			this.age = age;
// 		} else {
// 			throw new Error('student name error');
// 		}
// 	}
// }
// let student = new Employee ;
// student.setAge(50);

// 32.1
// class User {
//     setAge(age) {
//         if (age >= 0) {
//             this.age = age;
//         } else {
//             throw new Error('need age more 0');
//         }
//     }
// }
// class Employee extends User{
//     setAge(age) {
//         if (age <= 120) {
            
//         } else {
//             throw new Error('need age less 120');
//         }
//     }
// }

// 33.1.2.3
// class User {
// 	constructor(age, salary) {
// 		this.age = age;
// 		this.salary = salary;
// 	}	
// 	getAge() {
// 		return this.age;
// 	}
// 	getSalary() {
// 		return this.salary;
// 	}
// }
// class Employee  extends User {
// 	constructor(age, salary) {
// 		super(age, salary);	
// 	}
// }

// 34.1
// class User {
// 	setName(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.#capeFirst(this.name);
// 	}
// 	#capeFirst(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// class Employee  extends User {
// 	setSurn(surn) {
// 		this.surn = surn;
// 	}
// 	getSurn() {
// 		return this.#capeFirst(this.surn); // будет ошибка
// 	}
// }

// 35.1.2.3
// class User {
//     #name;
//     #surn;
//     setName(name) {
//         this.#name = name;
//     }
//     getName() {
//         return this.#name;
//     }
//     setSurn(surn) {
//         this.#surn = surn;
//     }
//     getSurn() {
//         return this.#surn;
//     }
// }
// class Employee extends User {

// // getFull() {
// //     return this.#name + ' ' + this.#surn;
// // }
// }
// let student = new Employee ;
// let student1 = new Employee ;
// student.setName('john');
// student1.setSurn('john');
// let name = student.getName();
// console.log(name);
// let surname = student.getName();
// console.log(surname);

// 36.1
// class User {
//     #name;   
//     setName(name) {
//         this.#name = name;
//     }
//     getName() {
//         return this.#name;
//     }
// }
// class Employee extends User {
//     setName(name) {
//         if (name.length > 0) {
//             this.setName = name;
//         }
//     }
// }

// 37.1
// class User {
//     setName(name) {
//         if (this._notEmpty(name)) {
//             this.name = name;
//         }
//     }
//     getName() {
//         return this.name;
//     } 
//     _notEmpty(str) {
//         return str.length > 0;
//     }
// }
// class Employee extends User {
//     setSurn(surn) {
//         if (this._notEmpty(surn)) {
//             this.surn = surn;
//         }
//     }
//     getSurn() {
//         return this._notEmpty(this.surn);
//     }
// }

// 38.1
// class User {   
//     setName(name) {
//         this._name = name;
//     }
//     getName() {
//         return this._name;
//     }
// }
// class Employee extends User {
//     setName(name) {
//         if (name.length > 0) {
//             this._name = name;
//         }
//     }
// }

// 39.1.2.3.4
// class User {
// 	setName(name) {
// 		this._name = name;
// 	}
// 	getName() {
// 		return this._name;
// 	}
// }
// class Employee extends User {
// 	setSurn(surn) {
// 		this.surn = surn;
// 	}
// 	getSurn() {
// 		return this.surn;
// 	}
// }
// class Programmer extends Employee {
// 	setSkill(skill) {
// 		this._skill = skill;
// 	}
// 	getSkill() {
// 		return this._skill;
// 	}
// }
// class Designer extends Employee {
// 	setSkill(skill) {
// 		this._skill = skill;
// 	}
// 	getSkill() {
// 		return this._skill;
// 	}
// }

// 40.1
// let elem = document.querySelector('div');
// console.dir(elem);

// 40.2
// let elem = document.querySelector('input');
// console.dir(elem);

// 40.3
// let elems = document.querySelectorAll('div');
// console.dir(elems);

// 40.4
// let elem = document.querySelector('div');
// let elems = elem.children;
// console.dir(elems);

// 41.1
// class Employee {
// 	constructor(name, salary, coeffs) {
// 		this.name = name;
// 		this.salary = salary;
// 		this.coeffs = coeffs;
// 	}
// 	getTotal() {
// 		return this.coeffs.reduce((res, coeff) => {
// 			return res + this.salary * coeff;
// 		}, 0);
// 	}
// }
// let employee = new Employee('john', 
// 	1000, [1.1, 1.2, 1.3]); 
// let total = employee.getTotal();
// console.log(total);

// 42.1
// class Employee {
//     #age;    
//     constructor(age) {
//         this.#age = age;
//     }
//     getName() {
//         return this.#age;
//     }
// }
// let user = new Employee('121');
// console.log(user.getName);

// 44.1
// class Employee {
// 	constructor(salary) {
// 		this.salary = salary;
// 	}
// 	show() {
// 		return this.salary + '$';
// 	}
// }

// 46.1.2
// import User from './User.js';
// let user = new User('john');

// 47.1.2
// import Employee from './User.js';

// 48.1
// class Employee {
// 	get name() {
// 		console.log('get');
// 	}
// 	set name() {
// 		console.log('set');
// 	}
// }
// let name = user.name;
// user.name = 'john';

// 49.1
// class Employee {
// 	#name;	
// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	get name() {
// 		return this.#name;
// 	}
// }
// let user = new Employee('john');
// let name = user.name;
// console.log(name);
// user.name = 'eric';

// 50.1.2
// class Employee {
// 	#name;
	
// 	set name(name) {
// 		if (name.length > 0) {
// 			this.#name = name;
// 		} else {
// 			throw new Error('name is incorrect');
// 		}
// 	}
// 	get name() {
// 		return this.#name;
// 	}
// }
// let user = new Employee;
// user.name = 'john';
// user.name = '';

