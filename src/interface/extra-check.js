function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare2 = createSquare({ colour: "red", width: 100 }); // error: 'colour' not expected in type 'SquareConfig'
/*
绕开这些检查非常简单。 最简便的方法是使用类型断言：
 */
var mySquare3 = createSquare({ width: 100, opacity: 0.5 });
/*
还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量
因为 squareOptions不会经过额外属性检查，所以编译器不会报错。
 */
var squareOptions = { colour: "red", width: 100 };
var mySquare4 = createSquare(squareOptions);
