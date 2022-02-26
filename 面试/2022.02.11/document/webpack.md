### assets与static的区别
相同点：资源都可以在html中使用的

不同点：使用assets下面的资源，在js中使用的话，路径要经过webpack中file-loader编译，路径不能直接写。

assets中的文件会经过webpack打包，重新编译，推荐该方式。

而static中的文件，不会经过编译。项目在经过打包后，会生成dist文件夹，static中的文件只是复制一遍而已。

注意：如果把图片放在assets与static中，html页面可以使用；但在动态绑定中，assets路径的图片会加载失败，因为webpack使用的是commenJS规范，必须使用require才可以。

### 三种hash值

`hash`是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的`hash`值都会更改，并且全部文件都共用相同的`hash`值。(粒度整个项目)

`chunkhash`是根据不同的入口进行依赖文件解析，构建对应的`chunk`(模块)，生成对应的`hash`值。只有被修改的`chunk`(模块)在重新构建之后才会生成新的`hash`值，不会影响其它的`chunk`。(粒度`entry`的每个入口文件)

`contenthash`是跟每个生成的文件有关，每个文件都有一个唯一的`hash`值。当要构建的文件内容发生改变时，就会生成新的`hash`值，且该文件的改变并不会影响和它同一个模块下的其它文件。(粒度每个文件的内容)

### [webpack构建流程](https://juejin.cn/post/6844903614469636103)

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3. 确定入口：根据配置中的 entry 找出所有的入口文件；
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

简读

1. 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。

2. 编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。

3. 输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。

### loader

默认webpack只能处理js文件类型不支持其他类型，通过loader可以让webpack有处理其他文件类型的能力，其他文件类型转化成js文件类型。

### plugin

在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果 。基于事件流Tapable

### plugin中Compiler和 Compilation

Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 `options`，`loaders`，`plugins` 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；

Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。

Compiler 和 Compilation 的区别在于：Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。 

### webpack热更新原理

webpack内部是自己`开启了express应用`，添加了对webpack编译的监听，添加了和浏览器的websocket长连接，当文件变化触发webpack进行编译并完成后，`会通过sokcet消息告诉浏览器准备刷新` 