var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b, c = o.c;
console.log(a, b, c);
// 可以使用没有声明的赋值，但是编译时会有警告
// 我们需要用括号将它括起来，因为Javascript通常会将以 { 起始的语句解析为一个块。
// ({ m, n } = { m: "baz", n: 101 });
// console.log(a, b);
// 支持剩余变量
var _a = {
    x: "foo",
    y: 12,
    z: "bar"
}, x = _a.x, passthrough = __rest(_a, ["x"]);
var total = passthrough.y + passthrough.z.length;
console.log(x, total);
