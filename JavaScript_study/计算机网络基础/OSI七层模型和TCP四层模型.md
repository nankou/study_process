
> 下层基础决定上层建筑，夯实基础，有助于我们学习更多的知识~
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0c1f638fa7b46d4bb406c5407519ae6~tplv-k3u1fbpfcp-watermark.image)

上面这个图表示了两个协议的体系结构。
OSI是一种理论下的模型，而TCP/IP已被广泛使用，成为网络互联事实上的标准。
但是我认为二者都需要了解，对比着看更有助于我们理解。
# 一、OSI七层协议
1、**OSI（Open System Interconnect），即开放式系统互联。** 一般都叫OSI参考模型，是ISO（国际标准化组织）组织在1985年研究的网络互连模型。

2、OSI七层模型：
从下至上分别是物理层、数据链路层、网络层、运输层、会话层、表示层和应用层。接下来一个一个来看，
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cd8d9b557ce475399e1db98a895e064~tplv-k3u1fbpfcp-watermark.image)
**物理层（Physical）**：最终信号的传输都是通过物理层传输的，通过物理层的传输介质集线器、中继器、调制解调器、网线、双绞线、同轴电缆等传输。在物理层上所传数据的单位是**比特**，传输比特流0和1。

对应网络协议：IEEE802.1A，IEEE802.2到IEEE802.11

**数据链路层（Data Link）**：数据链路层**将网络层交下来的IP数据封装成帧**，在两个相邻结点间的链路上传送帧。每一帧包括数据和必要的控制信息。

对应网络协议：FDDI，PDN，PPP等

**网络层（Network）**：网络层通过IP寻址来建立两个节点之间的连接，为源端的运输层送来的分组，选择合适的路由和交换节点，正确无误地按照地址传送给目的端的运输层。这一层也就是我们常说的IP协议所在。因为需要选择路由，所以我们常说的ARP协议也是在网络层。

对应网络协议：IP，ARP，ICMP，RARP，AKP，UUCP等。

**运输层（Transport）**：
运输层就是负责向两台主机中进程之间的通信提供通用的数据传输服务。运输层主要使用TCP和UDP两种协议。

- **TCP-传输控制协议**：提供面向连接的、**可靠**的数据传输服务，其数据传输的单位是报文段（segment）。

- **UDP-用户数据报协议**：提供无连接、尽最大努力的数据传输服务（不保证数据传输的可靠性），其数据传输的单位是用户数据报。

**会话层（Session）**：
会话层就是负责建立、管理和终止表示层实体之间的通信会话。该层的通信由不同设备中的应用程序之间的服务请求和响应组成。在这一层的协议有我们熟悉的域名系统DNS协议，还有支持电子邮件的SMTP协议等。

对应网络协议：SMTP，DNS。

**表示层（Presentation）**：
表示层提供各种用于应用层数据的编码和转换功能,确保一个系统的应用层发送的数据能被另一个系统的应用层识别。

对应网络协议：Telnet，Rlogin，SNMP，Gopher。

**应用层（Application）**：
应用层是网络体系结构中的最高层。应用层的任务是通过应用进程间的交互来完成特定网络应用。为计算机用户提供应用接口，也为用户直接提供各种网络服务。

对应网络协议：HTTP，TFTP，FTP，NFS，WAIS，SMTP。



# 二、TCP/IP四层协议

TCP/IP四层协议其实就是将OSI七层协议的上面三层（应用层、表示层、会话层）合并成一层（应用层），以及将底下的数据链路层和物理层合并成网络接口层。理解了OSI七层协议的每一层之后，就可以很轻松的理解TCP/IP四层协议了。

# 参考文章

[OSI 7层模型和TCP/IP 4层模型](https://zhuanlan.zhihu.com/p/32059190)