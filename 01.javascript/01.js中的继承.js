/**
 * @author: *********
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-01-07 13:51:12
 * @description: JS中的继承
 */

/**
 * JS 中的继承
 *  1. 构造函数继承
 *  2. 原型链继承
 *  3. 组合继承
 *  4. Object.create 继承
 *  5. class 类继承
 */

/** ====== 1. 构造函数继承 =========== */

// function Animal() {
//     console.log(' 父构造函数 ---> ', this);
//     this.name = 'Animal'
// }
//
// Animal.prototype.speak = function () {
//     console.log(" 父类原型上的方法 speak -->", this);
// }
//
// function Dog() {
//     console.log('子类里的this -->', this);
//     Animal.call(this) // 这时父类里的 this 是Dog{}
//     this.type = "dog"
// }
//
// let dog = new Dog()
// console.log(dog.name);
// console.log(dog.eat);
// console.log(dog.speak); // undefined 说明 构造函数继承不能继承原型上的属性和方法
//
// let cat = new Cat(); // new 的时候,执行Cat构造函数,调用父类
//
// function Cat() {
//     Animal.call(this) // 这时父类里的 this 是 Cat
//     setTimeout(() => {
//         // 所以, 构造函数里的 this 实际上就是 new 构造函数产生的实例
//         console.log(this == cat);
//     },100)
// }

/** ===== 2. 原型链继承 ========= */

// function Animal() {
//     console.log("父类 Animal -->", this);
//     this.name = "Animal"
// }
//
// Animal.prototype.speak = function () {
//     console.log(" 父类prototype 上方法 speak");
// }
//
// function Dog() {
//     console.log("子类 Dog ->", this);
//     this.type = "dog"
// }
//
// console.log('%c修改子类Dog原型指向前','color:red', Dog.prototype, Dog.prototype.constructor == Dog);
// Dog.prototype = new Animal() // 子类原型指向父类实例
// console.log('%c修改子类Dog 原型指向后','color:red', Dog.prototype, Dog.prototype.constructor == Dog);
// let dog1 = new Dog()
// let dog2 = new Dog()
//
// console.log(dog1.name, dog1.type); // 继承了父类本身的 name 属性
//
// dog1.speak() // 继承了父类原型上 speak 方法


/** ======= 3. 组合继承 ============ */
/**
 * 组合继承实现原理:
 *  通过 call 方法来实现 从父类本身继承属性和方法(即: 相当于每个子类单独维护一遍父类的属性和方法, 不让其向上查找)
 *  通过子类原型指向父类实例, 来继承 父类原型上的属性和方法.
 *
 * 缺点:
 *  父类的构造函数会执行两次. 并且子类本身 和 子类原型上, 都继承了 父类本身的属性和方法.
 */

// function Animal() {
//     console.log("父类 Animal -->", this);
//     this.name = "Animal"
// }
//
// Animal.prototype.speak = function () {
//     console.log(" 父类prototype 上方法 speak");
// }
//
// function Dog() {
//     console.log("子类 Dog ->", this);
//     Animal.call(this, '通过call 方法继承父类本身 身上的 属性 和 方法') // 此处会执行一次 父类的构造函数
//     this.type = "dog"
// }
// // 所以父类的构造函数会执行两次.
// Dog.prototype = new Animal() // 通过 子类原型指向父类实例, 来继承父类原型上的属性和方法 // 此处还是会执行一次 父类构造函数
//
// let dog1 = new Dog()
// console.log(dog1.name);
// dog1.speak()
// console.log('%c dog1 -->',"color:red",dog1);

/** ========== 4. Object.create实现继承 =========== */
function Parent() {
    this.name = 'I am Parent';
    this.arr = [1,2,3]
}

Parent.prototype.speak = function () {
    console.log('我是父类原型上的方法 speak --> ');
};
function Child() {
    Parent.call(this); // 构造函数继承的 call 方法
    this.type = 'child'
}

// 子类原型指向一个新创建的对象,这个对象依据父类原型创建
// 也就是说, 子类原型直接指向父类原型. 而且这是一个拷贝父类原型的一个新对象.
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child; // 让子类原型的构造函数 重新指回 子类本身构造函数

let child1 = new Parent();
let child2 = new Child();

console.log(child1 instanceof Parent); // true
console.log(child1 instanceof Child); // false 区分出其不是子类的实例,而是父类的实例
console.log(child2 instanceof Child); // true

