# JavaScript内存泄露

## 一、什么是内存泄露
所谓内存泄漏，就是用完的内存**没有在生命周期的释放期释放**，就会导致内存泄露。当内存泄漏严重的时候，**会导致整个系统卡顿甚至崩溃**。

## 二、JavaScript内存管理
像是C C++这类语言，开发人员可以直接控制内存的分配和回收。但是在JavaScript当中，内存空间都是由程序自己处理的，也就是JavaScript具有**自动垃圾回收机制**。

### 1、内存的生命周期
- **分配期**
  在这个时期分配所需要的内存。

- **使用期**
  使用分配到的内存，也就是进行读写操作。

- **释放期**
  在这个时期就应该将不需要的内存释放和归还。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76db7d2b4f00441d961ee3f13c84708e~tplv-k3u1fbpfcp-watermark.image)

### 2、内存分配
在JavaScript当中，给某一个数据类型的变量赋值就是自动的内存分配，比如：

```js
let num = 123  // 给数值变量分配内存
const str = "ababa"  // 给字符串分配内存
const obj = {  // 给对象分配内存
    name: "ababa",
    id: 1
}
const arr = [1,2,3] // 给数组分配内存
function fn(param){ // 给函数分配内存
    return param
}
```

### 3、内存使用
上面提到，使用内存就是对分配内存进行**读取和写入**的操作。比如：
```js
let num = 123  // 给数值变量分配内存
function fn(param){ // 给函数分配内存
    return param
}

fn(num)  // 进行读写操作
```

### 4、内存释放
为了避免内存泄漏，我们先看看**JavaScript垃圾回收机制**。内存泄露一般都是发生在垃圾回收的过程中。
因为JavaScript 的内存回收机制虽然能回收绝大部分的垃圾内存，但是还是存在回收不了的情况，如果存在这些情况，需要我们手动清理内存。

### 5、JavaScript垃圾回收机制
JavaScript当中有两种常用的垃圾回收机制：**标记清除**和**引用计数**。

#### （1）标记清除法
这就是JavaScript当中**最常用的垃圾回收方式**。也就是在引用之后，将无用的内存数据进行**标记**，垃圾收集器会将标记的变量删除。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bd3008d882b4670a9d3e19d4a89a1be~tplv-k3u1fbpfcp-watermark.image)


#### （2）引用计数法
所谓"引用计数"是指语言引擎有一张"引用表"，
保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。


### 6、JavaScript内存泄露的常见场景
#### （1）被遗忘的定时器
我经常看到身边很多同学写定时器写的很多，但是定义了定时器之后就没有考虑到清除定时器。这就会造成一定程度的内存泄露。

```js
  // 被遗忘的定时器
  function f() {
      let obj = new Array(100000)
      setInterval(() => {
          let myObj = obj
      },1000)
  }
```
上面这段代码就是典型的使用定时器的方式，这样的做法就会使内存泄露，正确的做法应该是：

```js
  // 被遗忘的定时器
  function f() {
      let obj = new Array(100000)
      let count = 0  //使用计数器
      let timer = setInterval(() => {
          if (count === 5) clearInterval(timer);  // 当计数器执行到第五次的时候清除定时器，防止内存泄漏
          let myObj = obj
          count++  // 执行成功后计数器加一
      },1000)
      
  }
  ```


#### （2）控制台的打印
控制台的打印同样也会造成内存泄漏，我们经常会在开发过程中给写下很多`console`，在测试完成之后应该要记得删除这些测试语句。

#### （3）意外的全局变量
什么叫意外的全局变量？比如我们看下面这段代码
```js
  function fn(num){
      basicNum = 1
      return basicNum+num
  }

  fn(2)
```
全局的变量在一般情况下是不会被垃圾回收器回收的，像是上面的这个变量`basicNum`，**没有进行声明却直接赋值**，这样导致我们赋值给这个全局变量的内存空间会一直存在。
如果赋值的是一个很大的数组，那么该内存就会比较大。

其实如果自己平时不注意的话，也可以开启严格`strict`模式，这样就能检测到没有注意的时候，出现报错警告⚠。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b41a2dffd5924830a855fdaacb3b92d5~tplv-k3u1fbpfcp-watermark.image)


#### （4）被遗忘的事件监听器

我们在开发过程中写了很多无用的事件监听器，忘记清理的话也会造成内存泄露。

