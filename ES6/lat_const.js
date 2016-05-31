//块级作用域let和const作用域
// JS 使用var 声明变量， 以function来划分作用域， 大括号{}限定不了var作用域

// 1. let (可以在{}, if, for里面声明，限定作用域在块级内)
/*
	注意事项
	1. 不能重复声明（var和let, let和let 不能同是声明一个变量）
	2. 有了let后， 匿名函数自执行就可以去掉了
*/

(function(){
	var jQuery = function(){};
	window.$ = jQuery;
})();

//块级作用域写法
let jQuery = function(){}
window.$ = jQuery;

// 2. const命令
//const 用来声明常量， 一旦声明，常量就不能改变
const PI = 3.1415;

if(true) {
	const y = 1;
}

console.log(y);  //Error y is not defined