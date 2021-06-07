## 什么是BFC 
BFC：Block Formatting Context 块格式化上下文
按照MDN的定义， 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

说白了也就是web页面当中渲染的一片区域。

- Block也就是Box模型当中的块级元素(block-level)
- Formatting Context就是一个概念，代表页面当中的一块渲染区域，并且有一套渲染规则。

合起来的意思就是块级格式化的范围。决定了元素如何对内容进行定位。

## BFC的布局规则
1、计算BFC的高度的时候，浮动子元素也参与计算。
2、BFC的区域不会跟浮动的盒子(float box)重叠。
3、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，像是隔开了不同的房间一样。
4、每个盒子的左外边框紧挨着包含块的左边框。
5、BFC内部的Box会在垂直方向上排列。

## 为什么要使用BFC
1、控制非浮动元素不和浮动元素不产生覆盖重叠
当一个浮动元素跟一个非浮动元素在一起，会产生覆盖现象。比如
```html
<div class="container">
    <div class="one">1111</div>
    <div class="two">2</div>
</div>
```
```
.one{
    width: 100px;
    height: 100px;
    background-color: #1e7e34;
    float: left;
}
.two{
    width: 200px;
    height: 200px;
    background-color: #0b2e13;
    overflow: hidden;
}
```
可以看到，第一个浮动的盒子会覆盖第二个盒子：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c19b593459f49dc8ea496a9cfff7886~tplv-k3u1fbpfcp-watermark.image)

也就是说，两个盒子是处于同一个BFC当中的，所以两个盒子会重叠。但是如果我们这两个盒子各具有BFC的话，就不会产生覆盖现象，相当于创建了两个房间**（（上面的第三个规则））**。
BFC的区域不会和浮动的盒子重叠，

所以我们可以通过触发第二个盒子的BFC来避免两个元素的覆盖。在第二个盒子加上这行代码：
```
    overflow: hidden;
```
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b3f1e8ff79943bda17336e3b8d6c1dd~tplv-k3u1fbpfcp-watermark.image)

重新运行一下，可以看到没有出现覆盖现象了。

2、清除元素内部浮动（也是父元素内部塌陷问题）

像是下面这个例子，可以看到，即使container是最外层的元素，但是它还是没有撑起来里面的两个元素。**（上面的第一个规则）**
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/839646df1699484bb52a6310eb7a693e~tplv-k3u1fbpfcp-watermark.image)

那么我们就可以触发最外层的container生成BFC,因为BFC在计算高度的时候会计算浮动元素的高度。这样外面的container就能撑起里面的浮动元素了。
```
.container{
    border: 5px solid #fcc;
    width: 400px;
    overflow: hidden;
}
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3078e792f21412d8d3afe8c2952282f~tplv-k3u1fbpfcp-watermark.image)



## 如何创建BFC
1、使用overflow:auto，也就是overflow 计算值(Computed)不为 visible 的块元素
2、使用display:flow-root
3、浮动元素（元素的 float 不是 none）
4、position的值为absolute或者fixed



MDN https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
