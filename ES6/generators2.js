//ES6生成器函数
function* list () {
	for(var i = 0; i<arguments.length; i++) {
		yield arguments[i]
	}
	return "done."
}

var o = list(1,2,3);
/*
	console.log(o, "o");
	console.log(o.next(), "1"); //{value:1, done:false}
	console.log(o.next(), "2"); //{value:2, done:false}
	console.log(o.next(), "3"); //{value:3, done:false}
	console.log(o.next(), "4"); //{value:"done.", done:true}
	console.log(o.next(), "5"); //{value:undefined, done:true}
*/

//斐波那契数列 (前两个数字都是1， 除此之外任何数字都是前两个数之和)
function *fab(max) {
	var count = 0, last = 0, current = 1;
	
	while(max > count++) {
		yield current;
		var tmp = current;
		current += last;
		last = tmp;
	}
}

var obj = fab(10), ret, rst = [];
 
while(!(ret	= obj.next()).done) {
	rst.push(ret.value);
}

console.log(rst); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//

function* fab2(max) {
	var count = 0, last = 0, current  =1;
	while(count++ < max) {
		yield current;
		var tmp = current;
		current += last;
		last = tmp;
	}
}

for(var i of fab2(10) ) {
	console.log(i);
}

