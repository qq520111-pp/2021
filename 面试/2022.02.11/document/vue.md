## 面试题总结

### MVVM是什么,MVVM和MVC的区别

MVVM在是一种软件架构设计模式，它通过分离关注点来改进代码的组织方式。可以让用户更专注于业务逻辑，在vue中的v-model就可以很好的表现这种模式。

MVVM -`Model View ViewModel`，它包括 DOM Listenters 和 Data bindings，前者实现了页面与数据的绑定，当数据发生变化的时候会自动渲染页面。后者实现了数据与页面的绑定，当页面操作数据的时候 DOM 和 Model 也会发生相应的变化。

MVC:  view => control => model =>(数据更新通知视图更新) view **数据模型和视图模型耦合**

### v-if和v-show的区别

v-show是通过display: none属性去隐藏一个元素；v-if是直接重新创建和卸载此节点；

多次显示隐藏时，v-if会不断的创建、销毁增加性能开销。

### v-if为什么不建议和v-for一起使用

v-for的权限比v-if高，每次循环的时候都会做一次判断。可通过计算数据通过js过滤掉不显示的节点。

### Vue组件中，为什么data是一个函数

创建组件的时候，这个组件有可能被复用，通过函数返回数据；每个复用组件都会返回独有数据，互不干扰。

### Vue生命周期调用顺序

* 父子组件的挂载过程

父beforeCreate  => 父created => 父beforeMount  => 子beforeCreate  => 子created  => 子beforeMount => 子mounted   => 父mounted  

* 子组件的更新过程

父beforeUpdate => 子beforeUpdate => 子updated => 父updated 

* 销毁过程

父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

### Vue组件通讯方式

1. vuex
2. 事件车（eventBus）
3. v-bind
4. v-on
5. provide/Iinject

1、2是跨组件通讯，全局的类型，3、4属于父子组件传值，5是一个祖先跟子孙级别的通讯，

provide传入无响应式数据，默认给第一层（引用类型第二层属性没有响应式）添加响应式数据，直接更改该值是响应视图。

provide传入响应式数据，数据更改后代视图也会更新。

### keep-alive的使用

是vue内置的一个组件，在组件进行切换时，可以用于保留组件状态或避免重新渲染。

includes、excludes允许组件有条件的进行缓存，activated/deactivated组件的钩子函数。

### 说一说vue自定义指令，用来干嘛？

### 父组件怎么监听子组件的钩子函数触发

1. 通过v-on传入事件，在子组件对应的钩子函数$emit()
2. @hook:钩子函数=“callback“

### vue-router的钩子函数

路由前置钩子（beforeEach(to,from,next)）可做路由权限判断，路由拦截。

路由后置钩子（afterEach(to,from,next)）

路由钩子（beforeEnter）

组件路由钩子（beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave）

* 不同路由复用一个组件，需要对参数的变化做出响应的话，通过监听路由信息

### vuex使用及原理

相关api使用，具体看官网五个属性。vuex是基于vue提供响应式api（ defineReactive）进行数据管理。

### computed和watch作用及区别

compute，多对一会对数据进行**缓存**。watch，监听某个值的变化执行回调。

计算属性一般用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑

### Vue怎么监听数组的变化（重点）

重写数组的方法，通过**装饰器模式**对数组进行了重写。把原有的数组方法进行保存，然后通过函数封装在内部去调用，并且更新对应视图。(纯数组情况不监听，对象数组监听)

### Vue在v-for为什么建议加上key，而且不推荐index做索引（重点）

vue在更新dom的时候，会复用之前的旧节点， 通过 **diff算法 **对比新旧节点的时候会根据 **vNode **的key进行高效复用。

如果使用index做标识的话，中间插入一条数据以后，后面的相关数据因为index改变，key值不一样都无法复用，中间删除节点后面index会出现错乱，普通元素没问题选择框的话，会出现bug。

### 说一说Vue的diff算法

vue的diff算法通过深度优先 + 同级比较 + 双指针实现。在数据更新后，vue在patch函数过程中，比较当前新旧节点是否一致、是否都包含子节点。如果都有子节点会调用updateChildren，传入新旧子节点进行对比，对比的方式有五种。头头、尾尾、头尾、尾头以及无规则对比（建立旧子节点的key、index 的映射表，通过新子节点的key找到旧子节点的index位置进行高效复用），对比完后会根据新旧子节点的开始索引和结束索引对比，进行添加和删除对应节点。

### mixin使用及原理

Vue的mixin的作用就是抽离公共的业务逻辑，原理类似对象的继承，当组件初始化的时候，会调用mergeOptions方法进行合并，采用策略模式针对不同的属性进行合并。执行顺序 全局 => 组件mixin => 组件。

### Vue的双向绑定原理（重点）

当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖，在属性修改时通知变化。

每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。

vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调。

### nextTick作用及原理

Vue.nextTick主要用于数据更新完以后可以获取到实时的dom信息，内部把回调函数封装成一个异步任务，等待下一轮事件循环更新。

内部会进行一个异步任务的降级处理 promise => mutationObserve => setImmediate  => settimeout

js任务队列的考察。可以补充相关知识点，宏任务、微任务。

### keep-alive原理

略

### new Vue()过程

### vue3.0和vue2.0区别

ts、proxy、组合式api



原理参照：https://juejin.cn/post/6844904031983239181#heading-7

