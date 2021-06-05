## 盒模型的两种分类
盒模型，我们做前端最常见的盒子，也成为框模型（Box Model）。
随便在网页控制台截取一个盒子，可以看到：
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fc2c0c201b046ed83418a801d8f793d~tplv-k3u1fbpfcp-watermark.image)

盒模型由元素的**内容（content）、内边距（padding）、边框（border）、外边距（margin）** 组成。

而盒模型又分为两类：标准模型和IE模型。

两种模型有所不同，主要是体现在width的计算上。

### 标准模型
标准模型的宽度width，是等于content的宽度，也就是内容有多宽，元素的width就有多宽。
**width = content**

### IE模型
IE模型的宽度width，比起标准宽度，要多加上padding和border，也就是 **width = content + padding + border**

写两行代码来举个例子:

比如同样的盒子，

```html
<div class="content">标准盒子</div>
<div class="border">IE盒子</div>
```
我们使用box-sizing这个属性来设置盒模型的类别。当box-sizing为content-box的时候，就是标准模型，而当box-sizing为border-box的时候，就是IE模型。

通过这个属性我们来加上属性样式对比一下。

```CSS
.content{
    box-sizing: content-box; /*设置盒模型为标准模型*/
    width:100px;
    height: 100px;
    padding: 10px;
    border: 5px solid red;
    margin: 2px;
    }

.border{
    box-sizing: border-box; /*设置盒模型为IE模型*/
    width: 100px;
    height: 50px;
    padding: 10px;
    border: 5px solid red;
    margin: 15px;
}

```
运行之后我们分别查看二者的盒模型
标准模型：
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f2c66621b68415aacf82e8519ad54c6~tplv-k3u1fbpfcp-watermark.image)
可以看到，content的宽度为100px，也就是我们设置的width宽度。验证了刚刚的width = content。

IE模型：
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09316395dce346418c623cc4c0b7f08f~tplv-k3u1fbpfcp-watermark.image)
从IE模型的图中可以看出，width = content + padding + border 。


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/521825dceff74c42b2d7e29847838295~tplv-k3u1fbpfcp-watermark.image)


我们平时在书写代码的时候应该要注意在页面中声明DOCTYPE类型，这样就能使用标准的模型而不是IE模型，也不会造成页面的不兼容。
如果没有声明DOCTYPE类型，那么在IE浏览器中会将盒子的模型解释为IE模型，而其他例如google等浏览器又会将盒子的模型解释为标准模型，导致页面的不兼容。
