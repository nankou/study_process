> 整理了HTML当中的标签合集，大部分都是常用的。

- `<html>`：定义文档，限定了文档的开始点和结束点，在它们之间是文档的头部和主体。此元素可告知浏览器其自身是一个 HTML文档。

- `<head>`：文档的头部，在标签内可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。

下面介绍几个可以放在`<head>`标签里面的：

- `<base>`：为页面上的所有链接规定默认地址或默认目标。例如：

```html
<base href="http://www.w3school.com.cn/i/" />
<base target="_blank" />
```

- `<link>`：定义文档与外部资源的关系，最常见的是链接样式表。

- `<meta>`：可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

- `<script>`：用于在 HTML 页面中插入一段 JavaScript，或者引入外部js文件。例如：

```js
<script src="../test.js"></script>
<script type="text/javascript">
document.write("Hello World!")
</script>
```

- `<style>`：用于为 HTML 文档定义样式信息。

- `<title>`：可定义文档的标题。

~~···················      分割线      ····························~~
- `<body>`：文档的主体，包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）

- `<a>`：该标签定义超链接，用于从一张页面链接到另一张页面。

- `<address>`：定义文档或文章的作者/拥有者的联系信息。

- `<audio>`：定义声音，比如音乐或其他音频流。

- `<b>`：规定粗体文本。同样也能够使用 CSS "font-weight" 属性来设置粗体文本。

- `<big>`：显示大号字体效果。

- `<br>`：插入一个简单的换行符。

- `<button>`：定义一个按钮，在 button 元素内部，可以放置内容，比如文本或图像。

- `<canvas>`：定义图形，比如图表和其他图像

- `<dialog>`：定义对话框或窗口。

- `<div>`：定义文档中的分区或节。它是一个块级元素。

- `<dl>`：定义了定义列表，与`<dd>`和`<dt>`搭配使用。

- `<fieldset>`：可将表单内的相关元素分组，将表单内容的一部分打包，生成一组相关表单的字段。

- `<form>`：用于为用户输入创建 HTML 表单，表单能够包含 input 元素，比如文本字段、复选框、单选框、提交按钮等等。

- `<frame>`：定义 frameset 中的一个特定的窗口（框架）。

- `<h1>`-`<h6>`：定义六个不同的 HTML 标题，顺序是从大到小。

- `<hr>`：在 HTML 页面中创建一条水平线。

- `<i>`：显示斜体文本效果。

- `<img>`：向网页中嵌入一幅图像。

- `<input>`：输入表单控件，根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、掩码后的文本控件、单选按钮、按钮等等。

- `<li>`：定义列表项目，与`<ul>`搭配使用。

- `<map>`：定义一个客户端图像映射。图像映射（image-map）指带有可点击区域的一幅图像。

- `<select>`：创建单选或多选菜单，与`<option>`搭配使用。

- `<small>`：呈现小号字体效果。

- `<source>`：为媒介元素（比如 `<video>` 和` <audio>`）定义媒介资源。

- `<strong>`：把文本定义为语气更强的强调的内容。

- `<svg>`：定义 SVG 图形的容器。

- `<table>`：定义 HTML 表格

- `<tbody>`：用于组合 HTML 表格的主体内容，与`<thead>`和`<tfoot>`搭配使用。

- `<td>`：定义 HTML 表格中的标准单元格，与`<th>`和`<tr>`搭配使用。

- `<textarea>`：定义多行的文本输入控件。

- `<tt>`：呈现类似打字机或者等宽的文本效果。

- `<video>`：定义视频，比如电影片段或其他视频流。

