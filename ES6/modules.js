/*
	'use strict'
	import math, {sum, pi} from "./module_math.js";
	console.log(sum(pi, pi));
	math();
*/


//ES6 中， 模块将作为重要的组成部分添加进来， 模块功能主要由export和import组成， 每一个模块都有自己单独的作用域，模块之间相互调用关系通过export来规定模块对外暴露的接口，通过import来引用其他模块提供的接口，同时还为模块创造了命名空间，防止函数的命名冲突；

//export，import命令
//test.js
export var name = "xx";
//多个变量
var name = "xx";
var age = 18;

export {name, age};

//引用 ， index.js
import {name, age} from './test.js';


//整体输入， module指令
//test.js
export function getName() {
	return name;
}

export function getAge() {
	return age;
}

//通过 import * as 完成模块整体的导入
import * as from './test.js';

//也可以通过指令 module也可以达到整体输入
module test from 'test.js'
test.getName(); 



















