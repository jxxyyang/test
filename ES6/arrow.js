'use strict'

//箭头函数

// 1. 普通函数
var x = function(a) {
	return a;
}

// =>

var x = a => {
	return a;
}

x();


//2. 匿名函数
/*
	function() {
		return 1;
	}
*/

// =>
/*
	() => { return 1; }
	() => 1

//---

function(a) { return a * 2 }
// =>
(a) => { return a * 2 }
(a) => a * 2
a => a * 2

function (a, b) { return a + b; }

(a, b) => { return a + b; }
(a, b) => a + b

// ---
function() { return arguments[0]; }
(...args) => args[0];
*/


// const(常量)

const emptyObject = () => ({});
emptyObject(); //返回一个空对象



// ---

/*
	function User () {
		this.name = 'price';
		setTimeout(function(){
			console.log("### executed ###", this.name);
		}, 3000);
	}

	var person = new User();
	console.log(person);
*/

function User () {
		this.name = 'price';
		setTimeout(() => {console.log("### executed ###", this.name);}, 3000);
	}

	var person = new User();
	console.log(person);





















