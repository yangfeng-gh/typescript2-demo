interface ClockI {
    currentTime: Date;
    setTime(d: Date): void; // 在接口中描述一个方法，在类里实现它
}

class Clock implements ClockI {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

/*

 */
// ClockConstructor为构造函数所用
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
// ClockInterface为实例方法所用
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();