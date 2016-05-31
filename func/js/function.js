//JS函数式编程指南

//一个简单的例子 (海鸥程序， 鸟群合并则变成了一个更大的鸟群， 这个程序并不是面向对象的良好实践，它只是强调当前这种变量赋值方式的一些弊端)
/*
var Flock = function(n) {
  this.seagulls = n;
};

Flock.prototype.conjoin = function(other) {
  this.seagulls += other.seagulls;
  return this;
};

Flock.prototype.breed = function(other) {
  this.seagulls = this.seagulls * other.seagulls;
  return this;
};

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

var result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
//=> 32
//console.log(result);	

//另外一种更函数式的写法
var conJoin = function(flock_x, flock_y) {
	return flock_x + flock_y;
}

var breed = function( flock_x, flock_y ) {
	return flock_x * flock_y;
}

var add = function(x, y) { return x + y };
var multiply = function(x, y) { return x * y };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var rst = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));
//console.log(rst);
*/


//第二章: 一等公民的函数
//用一个函数把另外一个函数包起来， 目的仅仅是延迟执行， 真的是非常糟糕的编程习惯



//3. 纯函数
 // 纯函数是这样一种函数， 即相同的输入， 永远会得到相同的输出；而且没有任何可观察的副作用；
 // 比如slice和splice， 这两个函数的作用并无二致， 但是注意， 他们各自的方式却大不相同， slice符合纯函数的定义， 因为对相同的输入他保证能返回相同的输出， 而splice 却会嚼烂调用他的数组， 热后吐出来， 这样产生的可观察的副作用，就是这个数组永久的改变了；
 
 //不纯
 /*
 var minMun = 21;
 var checkAge = function(age) {
	 return age >= minMun;
 };

 //纯的
var checkAge = function(age) {
	var minMun = 21; 
	return age > minMun;
}
*/

// 不纯的版本中， checkAge的结果取决余minmun这个可变变量的值； 因为引入了外部的环境， 从而增加了认知负荷；
//使用纯函数的形式， 函数就能做到自给自足， 我们也可以让minmun成为不可变的对象； 这样能保留纯粹性；


//函数是不通过数组之间的特殊关系，每一个输入值返回且只返回一个输出值；
// 函数只有两个数值之间的关系， 输入，输出
// 纯函数就是数学上的函数， 而且是函数式编程的全部
// 可以通过延迟执行的方式让一个函数变纯


//纯函数的好处
// 可缓存性
// 可移植性， 自文档化
// 可测试性
// 合理性
// 并行代码




// 柯里化(curry)
// 不可缺少的curry(概念：只传递给函数一部分参数来调用它， 让他返回一个函数去处理剩下的参数)
var add = function(x) {
	return function (y) {
		return x + y;
	}
}

var increment = add(1);
var addTen = add(10);

//console.log(increment(2));  // 3
//console.log(addTen(2)); // 12

//定义了一个add函数， 他接收一个参数返回一个新的函数， 调用add之后， 返回的函数就通过闭包的放肆记住了add的第一个参数， 一次性的调用他实在繁琐， 好在我们可以使用一个特殊的curry帮助函数使这类函数的定义和调用更加容易；

/*
	var curry = require("lodash").curry;

	var match = curry(function(what, str) {
		return str.match(what);
	});

	//上面的代码中遵循的是一种简单，同时也非常重要的模式， 即策略性的把要操作的数据，放到最后一个参数里；
	match(/\s+/g, "hello world");

	//这里表明了一种预加载函数的能力， 通过传递一到两个参数调用函数，就你能得到一个记住了这些参数的新函数；

*/


//代码组合(compose)
var compose = function(f, g) {
	return function(x) {
		return f(g(x));
	}
}











