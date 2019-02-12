/*
泛型变量T代表任意类型。因些不要用T限定的变量调用特有的对象方法
 */
function loggingIdentity(arg) {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
