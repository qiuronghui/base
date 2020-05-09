// this的5种绑定
// 默认绑定(非严格模式下this指向全局对象, 严格模式下this会绑定到undefined)
// 隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo内的this指向obj)
// 显示绑定(通过call()或者apply()方法直接指定this的绑定对象, 如foo.call(obj))
// new绑定
// 箭头函数绑定(this的指向由外层作用域决定的)

// 1、this的默认绑定
// this默认绑定window 严格模式'use strict' this指向undefined
//

// 2、隐式绑定
// 谁最后调用的函数，函数内的this指向的就是谁(不考虑箭头函数)
//对象里面调用函数，丢失this

// 隐式绑定的隐式丢失问题
// 有两种情况容易发生隐式丢失问题：
// 使用另一个变量来给函数取别名
// 将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定

// 3、显式绑定
// 显式绑定的其它用法

// 4、new绑定

// 5、箭头函数绑定