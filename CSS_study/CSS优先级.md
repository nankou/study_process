
## 一、什么是优先级：
即通过优先级来判断如何在页面上显示这些样式。优先级是基于不同种类的选择器组成的匹配规则。
关于CSS的选择器可以看这篇[《一次性搞懂CSS选择器》](https://juejin.cn/post/6970500385479852040)，这里就不重复讲啦。

## 二、优先级是怎么样计算的？
**注意: 文档树中元素的接近度对优先级没有影响**

比如我们在这样一段代码当中，对同一个div进行样式的设定。

```html
<body>
<div id="box" class="container"></div>
</body>
```

### 通配符 VS 标签选择器

当我们对其声明**通配符和标签选择器**两种的时候，由于**标签选择器的优先级大于通配符**，所以在盒子里面呈现绿色。

```CSS
    .container {
        text-align: center;
        color: white;
        height: 200px;
        width: 200px;
    }
    * {  
        background-color: firebrick;    /* 通配符 */
    }
    div {
        background-color: green;   /* 标签选择器 */
    }
```
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7cf4552696d840deb93dc87a0b9481b0~tplv-k3u1fbpfcp-watermark.image)


### 属性选择器VS标签选择器

同样的例子，我们修改一下选择器的类型。

```css
    div {
        background-color: green;   /* 标签选择器 */
    }
    .container {
        background-color: crimson;   /* 属性选择器 */
    }
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4180a7664e84fc4be8ed1c422627280~tplv-k3u1fbpfcp-watermark.image)

可以看到，**属性选择器的优先级是大于标签选择器的**，所以呈现红色。


### id选择器 VS 属性选择器


```css
    .container {
        background-color: crimson;   /* 属性选择器 */
    }
    #box {
        background-color: gold;   /* id选择器 */
    }    
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88fc8996e805469bb284377193506e1b~tplv-k3u1fbpfcp-watermark.image)
由此可见，**id选择器的优先级大于属性选择器**，所以呈现金色。

### 行内样式 VS id选择器

我们在开发中其实也是会写到行内样式的，接下来我们就来看看哪个的优先级更高。


```html
<div id="box" class="container" style="background-color: hotpink;"></div>
```

```css
#box {
  background-color: gold;   /* id选择器 */
} 
```
显示的效果👇

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e0bdd9a3f1f4fe2b238b899cf6b5612~tplv-k3u1fbpfcp-watermark.image)

**所以行内样式其实是比普通的选择器的优先级高的。**

### !important

另外，`!important`是例外的规则，当一个样式当中使用了`!important`规则时，会覆盖其他的任何。

比如我们在刚刚优先级最低的通配符当中设置背景颜色，其他选择器样式都不变。

```css
 * {
   background-color: indigo !important;
}
/* 标签选择器 */
div {
  background-color: green;
}
/* 属性选择器 */
.container {
   background-color: crimson;
}
/* id选择器 */ 
#box {
   background-color: gold;
}
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6f6788f7f18449e9a17bb491aaf5969~tplv-k3u1fbpfcp-watermark.image)

可以看到，**使用`!important`的优先级是最高的**，所以覆盖了前面的样式。

但是盲目使用`!important`是一种**坏习惯**，因为它破坏了样式表当中的规则，当我们在调试的时候，就会变得非常的困难。


**最后总结一下选择器上的优先级：**

**!important>行内样式>id选择器>class选择器/属性选择器>标签选择器>通配符***







