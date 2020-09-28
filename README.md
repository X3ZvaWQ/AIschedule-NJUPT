# AIschedule-NJUPT
AIschedule Spider of Nanjing University of Posts and Telecommunications  

一个小爱课程表的南京邮电大学教务系统适配项目

## Files
- `scheduleHtmlProvider.js` 运行在本地浏览器环境，用于从教务系统的网页中获取课表部分的HTML。
- `scheduleHtmlParser.js` 运行在服务器环境，用于解析前者返回的HTML并返回json。

## Introduction  
小爱课程表是一个支持从拍照导入课表、自己编辑课表以及教务系统直接导入课表的课表app  
> AIschedule is a schedule app that supports importing the curriculum from taking photos, editing the curriculum by yourself and directly importing the schedule from the educational administration system
  
从教务系统导入课表的流程是让用户在app内登录自己的教务系统，然后在课表页面执行一段脚本获取课表部分的HTML，然后将HTML发送至服务器，由服务器解析HTML后返回课表的json数据至用户端APP生成课表。
> The process of importing the schedule from the educational administration system is to let users log in their own educational administration system in the APP, then execute a script on the schedule page to get the HTML of the schedule part, and then send the HTML to the server, which will parse the HTML and return the JSON data of the curriculum to the client app to generate the schedule.

然而国内高校使用的教务系统有正方、壮飞、树维等多种形式，甚至有的高校还有自研教务系统。所以小爱在app里面招募学生开发者去适配自己学校的教务系统，学生开发者要做的只有一个爬虫的解析部分。当然对于同一个类型的教务系统来说应该是可以一套代码通用的。
> However, domestic colleges and universities use educational administration systems in various forms, such as Zhengfang, Zhuangfei, Shuwei, etc. Some universities even have self-research educational administration system. So AIschedule recruits student volunteer in the application to adapt their own educational administration system. All the student developers have to do is have a crawler parse section. Of course, for the same type of educational administration system should be able to use the same code.

本项目是一个南京邮电大学的适配，使用的是正方教务系统，有需要的可以参考。  
> This project is an adaptation of Nanjing University of Posts and Telecommunications. It USES the teaching administration system of the front party. If necessary, you can refer to it

## Run and Test
如果需要使用可以直接在应用商店下载小爱课程表app，学校选择  即可  
> If you want to use it, you can download the AIschedule app directly from the app Store, and the school can choose the "南京邮电大学-正方教务系统"

如何进行运行以及测试可以参考[小爱课程表官方提供的开发文档](https://ldtu0m3md0.feishu.cn/docs/doccnhZPl8KnswEthRXUz8ivnhb)
> How to run and test it can refer to [the development document provided by the official](https://ldtu0m3md0.feishu.cn/docs/doccnhZPl8KnswEthRXUz8ivnhb).
