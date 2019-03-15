/*
函数类型完整形式：
函数类型包含两部分：参数类型和返回值类型。
 */
function add(x: number, y: number): number {
    return x + y;
}

let add2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
