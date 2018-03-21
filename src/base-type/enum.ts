// 默认情况下，从0开始为元素编号。
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// 手动的指定成员的数值
enum Color2 {Red = 1, Green, Blue}
let c2: Color = Color.Green;

// 全部都采用手动赋值
enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color = Color.Green;

// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
enum Color4 {Red = 1, Green, Blue}
let colorName: string = Color4[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2