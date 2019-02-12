function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () {
        console.log('reset');
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
console.log(c.interval);
c.interval = 5.0;
console.log(c.interval);
