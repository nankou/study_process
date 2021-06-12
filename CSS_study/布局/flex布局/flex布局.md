## 一、概念
**Flex**是**Flexible Box**的缩写，意为”**弹性布局**”，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局。

是一种一维的布局模型（这里可以对比[网格布局](https://juejin.cn/post/6952843398235734030)是二维的布局模型）

-- 注意，设为Flex布局以后，子元素的`float、clear`和`vertical-align`属性将失效。

flex容器当中默认存在两根轴：**主轴和交叉轴**。

主轴（main axis）是水平上的，交叉轴（cross axis）是垂直上的
如下图所示
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8d2513acbfb4955abdb55bec15fc63b~tplv-k3u1fbpfcp-watermark.image)

- **主轴main axis**：即水平的这根轴

- **交叉轴cross axis**：即交叉的这根轴
- **主轴空间main size** ：即占据的主轴空间
- **交叉轴空间cross size** :即占据的交叉轴空间

## 二、容器的属性：
### 1、flex-direction 决定主轴的方向，也就是项目的排列方向
- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿
  接下来我们通过例子来使用这个属性。


```html
  <div class="box">
     <div class="item">1</div>
     <div class="item">2</div>
     <div class="item">3</div>
     <div class="item">4</div>
   </div>
```

```css
 .box {
        display: flex;
        flex-direction: row-reverse;
        height: 1000px;
        background-color: thistle;
    }
    .item {
        width: 150px;
        height: 150px;
        background-color: crimson;
        margin: 10px;
    }
```


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bfeafb10ad447a0b5a4cda4d51acdfe~tplv-k3u1fbpfcp-watermark.image)
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3deb31aaa66649e78aa50a15eda88994~tplv-k3u1fbpfcp-watermark.image)


### 2、flex-wrap ： 即项目排在轴线上的时候，如果轴线排不下的时候如何换行。

- **nowrap**（默认）：不换行。

- **wrap**：换行，第一行在上方

- **wrap-reverse**：换行，第一行在下方



### 1、justify-content：定义了项目在主轴上的对齐方式


- flex-start（默认值）：左对齐

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/105aa035cb214f20abeb42896a0e22e6~tplv-k3u1fbpfcp-watermark.image)

- flex-end：右对齐

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2740f9439e5c4625a5bb62fbcd87b935~tplv-k3u1fbpfcp-watermark.image)

- center： 居中

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10601cf0e82f47578c3ccfe012056a3c~tplv-k3u1fbpfcp-watermark.image)

- space-between：两端对齐，项目之间的间隔都相等。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8a0d95fecbf45ad9c2d9a8282fe88d8~tplv-k3u1fbpfcp-watermark.image)

- space-around：每个项目两侧的间隔相等。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fd4a9fd877d4bff89d17aa66c6da239~tplv-k3u1fbpfcp-watermark.image)

### 5、align-items：定义了项目在交叉轴上如何对齐 也就是垂直方向上的对齐
- flex-start：交叉轴的起点对齐
- flex-end：交叉轴的终点对齐
- center：交叉轴的中点对齐
- baseline：项目的第一行文字的基线对齐
- stretch（默认）：如果项目没有设置高度，或者设置为auto，将占满整个容器的高度
  这个属性跟上面类似，就不多赘述。

## 三、项目的属性
**什么叫项目的属性，就是类似作用例子当中在里面的盒子当中的**
### 1、flex-grow：定义项目的放大比例。
当flex-grow为1的时候，该项目会占据剩余的空间，

当flex-grow为2的时候，其他项目不变时，依然是占据剩余的空间，因为它的值最大。

如果其他项目有值为1的时候，值为2的会比值为1的占据空间大一倍。其他默认不变。

![flex-grow.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62526b9426f649fa97e47d559750731b~tplv-k3u1fbpfcp-watermark.image)

### 2、flex-shrink：定义项目的缩小比例，默认值为1
跟上面这个类似，就不多赘述。
### 3、flex-basis：定义了在分配多余空间之前，项目占据的主轴空间。默认值为auto。
比如我们设置为300px，则

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e31d9a76ef22472881c2e1214592b3d2~tplv-k3u1fbpfcp-watermark.image)

### 4、flex
flex其实就是前面三个属性的简写，默认值为**0 1 auto** 后两个属性为可选值。
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f584ec5f2324f9d803a3bcc4956e0a3~tplv-k3u1fbpfcp-watermark.image)

### 5、align-self 允许单个项目可以跟其他项目不一样的对齐方式，

比如我们在做一行内的布局时，需要**左边两个对齐上面，右边两个对齐下面**，则
可以设置最后两个盒子的`align-self`


```css
 .item3,.item4 {
        align-self: flex-end;
   }
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79b82f110a9c4209a34027d0068a2fd4~tplv-k3u1fbpfcp-watermark.image)



