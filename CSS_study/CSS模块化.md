## CSS模块化

## 什么是CSS模块化
CSS模块化就是通过将分模块进行封装,就像是我们在写vue组件的时候一样,也是一个一个模块的封装.

## 为什么要用CSS模块化
一个东西的产生肯定是有他的意义的,在没有CSS模块化的时候,如果我们在写组件的时候使用了相同的选择器(比如类名),那么后面的就会将前面的覆盖掉,这也就是样式命名的冲突.
另外,在没有CSS模块化的时候,每一个需要书写样式的类或者标签都是无顺序的排列在style标签当中的,层级结构非常的不清晰.

## 怎么实现CSS模块化
1、BEM命名规范
- B:block 块
- E:element 元素
- M:modifier 修饰符
这是一种命名规范,规范如下:
```
/* 块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。 */
.block {
}

/* 元素是块中的组成部分。元素不能离开块来使用。BEM 不推荐在元素中嵌套其他元素。 */
.block__element {
}

/* 修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观 */
.block--modifier {
}
```

2、CSS Modules
CSS就是import引入我们的CSS代码.
- 首先定义CSS文件
```
.className {
  color: green;
}
/* 编写全局样式 */
:global(.className) {
  color: red;
}

/* 样式复用 */
.otherClassName {
  composes: className;
  color: yellow;
}

.otherClassName {
  composes: className from "./style.css";
}

```
- 然后在js模块中导入CSS文件
```js
import styles from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">';

```

- 配置css-loader打包
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use:{
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          }
       }
    ]
  }
};
```

3、 另外还有一种方法就是js来写CSS,
这里就不详细说了

4、CSS的scoped
我们在style标签当中经常看到scoped属性.
``` css
<style scoped>
    .container{
        padding:20px;
        background: pink;
    }
</style>
```
我们可以通过scoped属性来隔离样式.

