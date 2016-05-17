//setTimeout
//setTimeout函数用来指定某个函数段代码， 在多少毫秒之后执行， 它返回一个整数， 表示定时器的编号看， 以后可以用来取消这个定时器；

/*
	var timeId = setTimeout(func|code, delay);
	// func|code是将要推迟执行的函数名或者一段代码
*/
/*
	console.log(1);
	setTimeout('console.log(2)', 1000);
	console.log(3);
*/
// -> 1 3 2
// 推迟执行的代码必须以字符串的形式， 放入setTimeout, 因为内部使用的eval函数， 将字符串转为代码；如果推迟执行的是函数， 则可以直接讲函数名放入setTimeout， eval函数有安全顾虑， 还有就是为了方便于Javascript引擎优化代码，setTimeout方法一般总是采用函数名的形式；
/*
	function func() {
		console.log(2);
	}
	setTimeout(func, 1000);
	//或者
	setTimeout(function(){console.log(2)}, 1000);
*/

//setTimeout传参数
//除了前两个参数， setTimeout还允许添加更多的参数， 他们将被传入推迟执行的函数（回调函数）

/*
	setTimeout(function(a, b) {console.log(a+b)}, 1000, 1, 2);
*/

//IE9.0 一下版本，只允许两个参数， 不支持更多的参数， 可以在匿名函数中， 让回调函数带参数进行，再把匿名函数输入setTimeout函数

/*
	setTimeout(function(){MyFunc("one", "two", "three");}, 1000);
*/

//也可以使用bind或者apply方法来解决
/*
	setTimeout(function(arg1){console.log(arg1)}.bind(undefined, 10), 1000);
	//bind方法第一个参数是underfined， 表示将原函数的this绑定全局作用域，第二个是要传入的参数， 它运行后会返回一个新的函数， 该函数不带参数；
*/


//setTimeout 注意点
//setTimeout() 中回调中的this
//如果setTimeout推迟执行的回调函数是某个函数的某个方法， 那么该方法中的this关键字将指向全局环境， 而不是定义时所在的那个对象；

/*
	var x = 1;
	var o = {
		x: 2,
		y: function() {
			console.log(this.x);
		}
	}

	setTimeout(o.y, 1000); // 1   this -> window
*/

/*
	function User(login) {
		this.login = login;
		this.sayHi = function() {
			console.log(this.login);
		}
	}

	var user = new User("yj");
	//setTimeout(user.sayHi, 1000);  //undefined    user.sayHi执行时， 它是在全局对象中执行了
	setTimeout(function(){
		user.sayHi();
	}, 1000);
*/

//setTimeout运行机制
//setTimeout指定的代码， 必须要等到本次执行的所有代码都执行完才会执行


// setTimeout(func, 0)
// setTimeout的真正作用是在任务队列的现有事件的后面在添加一个事件， 规定在指定时间执行某段代码
// 让func在现有的任务一结束就立即执行， 也就是说， setTimeout的作用是，尽可能早的执行指定的任务；
/*
	setTimeout(function() {
		console.log("Time out")
	}, 0);
	function a(x) {
		console.log("a() 开始运行");
		b(x);
		console.log("a() 结束运行");
	}
	function b(x) {
		console.log("b() 开始运行");
		console.log("传入的值为：" + x );
		console.log("b()结束运行");
	}


	console.log("当前任务开始");
	a(4);
	console.log("当前任务结束");
*/

/*
当前任务开始
timer.js:87 a() 开始运行
timer.js:92 b() 开始运行
timer.js:93 传入的值为：4
timer.js:94 b()结束运行
timer.js:89 a() 结束运行
timer.js:99 当前任务结束
timer.js:84 Time out
*/

//说明setTimeout(func, 0) 必须要等到当前脚本的所有同步任务结束才会执行；
// 0毫秒实际上达不到， 根据html5标准， setTimeout推迟执行时间最少是4毫秒， 如果小于这个值， 会被自动增加到4， 这是为了防止多个setTimeout(func, 0) 语句连续执行， 造成性能问题
//另外一方面， 浏览器内部使用32位带符号的整数， 来存储退市执行的世间， 这意味着setTimeout最多只能推迟执行217483647毫秒（24.8天）, 超过这个时间会发出溢出，导致回调函数将在当前任务队列结束立即执行，等同于setTimeout(func, 0);


//setTimeout(func, 0) 应用
//调整事件的发生顺序
/*
	var input = document.getElementsByTagName('input[type=button]')[0]; 
	input.onclick = function a(){
		setTimeout(function b(){ input.value += value }, 0)
	};

	document.body.onclick = function c() {
		input.value += 'body';
	};
*/

//分割耗时任务
// 由于setTimeout实际上意味着， 将任何放在浏览器最早可得的空闲时段执行， 所以那些计算量大，耗时长的任务，常常会放到几个小部分， 分别放到setTimeout(func, 0)里面执行，这样即使在复杂程序没有处理完时，我们操作页面， 也是得到即使响应的，

/*
	var div = document.getElementByTagName('div')[0];
	//方法一
	for(var i = 0xA00000; i<0xFFFFFF; i++) {
		div.style.backgroundColor = '#' + i.toString(16);
	}

	//方法二
	var time,
		i = 0xA00000;

	function func () {
		timer = setTimeout(func, 0);
		div.style.background = "#" + i.toString(16);
		if(i++ == 0xFFFFFF) {
			clearInterval(timer);
		}
	}

	timer = setTimeout(func, 0);

*/

//clearTimeout
//setTimeout和setInterval函数都返回一个计数器编号的整数值， 将这个整数传入clearTimeout和clearInterval函数，就可以取消对应的定时器；

//setTimeout和setInterval返回的整数值是连续的（一定环境下， 比如浏览器控制台， 或者js执行环境等）, 第二个setTimeout方法返回的整数值将比第一个的整数值大1， 利用这一点， 可以写一个函数， 取消当前所有的setTimeout

/*
	(function(){
		var gid = setInterval(clearAllTimeouts, 0);
		function clearAllTimeouts() {
			var id = setTimeout(function(){}, 0);
			while(id > 0) {
				if(id !== gid) {
					clearTimeout(id);
				}
				id--;
			}
		}
	})();
*/




/**  setInterval  **/
//setInterval用法和setTimeout完全一致， 区别仅仅是setInterval指定某个任务每隔一段时间执行一次， 也就是无限次的定时执行；

//setInterval指定的是“开始执行”之间的间隔，并考虑任务执行本身所消耗的事件， 因为实际上， 两次执行之间间隔会小于指定时间， 比如说setInterval指定每100ms执行一次， 每次执行需要5ms， 那么第一次执行结束后95ms，第二次执行开始； 如果某次执行耗时特别长， 比如需要105ms， 那么他结束后， 下一次执行就会立即开始；
/*
	var i = 1; 
	var timer = setInterval(function(){
		alert(i++);
	}, 2000);
*/

/*
	var i = 1; 
	var timer = setTimeout(function(){
		alert(i++);
		timer = setTimeout(arguments.callee, 2000)
	}, 2000);
*/

// 实现间隔时间确定你的setInterval的效果
function interval(func, wait) {
	var interv = function() {
		func.call(null);
		setTimeout(interv, wait);
	}
	
	setTimeout(interv, wait);
}

interval(function(){
	console.log(22);
}, 2000);