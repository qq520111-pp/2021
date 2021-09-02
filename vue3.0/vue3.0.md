## 性能提升

## 源码升级

* 通过proxy代替defineProperty
* 虚拟DOM的重写
* 实现tree-shaking

## 拥抱TS

* 支持tpyescript

## 新特性编写

> 优化点
>
> 1. 替换definedproperty为proxy为代理对象。》
>
>    > 对象添加新属性不需要重新设置get/set。
>    >
>    > 直接监听数组变化。不需要重写方法。
>
> 2. diff更新 -
>
>    > patch的时候根据创建时添加的静态标识。来进行对比. 
>
> 3. 静态提升。
>
> 4. 事件监听器缓存.
>
> 5. 新添加typescript类型检测。
>
> 6. composition组合式api。

api

- 组合api(compositions)

  > 当一个项目过庞大的时候，编写的代码就会出现难以维护各种逻辑功能`代码臃肿`，然后通过setup的方式把一个页面的各个功能提取出去。分为细小的粒子进行编写、进行组合。

  * setup注意
    1. 在beforeCreate前执行
    2. 只能是同步函数。

- reactive

  > 定义引用类型。直接修改响应式数据.

  * 注意
    1. 值必须是对象
    2. 传入其他对象时，重新赋值才能更新视图; 例Date；

- ref

  > 定义基本类型。
  >
  > 定义响应式变量。let  count  = ref(0);
  >
  > 改变count.value会响应视图的变化。 相当于reactive（{value：0}）；所以要添加一层value；
  >
  > ref在template中不需要使用.value，内部会判断是否为ref类型然后自动添加.value。

- shallowRef

  > 非递归监听数据变化，响应式。

  * 注意
    1. 只监听.value的值变化，不是监听第一层。
    2. triggerRef（主动更新视图，深层）

- shallowReactive

- toRaw

  > toRaw方法会把代理对象的proxy里拿到原始的数据；

  * 注意
    1. 用此方法可以提高性能，不更新视图；

- watchEffect

## 说明

vue2的Object.definedProperty()  // 新添加值得时候都要为其添加新的getters/setters;
// 响应式 / 依赖收集(dep)
// 虚拟dom (vNode)
// diff (打补丁)
// 组件化()

//vue3 -  函数式抽离/typescript/代码量
setup
react
effect
watchEffect

//mixin => 高阶组件 => 作用域插槽 => setup;
命名冲突

//结构赋值 => 手动结构
防止命名冲突 , 表达代码可观性.