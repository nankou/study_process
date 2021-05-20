# WebSocket
## 什么是WebSocket
WebSocket是HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
没错，WebSocket是一种协议，就像是http,https这些，首先我们需要知道这一点。

那我们对比HTTP协议来看一下：

###WebSocket的特点

1、他是双向通信的。

2、更好的二进制支持，除了可以发送文本，也可以发送二进制数据。

3、同样基于TCP协议。

4、与 HTTP 协议有着良好的兼容性。默认端口也是80和443，
并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。


## 为什么要用WebSocket
我一直觉得我们学习一个新知识的时候，一定要知道为什么会出现这个东西。
那么既然有了HTTP协议，为什么又出现了WebSocket呢？

因为HTTP协议的通信只能由客户端发起，也就是单向请求，而我们在实际的生活中，会需要服务器向客户端推送消息。
如果我们需要获取一些信息有没有更新，就只能使用“轮询”的方法向服务器请求，
可想而知，这样的方式会造成，不断的发送请求，浪费资源。所以就有了双向通信的WebSocket。

## 怎么使用WebSocket
### 客户端
```
    var ws = new WebSocket("wss://echo.websocket.org");

    ws.onopen = function(evt) {
        console.log("Connection open ...");
        ws.send("Hello WebSockets!");
    };

    ws.onmessage = function(evt) {
        console.log("Received Message: " + evt.data);
        ws.close();
    };

    ws.onclose = function(evt) {
        console.log("Connection closed.");
    };
```
 
## 如何申请升级ws协议
### 客户端
我们在使用WebSocket的时候可以复用HTTP协议，只是需要在请求头上做一点改变：
```
GET / HTTP/1.1
Host: localhost:8080     
Origin: http://127.0.0.1:3001
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Version: 12
```
其中**Connection: Upgrade**表示要升级协议，

**Upgrade: websocket**：表示要升级到websocket协议，

**Sec-WebSocket-Version**：表示websocket的版本。


##参考文章
WebSocket：5分钟从入门到精通
https://juejin.cn/post/6844903544978407431#heading-9
我认为这位作者写的挺好，但是鉴于我的知识面的匮乏，我只将我理解了的写了出来。
需要继续学习这方面的知识。所以本篇文章只能作为一个学习记录.....