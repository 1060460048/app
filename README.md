## 珠峰课堂

由珠峰开源的一款React Native APP，目前正在内侧阶段，预计春节前发布。 一开始的目的是开发一款简单的APP供学员学习用， 后来开发小组变得兴趣浓厚决定继续开发下去，为珠峰课堂增加更多功能，将它做成一个先进的开源在线教育直播平台。 并配合[Blackboard](https://www.github.com/ramroll/blackboard) 一起作为新一代的教学工具。 

首先参考React Native官方文档配置React native开发环境

### 运行方法

STEP 1 : 进入项目目录
```
npm install
```

STEP 2 : Link原生库
```
react-native link
```

STEP 3 : 如果是ios
用xcode打开ios/zhufengketang.xcodeproj或
```
react-native run-ios
```
STEP 4 : 如果是android
在android studio打开android目录作为一个工程
或
```
react-native run-android
```
### 开发计划
#### 2017.2 v1.0发布
支持注册、登录、课程浏览、支付功能。 线上支付，线下开课。 

主要覆盖知识点
* LOGO
* 启动页
* 瀑布路（课程浏览）
* TabsView
* 表单组件
* SDK对接（支付宝）
* 接口联调


#### 2017.3 v1.1 开发计划 

1. 增加微信支付
2. 增加微信登录
3. 增加微信分享
4. 增加视频课程播放

#### 2017.4 v1.2 开发计划
1. 增加视频直播（在线答疑、连线）
 
 
#### 2017.5 v1.3 开发计划
1. 增加好友关系、社交

#### 2017.6 v2.0 开发计划
整合Blackboard，成为一个完成的教学体系

### 第一期课程目录
珠峰课堂第一期， 

第一章 ： 环境和学习技巧

1. 为什么要学习React&ReactNative     why-rectn-and-native
2. 实战《珠峰课堂》课程介绍和学习方法  zhufengketang
3. React Native环境搭建              rn-env
4. 使用Blackboard app看课件          blackboard
5. Hello world项目     
6. 使用UIExplorer学习ReactNative组件
7. 运行《珠峰课堂》项目 




第二章 : javascript&Es6/7重点选讲

1. 对象/数组/函数的解构               destructure
2. Promise & async/await            promise
3. 所有的数据处理过程都是map/reduces  map-reduce
4. Es6 class                        class


第三章 : React.js基本概念

1. JSX和使用已经声明的react组件       react-create-element
2. 属性、状态和组件声明               react-create-class
3. React生命周期                     react-lifecycle


第四章 : React Native基础知识实战

1. 布局和flexbox
2. （实战）做一些基本的事情
3. （实战）做一个最基础的组件和Navigator
4. （实战）Navigator详细用法
5. （实战）导航标题栏复杂结构解析
6. （实战）SegmentedControl
7. （实战）状态和标题栏
8. (实战)珠峰课堂首页开发

第五章 : React Native复杂组件开发方法

1. (实战)数学证明的瀑布流组件(一)
2. (实战)数学证明的瀑布流组件(二)
3. (实战)数学证明的瀑布流组件(三)
4. (实战)数学证明的瀑布流组件(四)
5. 珠峰课堂表单设计
6. (实战）表单制作和高阶组件

第6章 使用原生代码

1. (实战)接入ReactNative第三方插件
2. ICON和SplashScreen
3. 对接支付宝SDK

第7章 特别技巧讲解

1. 正确处理网络异常的方法


第8章 打包

1. IOS打包
2. Android打包


### 如何申请加入珠峰课堂研发小组
申请加入研发小组，您不但成为我们的一员，同时我们将共同推进教学产品并分享成果。
请发邮件至 ramroll@gmail.com
包括：
* 您的自我介绍
* 联系方式

收到邮件后，小组成员会及时和您沟通。
