##  git的基本使用方法

初始配置

输入邮箱和密码，关联远程库、并且生成ssh密钥，在合作地方配置上ssh。

### 命令

* git add . 
* git commit -m "提交描述文件说明"
* git push origin master（提交到远程分支master）
* git pull（远程库拉下代码）
* git branch “分支名”
* git checkout “版本回滚  /  进入某个分支”
* git reset --hard “切换版本，版本的hash”
* git reflog 查看总提交

### 代码冲突解决

当公司同事一起修改了某个文件的时候，进行push会提醒你先pull下代码进行本地合并。然后在重新add，push 到 远程库进行合并，也可以在vscode上进行选取代码合并的操作。要安装git。

