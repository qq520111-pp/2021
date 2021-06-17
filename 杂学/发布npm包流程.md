# 发布npm包流程

1. 编写好组件库

   需要在package.json里面设置public为false是否私用项目。

2. 根据组件库设置script脚本,创建lib

   ```
   vue-cli-service build --target lib --name vue-hhh-page --dest lib packages/index.js
   ```

3. 通过npm login 登录账号

4. npm publish 发布npm

   注意点有三个：包名是否重复、镜像淘宝不可以、邮箱是否验证。