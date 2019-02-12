/*
从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做。
除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。
 */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
