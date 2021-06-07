
## 选择器的类别

###  一、简单选择器
通过**元素类型、元素的类以及元素id**匹配元素。
#### 1、类型选择器（元素选择器）

类型选择器就是选择一个HTML元素名（不区分大小写）。

```
<style>
  div{
      background-color: #1e7e34;
      height: 200px;
  }
</style>
```

像上面这段代码，代表使用类型选择器选中了**标签名为div的所有元素**，并将这些元素的背景颜色和高度进行修改。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ad0f47cd509437cb65cfa49372b1e6a~tplv-k3u1fbpfcp-watermark.image)

#### 2、类选择器

顾名思义，类选择器就是**选择元素的类名**，即class，类选择器需要使用一个点.加上类名组成。

```
.box{
  background-color: #7b1e7e;
}
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7187db007b9444e8b82c4bc4ab2fa5de~tplv-k3u1fbpfcp-watermark.image)

#### 3、ID选择器

ID选择器由`#`符号和id名组成。class可以重复，但是**id是唯一的**。

```
#boxId{
  background-color: #1e7e54;
}
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d77c3d0e6ba452a8883dd98599163ff~tplv-k3u1fbpfcp-watermark.image)


#### 4、通用选择器

通用选择器也就是符号`*`，它选择的是页面当中的所有元素。比如我们在开发过程中可能想要将整体的边框去掉，便可以使用。

```
*{
  margin: 0;
  padding: 0;
}
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92e6e73b208f4af5b4f85f848c061e86~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d528e894901474ebda495ad2869b409~tplv-k3u1fbpfcp-watermark.image)



###  二、属性选择器
通过属性、属性值匹配元素。通用语法由`[]`组成，包含属性名称，和属性值。

#### 存在和值属性选择器
```
[class]{
    /* [属性名] */
}
[class=one]{
    /* [属性名=属性值] */
}
[class~=three]{
    /* [属性名~=属性值] */
}
```


#### 子串值属性选择器
```
[class|=one]{
    /* [属性名|=属性值]：选择属性值或属性值开头的元素 */
}
[class^=one]{
    /* [属性名^=属性值]：选择以属性值开头的元素 */
}
[class$=three]{
    /* [属性名$=属性值]：选择以属性值结尾的元素 */
}
[class*=three]{
    /* [属性名*=val]：选择属性名的的值中包括字符串val的元素 */
}
```

### 三、伪类
匹配确定状态的元素。也就是在**特定状态下才能呈现对应的样式**，其他状态是另一种样式。

我们比较常用的是
`:active` `:checked` `:disabled` `:hover` `:first-child` `:last-child` `:visited `

另外还有
`:any`
`:default`
`:dir()`
`:empty`
`:enabled`
`:first`
`:first-of-type`
`:fullscreen`
`:focus`
`:indeterminate`
`:in-range`
`:invalid`
`:lang()`
`:last-of-type`
`:left`
`:link`
`:not()`
`:nth-child()`
`:nth-last-child()`
`:nth-last-of-type()`
`:nth-of-type()`
`:only-child`
`:only-of-type`
`:optional`
`:out-of-range`
`:read-only`
`:read-write`
`:required`
`:right`
`:root`
`:scope`
`:target`
`:visited`


### 四、 伪元素
匹配处于相关的确定位置的元素。跟伪类类似，不同的是，在CSS3当中，伪元素用两个冒号来表示（**::**）

伪元素是创建了一个DOM树外的元素（伪类的操作对象是DOM树中已经有的元素）

`::after`
`::before`
`::first-letter`
`::first-line`
`::selection`
`::backdrop`

但是因为兼容性问题，其实大部分还是使用统一的单冒号。


### 五、 组合器
匹配组合两个或更多的选择器。

在CSS当中，我们不仅仅可以使用单个选择器，也可以将多个选择器组合在一起，这样更方便我们开发。

```html
<div class="container">
    <h6>h6</h6>
    <div class="one">1</div>
    <div class="two">2</div>
    <h1>h1</h1>
    <div class="three">
        <div class="three_one">3.0</div>
        <div class="three_two">3.1</div>
        <div class="three_three">
            <div class="three_three_one">3.2.1</div>
        </div>
    </div>
</div>
```

- **后代选择器（A B）**：选择A元素和嵌套在A元素的后代元素。B元素可以不是直接后代元素，比如是A元素的后两层。

```
.three .three_three_one{
    background-color: #1e7e34;
}
```

- **子选择器（A > B）**：选择A元素和A元素的直接子元素，也就是B元素是A的下一层。

```
.three > div{
    background-color: #1e7e34;
}
```

- **相邻兄弟选择器（A + B）**：选择A元素和A元素的直接兄弟元素，也就是说B元素在A元素的旁边，处于同一层。

```
h6 +  div{
    background-color: #1e7e34;
}
```

- **通用兄弟选择器（A ~ B）**：选择A元素和A元素的兄弟元素（不一定要挨在一起），处于同一层。

```
h6 ~  h1{
    background-color: #1e7e34;
}
```


### 六、多用选择器
不是单独的选择器，匹配由这些选择器选择的所有元素。

## 权重计算规则


参考文章：
[W3C CSS选择器参考手册](https://www.w3school.com.cn/cssref/css_selectors.asp
)


