function identity(arg) {
    return arg;
}
var myIdentity3 = identity;
var myIdentity4 = identity;
console.log(myIdentity3('abc'), myIdentity4(123));
