function myModule() {
    var str = "123";
    var num = 123;

    function doSomeThing() {
        return str;
    }

    function doOtherThing() {
        return num;
    }
    // 向外暴露方法。只有暴露出去的方法才能在外部使用，否则会报错
    return {
        doOtherThing: doOtherThing
    }
}