## transition（过渡）：用于设置元素的样式过渡
**transition**和**animation**有着类似的效果，但细节上有很大的不同。


`transition`属性是 `transition-property`，`transition-duration`，`transition-timing-function` 和 `transition-delay` 的一个简写属性。
过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 `:hover`，`:active` 或者通过 JavaScript 实现的状态变化。

其实transition是一个很好用而且很方便的属性。
从最简单的用法说起：

### 减少突兀感，增加用户友好度：
比如当我们业务需求是鼠标到某个图片的时候放大并右移，我们很容易的就会想到`:hover`，

```html
    <div id="box">
        <img src="./flower.png">
    </div>
```

```css
    img {
        width: 100px;
        height: 100px;
    }
    img:hover {
        width: 200px;
        height: 200px;
        margin-left: 200px;
    }
```
这样按道理是可以完成我们的需求了。

![无动画.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7e2e64197b04262bb7cfdcaf70f48a2~tplv-k3u1fbpfcp-watermark.image)
我们发现什么，这个效果太突兀了，而且很容易造成闪动，**很明显这是很不友好的**。
这个时候我们只需要加上一行代码：


```css
transition: 2s;
```
我们再来看看效果：👇
![有动画.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c405973c053e4416ba84026c1d106b04~tplv-k3u1fbpfcp-watermark.image)

可以看到，整个流程变得缓慢了起来，因为我们设置了`transition`，**让这个改变的动作在2秒内完成**。所以看上去就会舒服很多。



### 属性可选值

```css
transition: property name | duration | timing function | delay 
```

比如：`transition: margin-right 2s ease-in-out 1s`

就代表首先过渡的属性是**margin-right**，整个时间是**2秒钟**，时间函数是**ease-in-out**，延迟时间为**1s.**。

另外，我之前在一篇文章中看到说`transition`只支持一个规则，定义一个属性的变化，我查阅文档之后发现那是错的。其实`transition`支持2条规则，比如

```css
transition: margin-right 4s, color 1s;
```

接下来我们就来看看这些子属性。

#### **1、transition-property**

这个属性指定过渡属性的名称。也就是我们可以自定义这个过渡规则的名称。

比如`transition-property：myTransition`

#### **2、transition-duration**

这个属性指定过渡动画所需的时间。默认值为0s，表示无过渡效果。


![transition-duration.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac856311f0ef49a7a7afd4ea550296f0~tplv-k3u1fbpfcp-watermark.image)
#### **3、transition-timing-function**
这个其实跟[动画](https://juejin.cn/post/6976859574951215141)的类似，这里就不详细说了。

```css
transition-timing-function: ease  // 慢速开始，然后变快，慢速结束 
transition-timing-function: ease-in  // 慢速开始
transition-timing-function: ease-out  // 慢速结束
transition-timing-function: ease-in-out  // 慢速开始和慢速结束
transition-timing-function: linear  // 匀速
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1)  
transition-timing-function: step-start
transition-timing-function: step-end
transition-timing-function: steps(4, end)
```
我们直接看效果：👇


![transition-timing-function.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bce39d8f8f643498156d580590f7252~tplv-k3u1fbpfcp-watermark.image)
#### **4、 transition-delay**
这个属性指定过渡动画的延迟时间。也就**是延迟时间后才开始执行**。默认值是0s，也就是立刻执行。

![transition-delay.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3778dc176f8141c48a6bd70c6944cdee~tplv-k3u1fbpfcp-watermark.image)


### 总结
其实transition很多属性都跟动画animation是类似的，理解了动画的就能够很好的理解这里的属性。



![animation-love.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a627cb7c7498438b96679b034d8238cc~tplv-k3u1fbpfcp-watermark.image)

