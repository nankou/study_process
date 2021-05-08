/* 
 * author: nankou
 * create: 2021-5-8
 * description: 符合PromiseA+规范的自定义Promise，已通过Promise/A+官方的测试工具测试
 */

// 先定义三个常量表示promise的三个状态，后面会经常用到，索性先声明 方便使用
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

/* 
Promise构造函数
excutor：执行器函数（同步执行）
*/
function Promise(excutor) {
    //将当前promise对象保存起来，以便resolve和reject里面访问
    const that = this;

    this.status = PENDING; // 给当前promise对象指定初始状态，初始状态为pending
    this.value = null; // 初始化value
    this.reason = null; // 初始化reason

    // 构造函数里面添加数组存储成功和失败的回调
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    function resolve(value) {
        // 如果当前状态不是pending，直接结束
        if (that.status !== PENDING) {
            return
        }
        // 如果当前状态是pending，进行下一步
        // 将状态改成fulfilled
        that.status = FULFILLED;
        // 保存value数据
        that.value = value;

        // 如果有待执行callback函数，立即执行回调函数
        if (that.onFulfilledCallbacks.length > 0) {
            // 遍历数组将所有成功的回调拿出来执行
            that.onFulfilledCallbacks.forEach(callback => {
                callback(that.value);
            });
        }

    }

    // reject方法参数是reason
    function reject(reason) {
        // 如果当前状态不是pending，直接结束
        if (that.status !== PENDING) {
            return
        }
        // 将状态改成rejected
        that.status = REJECTED;
        // 保存reason数据
        that.reason = reason;
        // 判断是否有待执行函数
        if (that.onRejectedCallbacks.length > 0) {
            // resolve里面将所有失败的回调拿出来执行
            that.onRejectedCallbacks.forEach(callback => {
                callback(that.reason);
            });
        }

    }
    //立即同步执行excutor
    try {
        excutor(resolve, reject);
    } catch (error) { // 如果执行器抛出异常，那promise对象变为rejected状态
        reject(error);
    }
}

/*
Promise 解决过程
抽象操作，表示为 [[Resolve]](promise, x)
 */
