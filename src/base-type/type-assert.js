/**
 * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
 * TypeScript会假设程序员已经进行了必须的检查。
 */
// 形式一：
var someValue = "this is a string";
var strLength = someValue.length;
// 形式二：
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
