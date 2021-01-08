/**
 * @author: *********
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2021-01-08 08:55:30
 * @description: JS数组常用方法总结
 */

// 1. 判断是否为数组
// const arr = []
// const obj = {}
// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray(obj)); // false

/* ------------------------------------ */
// 2. 数组新增或删除相关方法
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

// push 向末尾新增
// arr1.push(1)
// console.log(arr1);
//
// // unshift 向数组开始新增
// arr1.unshift(0)
// console.log(arr1);

// shift 删除第一项, 返回删除的元素
// console.log(arr1.shift()); // 返回删除的元素
// console.log(arr1);
//
// // pop 方法删除最后一项, 返回删除的元素
// console.log(arr1.pop());
// console.log(arr1);

// splice 方法, 删除或替换数组的某一项
// const arr = ['贝贝', '京京', '欢欢', '莹莹', '妮妮']
// const result = arr.splice(0, 0, '旺旺')
// console.log('返回结果 -->', result);
// console.log('原数组 -->', arr);

// console.log(arr.splice(-3, 0, '旺旺')); // 返回被删除的元素数组.
// console.log('原数组 -->', arr);