function resolvePromise(promise, x, resolve, reject) {
    // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
    // 这是为了防止死循环
    if (promise === x) {
        return reject(new TypeError('The promise and the return value are the same'));
    }

    if (x instanceof Promise) {
        // 如果 x 为 Promise ，则使 promise 接受 x 的状态
        // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
        // 这个if跟下面判断then然后拿到执行其实重复了，可有可无
        x.then(function(y) {
            resolvePromise(promise, y, resolve, reject);
        }, reject);
    }
    // 如果 x 为对象或者函数
    else if (typeof x === 'object' || typeof x === 'function') {
        if (x === null) {
            return resolve(x);
        }

        try {
            // 把 x.then 赋值给 then 
            var then = x.then;
        } catch (error) {
            // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
            return reject(error);
        }

        // 如果 then 是函数
        if (typeof then === 'function') {
            var called = false;
            // 将 x 作为函数的作用域 this 调用
            // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
            try {
                then.call(
                    x,
                    // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                    function(y) {
                        // 如果 resolvePromise 和 rejectPromise 均被调用，
                        // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                        // 实现这条需要前面加一个变量called
                        if (called) return;
                        called = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    function(r) {
                        if (called) return;
                        called = true;
                        reject(r);
                    });
            } catch (error) {
                // 如果调用 then 方法抛出了异常 e：
                // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
                if (called) return;

                // 否则以 e 为据因拒绝 promise
                reject(error);
            }
        } else {
            // 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
}

/*
Promise原型对象的then()
 */
Promise.prototype.then = function(onFulfilled, onRejected) {
    // 如果onFulfilled不是函数，给一个默认函数，返回value
    // 后面返回新promise的时候也做了onFulfilled的参数检查，这里可以删除，暂时保留是为了跟规范一一对应，看得更直观
    var realOnFulfilled = onFulfilled;
    if (typeof realOnFulfilled !== 'function') {
        realOnFulfilled = function(value) {
            return value;
        }
    }

    // 如果onRejected不是函数，给一个默认函数，返回reason的Error
    // 后面返回新promise的时候也做了onRejected的参数检查，这里可以删除，暂时保留是为了跟规范一一对应，看得更直观
    var realOnRejected = onRejected;
    if (typeof realOnRejected !== 'function') {
        realOnRejected = function(reason) {
            throw reason;
        }
    }

    const that = this; // 保存一下this

    // 如果当前是FULFILLED状态，异步执行onResovle并改变return的promise状态
    if (this.status === FULFILLED) {
        var promise2 = new Promise((resolve, reject) => {
            setTimeout(function() {
                try {
                    // 如果抛出异常，return的promise就会失败，reason就是error
                    // 如果回调函数执行返回非promise，return的promise就会成功，value就是返回的值
                    // 如果回调函数执行返回是promise，return的promise的结果就是这个promise的结果
                    if (typeof onFulfilled !== 'function') {
                        resolve(that.value);
                    } else {
                        var x = realOnFulfilled(that.value);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                } catch (error) {
                    reject(error);
                }
            }, 0);
        })
        return promise2; //返回一个新的promise对象
    }

    // 如果当前是rejected状态，异步执行onReject并改变return的promise状态
    if (this.status === REJECTED) {
        var promise2 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    if (typeof onRejected !== 'function') {
                        reject(that.reason);
                    } else {
                        var x = realOnRejected(that.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                } catch (error) {
                    reject(error);
                }
            }, 0);
        });
        return promise2; //返回一个新的promise对象
    }

    // 如果还是PENDING状态，将回调保存下来
    if (this.status === PENDING) {
        var promise2 = new Promise(function(resolve, reject) {
            that.onFulfilledCallbacks.push(function() {
                setTimeout(function() {
                    try {
                        if (typeof onFulfilled !== 'function') {
                            resolve(that.value);
                        } else {
                            var x = realOnFulfilled(that.value);
                            resolvePromise(promise2, x, resolve, reject);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            });
            that.onRejectedCallbacks.push(function() {
                setTimeout(function() {
                    try {
                        if (typeof onRejected !== 'function') {
                            reject(that.reason);
                        } else {
                            var x = realOnRejected(that.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }, 0)
            });
        });
        return promise2; //返回一个新的promise对象
    }
}

/*
Promise测试
 */
Promise.deferred = function() {
    var result = {};
    result.promise = new Promise(function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
    });

    return result;
}

/*
Promise原型对象的catch()
指定失败的回调函数
返回一个新的promise对象
 */
Promise.prototype.catch = function(onRejected) {
    return this.then(undefined, onRejected)
}

/* 
Promise函数对象的resolve方法 
返回一个指定结果的成功的promise
*/
Promise.resolve = function(value) {
    // 返回一个成功/失败的promise
    return new Promise((resolve, reject) => {
        // 判断value是否为promise
        if (value instanceof Promise) { // value是promise => 使用value的结果作为promise的结果
            value.then(resolve, reject)
        } else { // value不是promise => promise变为成功，数据是value
            resolve(value)
        }
    })
}

/*
Promise函数对象的reject方法
返回一个指定reason的失败的promise
*/
Promise.reject = function(reason) {
    // 返回一个失败的promise
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}

/*
Promise函数对象的all方法
返回一个promise，只有当所有promise都成功时才成功，否则失败
*/
Promise.all = function(promises) {
    // 用来保存所有成功value的数组
    const values = new Array(promises.length)

    // 用来保存成功promise的数量
    let resolvedCount = 0 // 计数器
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return resolve(values)
        }
        // 遍历promises获取每个promise的结果
        promises.forEach((p, index) => {
            p.then(
                value => {
                    resolvedCount++ //成功的数量+1
                    // p成功，将成功的value保存到values
                    // values.push(value)
                    values[index] = value

                    // 如果全部成功了，将return的promise改变成功
                    if (resolvedCount === promises.length) {
                        resolve(values)
                    }
                },
                reason => { // 只要有一个失败了，return的promise就失败
                    reject(reason)

                }
            )

        })
    })
}

/* 
Promise函数对象的race方法 
返回一个promise，其结果由第一个完成的promise结果决定
*/
Promise.race = function(promises) {
    // 返回一个promise
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return resolve()
        }
        // 遍历promises获取每个promise的结果
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                value => { // 一旦有成功了，将return的promise状态变为成功
                    resolve(value)

                },
                reason => { // 只要有一个失败了，return的promise就失败
                    reject(reason)

                }
            )

        })
    })
}


/* 下面都是自定义函数 */
/*
返回一个promise对象，它在指定的时间后才确定结果 
*/
Promise.resolveDelay = function(value, time) {
    // 返回一个成功/失败的promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // value是promise
            if (value instanceof Promise) { // 使用value的结果作为promise的结果
                value.then(resolve, reject)
            } else { // value不是promise => promise变为成功，数据是value
                resolve(value)
            }
        }, time);
    })
}

/*
返回一个promise对象，它在指定的时间后才有失败
*/
Promise.rejectDelay = function(reason, time) {
    // 返回一个失败的promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(reason)
        }, time);
    })
}


module.exports = Promise;