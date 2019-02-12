function f(_a) {
    var a = _a.a, b = _a.b;
}
function f2(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    console.log('a: %s, b: %d', a, b);
}
f2(); // ok, default to { a: "", b: 0 }
function f3(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f3({ a: "yes" }); // ok, default b = 0
f3(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument
