## 项目限制git提交规范

* 安装依赖

````
$ npm install husky --save-dev
````

* 初始化husky

````
$ npx husky install
````

输入完以后会生成目录

![step2](C:\Users\dense\Desktop\step2.png)

*  项目npm install之后，运行第二步，在package.json中添加如下内容 

````
{ 
    "scripts": { 
        "prepare": "husky install" 
    } 
}
````

* 需要给对应添加git hook钩子

mac

````
$ npx husky add .husky/pre-commit "npm run test"
````

window10

````
$ npx husky add .husky/pre-commit "npm-run-test"
````

执行完上述脚本，会生成对应目录，以及执行脚本命令需要手动把 -- 去掉。![step4](C:\Users\dense\Desktop\step4.png)

* 添加其他钩子

### commit-msg

````
// 安装依赖
$ npm install @commitlint/cli @commitlint/config-conventional --save-dev
````

````
// 添加依赖命令
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
window10可能不识别空格，输入就报错。可以在生成的目录下手动更改执行的脚本。'npx --no-install commitlint --edit "$1"'这些就是对应的执行脚本，window10不能读取空白，可以所以添加对应字符串代替，然后在生成的目录手动修改。
````

````
需要配置提交文件规范，创建commitlint.config 
module.exports = {
    extends: ['@commitlint/config-conventional']
}
````

