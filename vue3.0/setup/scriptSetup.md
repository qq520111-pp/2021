## setup语法糖[链接](https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95)

<script setup> 中可以使用顶层 await。结果代码会被编译成 async setup()：

当使用 `<script setup>` 的时候，任何在 `<script setup>` 声明的顶层的绑定 (**包括变量，函数声明，以及 import 引入的内容**) 都能在模板中直接使用：

```vue
<script setup>
// 导入方法
import { capitalize } from './helpers'
// 导入组件
import MyComponent from './MyComponent.vue'
    
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log(msg)
}

// emit - props
const props = defineProps({
  foo: String
})
const emit = defineEmits(['onClick'])
const add = ()=>{
  emit("onClick")
}

</script>

<template>
    <div>
  	  <MyComponent />
      <div @click="log">{{ msg }}</div>
 	  <div>{{ capitalize('hello') }}</div>
    </div>
</template>
```

