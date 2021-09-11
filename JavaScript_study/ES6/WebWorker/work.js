// 3、接收主线程发送过来的消息数据
function fibonacci(num) {
    return num > 2 ? fibonacci(num - 1) + fibonacci(num - 2) : 1
}

var onmessage = function(event) {
    console.log('分线程监视');
    console.log(event);
    // // 获取主线程发送过来的信息数据
    // var data = event.data;
    // // 分线程处理数据
    // data = data.toUpperCase();
    // // 将处理完的数据转交给主线程
}