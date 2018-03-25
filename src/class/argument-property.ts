class AnimalOld {
    private name: string;
    constructor(theName: string) {
        this.name = theName
    }
}

/*
上面的例子中，我们不得不定义一个受保护的成员name和一个构造函数theName参数，并且立刻把name赋值为theName
使用private，protected, public等访问限定符限定一个参数属性，可以更简单明了地声明并初始化一个私有成员；
 */
class AnimalImprove {
    constructor(private name: string) { }
}


