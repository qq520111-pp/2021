## avue

> 基于element-ui + vue；

## 全局api

* this.findObject(option.column, 'contractNum') (返回对应options)
* this.$ImagePreview(datas, index)（大图预览）

## 表单组件

> 用户数据（model） 、 内置规则（options）、钩子函数

* options
  * menuBtn
    尾部按钮去除
    
  * submitBtn
    提交按钮隐藏
    
  * emptyBtn
    
    取消按钮隐藏
    
  * labelWidth
    
    表单的文字width
    
  * formslot：true（开启自定义表单插槽的方式）
    
    设置为插槽表单，默认prop名字 
    
  * formatter（函数 =》**表格选择器**）
  
    处理选择款显示的字段
    
  * gutter（调节表单之间的间距）**栏间距**
  
* dicData（字典结合type：select类型）
  
   默认值是value，key是label
  
   props: { label: 'dictValue' , value: 'dictKey' } 修改默认参数
  
   dicUrl: getDictionaryBizUrl({ code: 'contract_category' }) 动态字典请求的URL
  
  dataType：string / number（字段类型）
  
* detail对当前avue-form组件是否详情

* 通过ref提交表单并且进行校验

  ​	校验方法validate   
  
  ​	自定义校验表单  (rule, value, callback)=>{  value：输入的值， callback（传入报错信息）    };
  
  ​	清除校验规则clearValidate
  
  ​	show(开启表单禁用)
  
  ​	hide(解除禁用)
  
   	重置方法resetForm

## 表格

> 用户数据（data）、内置规则（options）、钩子函数；
> 添加表单的基础功能，涉及插槽方式。

* options  

  * column（每一列里的参数和数据对应的值）

  * editBtn: false（编辑按钮隐藏）

  * delBtn: false （删除按钮隐藏）

  * addBtn: false（新增按钮隐藏）

  * showHeader:true（是否显示表头）

  * @row-click: （行点击事件）

  * menu:false（隐藏操作一列按钮）

  * menuWidth（设置操作宽）

  * formslot

    开启（弹出体）表单自定义插槽

  * permission（用户权限的操作）

    展示隐藏编辑、删除、添加按钮（字段按钮elBtn:false,  addBtn: false,           menu: false）

  * expand：true（行展开，对应rowKey => data的id）

    expandRowKeys（默认展开的行id），插槽显示对应数据。触发的回调函数（@expand-change）

  * 多选操作

    设`selection`属性为`true`即可；

    勾选会回调`selectionChange`方法;

    `selectable`函数决定该行是否可以勾选; true(可选)/false(不可选)

    设置`reserveSelection`为`true`保留之前的勾选；

    默认数据调用方法toggleSelection

  * slot：true

    开启自定义表格插槽，name对应prop。

  * showSummary（统计）

    可计算表格数据的累加、平均值。

* page（分页配置）

  * {  pageSize: 20，pagerCount:5 ，currentPage：0 }
  * 触发事件

* refresh-change（刷新）

  请求初始化数据

* 多选择

* 折叠表格

* 弹出编辑表单

* 自定义表单

  rules（prop值）Form，对应的column要开启对应的插槽方式，          

  formslot:**true**,       labelslot:**true**,              errorslot:**true**,

* 父子表

> （嵌套表格，嵌套表单，自定义表单）



