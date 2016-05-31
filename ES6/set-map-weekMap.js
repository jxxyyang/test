//ES6中的Set、Map和WeakMap (比较新的firefox，chrome，ie11都有不同程度的实现)
//Set (ES6新增的有序列表集合， 不会包含重复项，之前我们通常用对象和数组来实现没有重复的集合，但是对象会对key进行toString()操作， 这些会导致某些key会意外覆盖之前的数据， 如果key本身是一个对象， toString()会得不到想要的结果， 如下：)
 var o = {};
 var key1 = 2,
     key2 = {
		 toString: function () {
			 return 2;
		 }
	 }
	 ,key3 = { x:1 },
	 key4 = { y : 2 };

o[key1] = 1;
o[key2] = 2;
o[key3] = 3;
o[key4] = 4;

//console.log(o);
// o : Object {2: 2, [object Object]: 4}

//数组可以存放任何类型的数据，  不过数据除重需要自己实现
//Set支持add(item)方法， 用来向Set添加任意类型的元素，如果已经添加过则自动忽略， has(item)方法用来检测Set中是否存在指定元素； delete(item)方法用来从Set中删除指定元素，clear()用来清空Set, 获取Set集合用size属性；
/*
	var set = new Set();
	set.add(window));
	console.log(set.has(window));
	console.log(set.size());
	set.add(window);
	set.add(1);
	console.log(set.size());
	set.delete(window);
	set.clear();
	console.log(set.size());

*/
//Set调用add、has、delete等方法时对key进行的比较，不做类型转化， 可以认为使用[===] 进行比较，当然也不全是[===];
// Set中， NaN只能添加一次，（虽然NaN===NaN返回false）;
// Set中，[-0], [0], [+0] 可以同时存在， 因为符号不一样


// Map 有序键值对集合， 键值对的key和value都可以是任何类型的元素，通过set(key, value)方法为Map设置心动键值对， 如果设置的key已经存在则用新的value覆盖，Map在比较新的key也不做类型转换，跟Set类似，Map的get(key)方法获取指定的key的值；map的has, delete, clear和size与Set类似
// Map 有序键值对集合， 键值对的key和value都可以是任何类型的元素，通过set(key, value)方法为Map设置心动键值对， 如果设置的key已经存在则用新的value覆盖，Map在比较新的key也不做类型转换，跟Set类似，Map的get(key)方法获取指定的key的值；map的has, delete, clear和size与Set类似

var map = new Map()
var k1 = {toString: function(){return 1}};
var k2 = 2;
map.set(k1, 1);
map.set(k2, 2);

map.has(k1); //true
map.has("2"); //false, 类型不一样
map.delete(2);
map.size; //1
map.clear();
map.size; // 0

//迭代
// 不能像数组一样用for循环来迭代Set, 也不能用for-in来迭代Map， 可以用for-of来遍历他们
// Set和Map有几个方法会返回迭代对象， （iterator Objects）, 分别是 entries(),keys()，values()，这限额方法现阶段只有Firefox支持
var xxSet = new Set();
xxSet.add("this is a demo.");
xxSet.add("window");
xxSet.add("top");
for(var item of xxSet) {
	console.log(item);
}

//WeakMap 相对于普通的Map， 也是键值对集合， 只不过WeakMap的key只能是非空对象， WeakMap对它的key保持弱引用，也就是说他不阻止垃圾回收器回收所引用的key， WeakMap最大的好处是可以避免内存泄漏，一个仅被WeakMap作为key而引用的对象，会被垃圾回收器收掉；
//weakMap 有set， has， delete， clear方法， 但是没有size属性；



 //WeakSet 目前还没有浏览器实现；
