(function myModule(window) {
    var str = "123";
    var num = 123;

    function doSomeThing() {
        return str;
    }

    function doOtherThing() {
        return num;
    }
    // 正确的向外暴露方式，挂载在window上
    window.myModule = {
        doOtherThing: doOtherThing
    }
})(window)