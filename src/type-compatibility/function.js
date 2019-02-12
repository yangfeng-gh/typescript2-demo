var foo = function (a) { return 0; };
var bar = function (b, s) { return 0; };
bar = foo; // OK
// foo = bar; // Error
