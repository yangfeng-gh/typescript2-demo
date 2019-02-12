/*
对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。
 */
var x;
var y;
x = y; // okay, y matches structure of x
