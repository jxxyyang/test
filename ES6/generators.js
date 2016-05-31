
//generator 生成器函数

/*
	let createIterator = function *(items) {
		for(let i = 0; i < items.length; i++) {
			yield items[i];
			console.log("after yield::", i);
		}
	}

	let iterator = createIterator([1,2,3]);
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
*/

/*
*/  

/*
	function foo(x) {
		console.log("x:" + x);
	}

	function *bar() {
		yield;
		foo( yield );
	}
*/

/*
function* quips(name) {
	yield "hello " + name + "!";
	yield "i hope xxx";
	if(name.toLowerCase().startsWith("x")) {
		yield "it's cool x " + name; 
	}
	
	yield "see you later";
}

var iter = quips("xinyu"); 
//[object Generator]
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next()); 
console.log(iter.next());  
*/

//调用生成器的时候， 它还没有开始运行， 它返回了一个暂停的生成器， 然后把生成器对象当做一个函数调用， 但是立即冻结了， 具体它在运行生成器函数第一行代码之前就已经冻结了。

//每次调用生成器对象的 .next() 方法， 函数就会将自身解冻后运行直到遇到下一个yield表达式；

// 每当生成器执行 yield 操作的时候，它的栈结构内的本地变量，参数， 临时变量以及生成器内部的执行位置都会移除栈， 但是生成器对象本身维持了一个栈结构的引用或者拷贝， 所以之后的.next()调用可以重新激活生成器继续执行；

//生成器不是线程，支持线程的语言中，多段不同的代码可以在同一时候运行， 这会导致静态条件，不确定性以及不错的性能提升。生成器不同，当生成器运行的时候，它会在叫做caller的同一个线程中运行， 执行的顺序有序，确定的， 并且永远不会产生并发；

class RangeIterator {
	constructor(start, stop) {
		this.value = start;
		this.stop = stop;
	}
	
	[Symbol.iterator]() {  //迭代器的接口
		return this;
	}
	
	next () { 
		var value = this.value;
		if(value < this.stop) {
			this.value++;
			return {
				done: false,
				value: value
			}
		}else {
			return {
				done: true,
				value: undefined
			}
		}
	}
}

//返回一个新的迭代器， 从start 到  stop
function range(start, stop) {
	return new RangeIterator(start, stop);
}

var iter = range(0, 3);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());









