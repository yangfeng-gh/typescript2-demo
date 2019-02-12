var _a = {
    a: "foo",
    b: 10
}, newName1 = _a.a, newName2 = _a.b; // a: newName1 读做 "a 作为 newName1"
console.log(newName1, newName2);
// 令人困惑的是，这里的冒号不是指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。
var _b = {
    m: "bar",
    n: 100
}, m = _b.m, n = _b.n;
console.log(m, n);
