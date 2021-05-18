# HTTP
## HTTP的特点
###1、灵活可拓展
报文里面没有做严格的语法语义限制，开发者可以根据自己的需求拓展。
###2、可靠传输
因为HTTP是基于TCP的，TCP是可靠传输协议，所以HTTP也是可靠传输。
###3、“请求-应答”模式
HTTP的传输数据是“请求-应答”模式。
###4、无状态
HTTP是无状态的。

## HTTP如何传输大文件
### 数据压缩
使用Accept-Encoding字段可以协商数据压缩。
### 分块传输
当我们需要分块传输的时候，只需要在请求头加上Transfer-Encoding: chunked。
### 范围请求
也可以使用范围请求Accept-Ranges: bytes。

## HTTP连接管理
HTTP有**短连接**和**长连接**两种，如果需要长连接，在请求头上加上Connection: keep-alive，就可以保持长连接。 

## HTTP性能优化
### 1、并发连接
为了缓解队头阻塞这些问题，HTTP支持并发连接，可以同时对一个域名发起多个长连接。
### 2、域名分片

## HTTP的Cookie机制
### 1、Cookie的工作过程
服务器发送响应头字段Set-Cookie携带cookie给浏览器，然后浏览器储存cookie，请求服务器时将cookie放在请求头字段。
### 2、Cookie的属性
（1）设置Cookie的生存周期（有效期）
浏览器会有限采用Max-Age来计算失效时间。Max-Age就是相对时间，浏览器用收到报文的时间点加上Max-Age就会得到失效的绝对是件。

（2）设置Cookie的作用域
Domain：Cookie所属的域名

Path：Cookie所属的路径
### 3、Cookie的安全性
**HttpOnly**：该Cookie只能通过浏览器HTTP协议传输，禁止其他访问。

**SameSite**：防范“跨站请求伪造”（XSRF）攻击。

**Secure**：表示仅能用HTTPS协议加密传输。
