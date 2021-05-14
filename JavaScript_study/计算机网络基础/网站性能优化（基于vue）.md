# 基于vue.js的优化

## 一、代码层面的优化

###1、避免重绘和重排
**v-if和v-show区分使用场景**

v-if是真正的条件渲染，当v-if改变的时候，该元素显示或者隐藏的过程中，会动态添加或者删除节点，也就是触发浏览器的重排。适用于不需要频繁切换条件的场景。

而v-show其实只是相当于display:none的作用，只是隐藏起来，不会触发浏览器的重排，适用于频繁切换条件的操作，

### 2、computed 和 watch使用场景
computed计算属性，计算属性允许我们对指定的视图，复杂的值计算。这些值将绑定到依赖项值，只在需要时更新。并且有缓存。

watch主要监控的是vue实例的变化，更多的是【观察】的作用，类似某些数据的监听回调。它可以监控一个一个变量或者一个对象，而且必须已经在data里面声明。watch一般用于监控路由、input输入框的值特殊处理等等，它比较适合的场景是一个数据影响多个数据。

运用场景：
当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；

当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
### 3、v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
（1）在进行列表遍历渲染的时候，为每一个item添加唯一的key值，方便vue.js内部机制精准的找到数据。

（2）v-for比v-if优先级高，如果每次都要遍历整个数组，就会影响渲染速度。

### 4、事件的销毁
Vue组件销毁的时候，会自动清理它与其他实例的连接，解绑他的全部指令及事件监听器，但是仅限于组件本身的事件。如果在js内使用addEventListen等方式是不会自动晓辉的。所以在生成的时候也要记得手动移除这些事件的监听，避免造成内存泄露。

```
created() {
  addEventListener('click', this.click, false)
},
beforeDestroy() {
  removeEventListener('click', this.click, false)
}
```

### 5、图片懒加载
在项目中使用Vue 的 Vue-lazyload插件
```
npm install vue-lazyload --save-dev  // 安装插件
import VueLazyload from 'vue-lazyload' // 在main.js中引入并使用
Vue.use(VueLazyload)  // 使用
```

### 6、路由懒加载
针对问题：当有很多路由引入的时候，webpack打包后的文件很大，所以当资源加载过多的时候，页面会出现白屏的情况，不利于用户体验
解决方案：将不同的路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件，就会大大提高首屏显示的速度，虽然可能会降低其他页面的速度。
```
const Foo = () => import('./Foo.vue')
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})

```
### 7、第三方插件的按需引入
比如element-ui，只需要引入要用的组件，
先在babel.config.js里面安装
```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

```
然后在main.js中引入要用的组件
```
import Vue from 'vue';
import { Button, Select } from 'element-ui';

Vue.use(Button)
Vue.use(Select)

```
## 二、webpack层面的优化
###1、webpack对图片进行压缩
使用**image-webpack-loader**来压缩图片
```
npm install image-webpack-loader --save-dev  // 安装插件

// 然后在webpack.base.conf.js中配置
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use:[
    {
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      }
    }
  ]
}

```
###2、减少es6转化成es5的冗余代码

### 3、webpack配置的优化
## 基本的web优化

###1、开启gzip压缩
安装：
```
npm install compression --save
```
```
var compression = require('compression');
var app = express();
app.use(compression())
```

###2、浏览器缓存
###3、CDN的使用
###4、使用Chrome Performance查看性能瓶颈
performance面板可以录制js执行细节以及事件。