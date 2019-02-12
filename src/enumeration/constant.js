/*
枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。
当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
一个枚举表达式字面量（主要是字符串字面量或数字字面量）
一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
带括号的常量枚举表达式
一元运算符 +, -, ~其中之一应用在了常量枚举表达式
常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错
 */
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
