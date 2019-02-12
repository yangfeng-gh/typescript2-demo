var _a;
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first, second);
/*
解构作用于已声明的变量会更好：
 */
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
console.log(first, second);
/*
作用于函数参数：
 */
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
/*
解构赋值支持剩余变量
 */
var _b = [1, 2, 3, 4], one = _b[0], rest = _b.slice(1);
console.log(one, rest);
