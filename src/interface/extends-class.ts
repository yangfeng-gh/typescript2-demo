class Control {
    private state: any;
    protected name: any = 'tom';
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {
        console.log(this.name);
    }
}

class TextBox extends Control {
    select() {
        console.log(this.name);
    }
}

// 错误：“Image”类型缺少“state”属性。
// class.ts Image implements SelectableControl {
//     select() { }
// }

let b = new Button();
b.select();

let tb = new TextBox();
tb.select();