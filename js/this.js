//Javascript֮this���
/*
  Javascript֧�ֺ���ʽ��̣��հ�������ԭ�͵ļ̳�
  Javascript�е�this����Ҫ�ḻ�Ķ࣬ ������ȫ�ֶ��󣬵�ǰ�������������� ����ȫȡ���ں����ĵ��÷�ʽ��
  Javascript�к����ĵ��������¼��ַ�ʽ����Ϊ���󷽷����ã���Ϊ�������ã���Ϊ�ṹ�������ã� ʹ��apply��call���ã�
*/

//ȫ�ֵ�this,  ȫ�ֵ�thisһ��ָ��ȫ�ֶ��� ������е�ȫ�ֶ������  window
/*
	console.log(this.document === document);  //true
	console.log(this === window) ; //true

	this.a = 91;
	console.log(window.a); // 91
*/

//һ�㺯����this
/*	function f1() {
		return this;
	}
	console.log(f1() === window);  //ture;
	//һ��ĺ�����this������thisҲָ��window�� ��nodeJS��ָ��Ϊ global object
*/

/*
	function f2() {
		'use strict'; //ʹ���ϸ�ģʽ
		return this;
	}

	console.log(f2() === undefined);  //true
	//�ϸ�ģʽ�У� ������thisָ��Ϊundefined, ��Ϊ�ϸ�ģʽ��ֹthis�ؼ���ָ��ȫ�ֶ���
	
*/

//��Ϊ���󷽷��ĺ�����this
/*	
	var o = {
		prop: 37,
		f: function() {
			return this.prop;
		}
	};
	
	console.log(o.f()); // 37    thisָ��������� o
*/

/*
	var o = {
		prop: 37
	}
	
	function xx() {
		return this.prop;
	}
	
	o.f = xx; // ��ʱ����˷������ԣ�������������е�thisҲ��ָ�����o
	
	console.log(o.f());  //37;
	//console.log(o);
*/


//��Ϊ��������
//��������ֱ�ӵ��ã� ��ʱthis�󶨵�ȫ�ֶ��� ��������У� ȫ�ֶ���Ϊwindow��
/*
	function makeNoSense(x) {
		this.x = x;
	}

	makeNoSense(5); 

	console.log(x); //5  //x�Ѿ���Ϊһ��ֵΪ5��ȫ�ֱ���
*/

//�ڲ�����

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

	//�������Javascript�����ȱ�ݣ� ��ȷ�ķ�ʽ���ڲ�������thisӦ�ð󶨵������ĺ�����Ӧ�Ķ����ϣ� �����ñ�������ķ����� Լ���׶���
*/

// ����ԭ�����ϵ�this
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
	// p�ǻ���ԭ��o���������Ķ���
	//p��ԭ����o�� ����f()��ʱ�������o�Ϸ���f, this��ָ��ǰ����ģ� ������p��	
*/


//get/set������this
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

//�ṹ���е�this
/*
	function myClass() {
		this.a = 25;
	}
	
	var o = new myClass();
	console.log(o.a); //25
	//new myClass()��ʱ��this��ָ��һ���ն��� ��������ԭ�ͻ�ָ��myClass.prototype; myClass()û�з���ֵ���߷���Ϊ���������ǣ� Ĭ�Ͻ�this���أ�
*/

/*
	function c2() {
		this.a = 26;
		return {
			a: 24
		}
	}

	var o = new c2();
	console.log(o.a); //24     �����˶��󰡣�
*/

//bind������this
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

//call/apply������this
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

//Javascript�е�eval����
//eval�������Խ��ַ���ת��Ϊjavascript���룬�����ߵ�ִ�л����е�this��eval�̳�������

//ES6��ͷ�����е�this


//��Դ�� http://www.jeffjade.com/2015/08/03/2015-08-03-javascript-this/






