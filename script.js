//complete this code
class Person {
	constructor(name, age){
		this.name=name;
		this.age=age;
	}
	//Getter for Name
	get getName(){
		return this.name;
	}
	//Setter for Age
	set setAge(Newage){
		 this.age = Newage;
	}
	get getAge(){
		return this.age;
	}
}


class Student extends Person {
	super
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	super
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
