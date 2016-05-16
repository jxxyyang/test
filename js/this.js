//Javascript之this详解
/*
  Javascript支持函数式编程，闭包，基于原型的继承
  Javascript中的this含义要丰富的多， 可以是全局对象，当前对象或者任意对象， 它完全取决于函数的调用方式；
  Javascript中函数的调用有以下几种方式：作为对象方法调用，作为函数调用，作为结构函数调用， 使用apply或call调用；
*/

//全局的this,  全局的this一般指向全局对象， 浏览器中的全局对象就是  window
/*
	console.log(this.document === document);  //true
	console.log(this === window) ; //true

	this.a = 91;
	console.log(window.a); // 91
*/

//一般函数的this
/*	function f1() {
		return this;
	}
	console.log(f1() === window);  //ture;
	//一般的函数的this函数的this也指向window， 在nodeJS中指向为 global object
*/

/*
	function f2() {
		'use strict'; //使用严格模式
		return this;
	}

	console.log(f2() === undefined);  //true
	//严格模式中， 函数的this指向为undefined, 因为严格模式禁止this关键字指向全局对象；
	
*/

//作为对象方法的函数的this
/*	
	var o = {
		prop: 37,
		f: function() {
			return this.prop;
		}
	};
	
	console.log(o.f()); // 37    this指向这个对象 o
*/

/*
	var o = {
		prop: 37
	}
	
	function xx() {
		return this.prop;
	}
	
	o.f = xx; // 临时添加了方法属性，这样这个方法中的this也是指向对象o
	
	console.log(o.f());  //37;
	//console.log(o);
*/


//作为函数调用
//函数可以直接调用， 此时this绑定到全局对象， 在浏览器中， 全局对象为window；
/*
	function makeNoSense(x) {
		this.x = x;
	}

	makeNoSense(5); 

	console.log(x); //5  //x已经成为一个值为5的全局变量
*/

//内部函数

/*
	var point = {
		x: 0,
		y: 0,
		moveTo: function(x, y) { 
			var moveX = function(x) {
				this.x = x; //this ?
			}
			var moveY = function(y) {
				this.y = y;
			}
			
			moveX(x);
			moveY(y);
		}
	}

	point.moveTo(1, 1);
	console.log(point.x, "p"); // 0
	console.log(point.y, "p"); //0
	console.log(x); //1
	console.log(y); //1

	//这个属于Javascript的设计缺陷， 正确的方式是内部函数的this应该绑定到其外层的函数对应的对象上； 可以用变量代替的方法， 约定俗定；
*/

// 对象原型链上的this
/*
	var o = {
		f: function() {
			return this.a + this.b;
		}
	};

	var p = Object.create(o);
	p.a = 1;
	p.b = 2;
	console.log(p.f());  //3
	// p是基于原型o创建出来的对象
	//p的原型是o， 调用f()的时候调用了o上方法f, this是指向当前对象的， 即对象p；	
*/


//get/set方法与this
/*
	function modulus() {
		return Math.sqrt(this.re * this.re * this.im * this.im);
	}

	var o = {
		re: 1,
		im: -1,
		get phase() {
			return Math.atan2(this.im, this.re);
		}
	};

	Object.defineProperty(o, 'modulus', {
		get: modulus,
		enumerable: true,
		configurable: true
	});

	console.log(o.phase, o.modulus); //-0.7853981633974483 1
*/

//结构器中的this
/*
	function myClass() {
		this.a = 25;
	}
	
	var o = new myClass();
	console.log(o.a); //25
	//new myClass()的时候，this会指向一个空对象， 这个对象的原型会指向myClass.prototype; myClass()没有返回值或者返回为基本类型是， 默认将this返回；
*/

/*
	function c2() {
		this.a = 26;
		return {
			a: 24
		}
	}

	var o = new c2();
	console.log(o.a); //24     返回了对象啊，
*/

//bind方法与this
/*
	function f() {
		return this.a;
	}
	
	var g = f.bind({a:"test"});
	
	console.log(g());  //test
	
	var o = {
		a: 37,
		f: f,
		g: g
	};
	
	console.log(o.f(), o.g()); // 37, "test"
*/

//call/apply方法与this
/*
	function add (c, d) {
		return this.a + this.b + c + d ;
	}

	var o = {
		a: 1,
		b: 3
	}

	var add1 = add.call(o, 5, 7);
	console.log(add1); //16

	var add2 = add.apply(o, [10, 20]); //34
	console.log(add2);

	function bar() {
		console.log(Object.prototype.toString.call(this));
	}

	bar.call(7);//[object Number]
	bar.call("7");//[object String]
	bar.call(); //[object glabal]
	bar.call(true);//[object Boolean]
*/

//Javascript中的eval方法
//eval方法可以将字符串转换为javascript代码，调用者的执行环境中的this被eval继承下来了

//ES6箭头函数中的this


//来源： http://www.jeffjade.com/2015/08/03/2015-08-03-javascript-this/






