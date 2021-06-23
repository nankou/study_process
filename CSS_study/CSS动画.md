
## **animation**（动画）：动画属性。
接下来我们来看看动画的有关内容。

CSS `animation` 属性是` animation-name`，`animation-duration`,` animation-timing-function`，`animation-delay`，`animation-iteration-count`，`animation-direction`，`animation-fill-mode` 和 `animation-play-state` 属性的一个简写属性形式。
那么就是说，animation有这么多的子属性。

### 1、animation-name
指定应用的一系列动画。每个名称代表一个由`@keyframes`定义的动画序列。
而这里的`@keyframes`是定义一个动画,`@keyframes`定义的动画名称用来被`animation-name`所使用。
也就是说这个`@keyframes`其实就是个命名和定义。
`animation-name`必须与规则`@keyframes`配合使用，因为动画名称由`@keyframes`定义
单独设置`animation-name`好像没什么效果。

我们还需要设置它的持续时间`animation-duration`


```css
    img {
        width: 100px;
        height: 100px;
        animation-name: myAnimation;
        animation-duration: 2s;
    }
    
    @keyframes myAnimation {
        0% {
            width: 50px;
            height: 50px;
        }
        50% {
            width: 100px;
            height: 100px;
        }
        100% {
            width: 50px;
            height: 50px;
        }
    }
```

![animation_name.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd068191b4ee4837a0c20d43aef63a17~tplv-k3u1fbpfcp-watermark.image)

上面的@keyframes就是定义动画myAnimation的名称，并对关键帧添加样式。
**也就是说@keyframes命名一个动画，然后animation-name代表使用这个命名的动画。**

### 2、animation-duration
刚刚上面提到了`animation-duration`，其实就是**设置动画的持续时间**，仅仅有帧动画和需要执行的动画名称是不足以形成动画的，动画一定是有一个时间的。
**我们设置持续时间越长，它的动画过程就越慢**。
可以对比一下两个👇

![animation-duration.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/325d65e78e134e2e9a4ffb09c7bcdaa6~tplv-k3u1fbpfcp-watermark.image)

### 3、animation-timing-function
**该属性表示设置动画的过渡属性**。即CSS动画在每一动画周期中执行的节奏。

- **ease**：低速开始，低速结束，但是中间的速度快。
	
- **ease-in**：低速开始，缓慢加快速度。
	
- **ease-out**：正常速度开始，到结束时速度变慢。
	
- **ease-in-out**：动画以低速开始和结束。中间没有加快速度。
	
- **linear**：匀速进行。

👇

![animation-timing-function.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5687fba9dcb84ef18204be1750c1c1bb~tplv-k3u1fbpfcp-watermark.image)

除此之外，它的值也可以是函数👉`cubic-bezier()`

这个`cubic-bezier()` 函数定义了一个**贝塞尔曲线**(Cubic Bezier)。


**根据文档定义，贝塞尔曲线曲线由四个点 P0，P1，P2 和 P3 定义。P0 和 P3 是曲线的起点和终点。P0是（0,0）并且表示初始时间和初始状态，P3是（1,1）并且表示最终时间和最终状态。**
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98d696e2a5f44fbea52d6f96c958cec3~tplv-k3u1fbpfcp-watermark.image)

[图片来源](https://www.runoob.com/cssref/func-cubic-bezier.html)

`cubic-bezier() `函数有4个取值，分别是P0默认值（0，0），动态取值P1（x1,y1），动态取值P2（x2,y2），P3默认值（1,1）

（1）、动画以恒定速度运行。此关键词表示缓冲函数 ` cubic-bezier(0.0, 0.0, 1.0, 1.0)`。

![cubic.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7cd047a7830846b2bcfaf0b6ca24fa73~tplv-k3u1fbpfcp-watermark.image)
可以看到，当 `cubic-bezier(0.0, 0.0, 1.0, 1.0)`时，跟`linear`是一样的效果。

（2）、动画缓慢开始，然后突然加速，最后缓慢移向目标。此关键词表示缓冲函数 `cubic-bezier(0.25, 0.1, 0.25, 1.0)`。

![cubic-bezier.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db6b4f19644d469eb14feda97163f48c~tplv-k3u1fbpfcp-watermark.image)
（3）、甚至不只可以定义一条过度属性，可以定义多条。如
`animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);`

### 4、animation-delay
定义动画于何时开始，即从动画应用在元素上到动画开始的这段时间的长度。也就是**动画开始的延迟时间。**

```css
    .flower5 {
        animation-timing-function: linear;
    }

    .flower6 {
        animation-timing-function: linear;
        animation-delay: 3s;
    }
```

![animation-delay.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19696dcc0ee74018b311e7115dbd89c9~tplv-k3u1fbpfcp-watermark.image)

可以看到下面的图片比上面的动画延迟了3秒才开始。

### 5、animation-iteration-count
定义动画在结束前运行的次数，也就是循环次数，**默认是一次**。
如果我们设置为0，也就是不运行。👇

```css
    .flower4 {
        animation-timing-function: linear;
        animation-iteration-count: 0;
    }

    .flower5 {
        animation-timing-function: linear;
        animation-iteration-count: 1;
    }

    .flower6 {
        animation-timing-function: linear;
        animation-iteration-count: 2;
    }
```

![animation-iteration-count.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6284cceff15c45c890dcbfec61ec8b0a~tplv-k3u1fbpfcp-watermark.image)

### 6、animation-direction
该属性定义动画**是否反向播放**。取值：normal | reverse | alternate | alternate-reverse
	
- **normal**

默认情况下，动画按正方向循环，也就是每个动画结束后直接重置到起点。

- **reverse**

反向运行动画，每周期结束动画由尾到头运行。也就是从终点到起点。结束后也是在起点。

- **alternate**

动画交替反向运行，反向运行时，动画按步后退。

- **alternate-reverse**


反向交替， 反向开始交替。

我们统一设置循环次数为2👇

![animation-direction.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63d64de22dfc4a19bb9293ba20c3ffd8~tplv-k3u1fbpfcp-watermark.image)

### 7、animation-fill-mode
该属性定义CSS动画在执行之前和之后如何将样式应用于其目标。取值：none | forwards | backwards | both

- **none**

默认情况下，当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的 CSS 规则来显示该元素。

- **forwards**

目标将保留由执行期间遇到的最后一个关键帧计算值。

- **backwards**

动画将在应用于目标时立即应用第一个关键帧中定义的值，并在`animation-delay`期间保留此值。
	
- **both**

动画将遵循`forwards`和`backwards`的规则，从而在两个方向上扩展动画属性。

### 8、animation-play-state
可以设置对象动画的状态，**暂停和运行**。取值：running | paused


```css
    .flower5 {
        animation-play-state: running;
    }
    
    .flower5:hover {
        animation-play-state: paused;
    }
```

![animation-play-state.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9a41d4a689a499eb6bd06c2b46bb579~tplv-k3u1fbpfcp-watermark.image)

当我们鼠标放上去的时候可以看到，动画立刻就停止了，移出去的时候又开始了。我们可以根据业务需求，
**指定某个情况下停止动画或开启动画**。

### 总结
本次总结了**animation的各种属性**，通过了解这些属性的含义以及取值，我们可以实现更炫酷的动画。
如有问题，欢迎批评指出~~


![animation-love.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a69343fa1d7a47dbb1c64f71711cf46d~tplv-k3u1fbpfcp-watermark.image)
