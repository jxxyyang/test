//class
'use strict'
/*
	class Person {
		constructor(name) {
			this.name = name;
		}
		getName() {
			return this.name;
		}
		setName(name) {
			this.name = name;
		} 
		static xx() {
			console.log("oo");
		}
	}

	Person.xx();

	var person = new Person("yj");
	console.log(person.getName());
	person.setName("Yjian");
	console.log(person.getName());
*/


//类继承
/*
	class Shape {
		constructor(id, x, y) {
			this.id = id;
			this.x = x;
			this.y = y;
		}
		func() {
			console.log(this.id, this.x, this.y);
		}
	}

	class Rectangle extends Shape {
		constructor (id, x, y, width, height) {
			super(id, x, y);
			this.width = width;
			this.height = height;
			super.func();
		}
	}

	var obj = new Rectangle(1,2,3,4,5); 
	obj.func(4,5,6);
*/

class Animal {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}
	//toString是原型对象上的属性
	toString() {
		console.log("name:" + this.name + ", color: " + this.color);
	}
}

var animal = new Animal('dog', 'white');
console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); //false
console.log(animal.__proto__.hasOwnProperty('toString')); //true

class Cat extends Animal{
	constructor (action) {
		//子类必须要在constructor中指定super方法， 否则在新建实例的时候会报错，
		//如果没有置顶constructor, 默认带super方法constructor将会被添加
		super('cat', 'white');
		this.action = action;
	} 
	toString() {
		console.log(super.toString());
	}
} 

console.log(Cat.__proto__ === Animal, "xxx"); //true
/*
   //原型链完成构造函数继承的实质如下
	class Cat extends Animal{
		constructro(){
			return Animal.__proto__.call(this);
		}
	}
*/
console.log(Cat.prototype === Animal, "ooo");  //false
// Cat.prototype.__proto__ === Animal.prototype

var cat = new Cat("Tom");
cat.toString(); //name:cat, color: white

console.log(cat instanceof Cat); //true
console.log(cat instanceof Animal); //true


//类的prototype属性和 __proto__属性
//了解到一个实例化对象会有一个__proto__指向构造函数的protoype， 在class中，同时具有__proto__和prototype两个属性，存在两条继承链
//子类的__proto__属性，表示构造函数的继承，总是指向父类的prototype属性
//子类的prototype的__proto__属性表示方法的继承， 总是指向父类的prototype属性

class A extends Object {};
console.log(A.__proto__ === Object , "object"); //true
console.log(A.prototype.__proto__ === Object.prototype, "obj proto"); //true




// 函数是一种特殊的对象，所有函数都是Function的实例
class Cat2 {}
console.log(Cat2.__proto__ === Function.prototype, "func"); //true
console.log(Cat2.prototype.__proto__ === Object.prototype, "obj pro"); //true















