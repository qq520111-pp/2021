### npm 

> npm 能更好的对项目依赖进行管理，安装、更新、卸载相关依赖。

执行npm run的时候，内部会创建一个对应sheel环境，这个sheel环境下会将当前目录的`node_modules/.bin`子目录加入`PATH`变量，执行结束后，再将`PATH`变量恢复原样。 因此可以直接在script脚本上写上包名。

#### 脚本参数

所有的执行JS脚本的参数，都会被收集到 process.argv这个对象上。

第一个参数是 `node` 命令的完整路径。

第二个参数是正被执行的文件的完整路径。

所有其他的参数从第三个位置开始。

#### 环境变量

package_script 命令行的形式 ，通过键值对的形式赋值，所有的都会被收集到 process.env这个对象上。

````
$ *** key=value 
````

#### 并行命令

````
$ *** & *** 
````

#### 串行命令

````
$ *** && ***
````

#### npx

简写 ./node_module/.bin 路径

#### 依赖

 [cross-env](https://link.segmentfault.com/?enc=t8%2B0im%2FmEm14UACyvyTfkA%3D%3D.annrPYowwQHGi%2BbFXhvmILidOhOEkq9g%2BSUDkIrU2ze4%2FjT3xA0LbX%2Fqa%2Bv1As0w)。这个迷你的包能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行 