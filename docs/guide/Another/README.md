---
title: 前端学习路线
home: false
---

# 前端学习路线

[[TOC]]

## 概述

作为一名编程人员，学习的方向无疑是十分重要的。时代的不断发展推动着世界的进步，前端人员的道路这些年也是越走越宽。各种前端框架层出不穷，各种编程规范大步革新。前端自前些年以来依然进入了一个百花齐放的时代。诚然，前端的入门门槛确实是比较低的，但是要达到一定的水准，还是得步步踏实的走一段路的。

本文将从各种技术来入手，分析一整套前端人员的学习之路（参考）。

## 各技术细分

### HTML5 + Css

在此阶段，应该熟悉 **HTML5 ( H5 )** 的 **大部分** 标签，特性及其使用方式，比如包括但不限于 **<u>表格</u>** 、**<u>表单</u>** 等知识（下方代码表格与表单为例）；

应该熟悉 Css 包括但不限于 **<u>Css Hacker</u>** 、 **<u>媒体查询</u>**、**<u>Css 变量</u>** 等知识。

```html
// Html table  | [tr]:table row | [td]:table data | plays:block
<table>
    <tr>
    	<td> data </td>
    </tr>
</table>
----------------------------------------------------------------------
// Html form | [action]:a file you're aim to deal with | plays:block
<form action = "fileName.file" method = "post/get" />
	<input type = "text/password/date/radio/.." size|placeholder|min/max(length)|name value/>
</form>
```

而 Css 部分则只需要你做到记住一些常用的属性，在 Css 这个方面，不会再查也是可以允许的。

未来某天，你在做完一个实例后，突发奇想，想让你的手机上呈现出你刚刚用心写完的实例，于是你让手机连上 Wi-Fi，ping 上电脑主机的 IP，兴高采烈地打开 index.html ，哦豁，你发现块都不在它应该呆的位置上，刚做好的美美的网页整的稀碎，T_T
于是上百度问度娘，哦，原来 **移动端与 PC 端的配适** 一直都是前端人员最头疼的问题，还好，不是你一个人在心累。

配适问题一般分为两类：

1. 浏览器之间的配适问题
2. 移动端与 PC 端的配饰问题

当然，这些问题都有办法解决：

```html
//1.Css Hacker

<div class="someDiv">
	<span>Something</span>
</div>

//set a bgcolor to someDiv

<style>
	.someDiv {
		backgroundcolor: lightblue;
	}
</style>

//oppppps! IE8 is NOT support.

<style>
	.someDiv{
	    backgroundcolor:lightblue;
	    backgroundcolor:lightblue;\0
	}
</style>

//OK,this "\0" is the Hacker for the IE8+ ,and it's worked.
```

Css Hacker 看起来挺方便，与 -webkit- 相似，-moz- 和 -ms- 都是 Css Hacker ，不过与上面展示的例子有所不同，它们是加在各项属性前方的，用以配适一些主流的浏览器的 Css 渲染。

```html
//2.媒体查询
<div class="someDiv">
	<span>Something</span>
</div>

<style>
	.someDiv {
		backgroundcolor: lightblue;
		width: 74rem;
	}

	@media screen and (max-width: 300px) {
		.someDiv {
			background-color: lightblue;
			width: 80%;
		}
	}
</style>
```

媒体查询看起来像嵌在 Css 中的另一张 Css 样式表，通过观察可以得出，这个块级元素在 PC 端时宽度为 74 rem[^2] ，而当屏幕宽度小于 300px 时，块将只占屏幕宽度的 80% 。

两种方法，仁者见仁，智者见智。

### JavaScript

在熟悉了 **HTML5** 及 **Css** 后，你拥有了构建一个 "漂亮的网页" 的基本能力，是时候让你的 "网页" 跟用户们一起互动了！ **: )**

在此阶段，应该熟悉 **JavaScript ( JS )** 的 **<u>运作方式</u>** 、<u>基本操作</u> 和 **<u>逻辑</u>** ，包括但不限于 **<u>DOM 结构</u>** 、 <u>**DOM 节点**</u> 等相关知识。

```js
var num = 1,
	str = ".",
	isBool = true,
	arr = [],
	divs = document.getElementsByTagName("div"),
	div_someDiv = document.querySelector(".someDiv")

window.onload = setTimeout(() => {
	divs[0].innerHTML = "Something&nbsp;"
	var massage = divs[num - 1].outerText
	massage += isBool ? "happend" + str : "dispeared" + str
	arr.push(massage)
	alert(arr[0])
	divs[0].innerHTML = arr[0]
	div_someDiv.style.backgroundColor = `red`
}, 3000)
```

在熟悉 JS 后，这段代码对你来说也是 easy case 啦！

在新加入的 **ES6** 语法规范中，有些比较陈旧的 JavaScript 写法被摈弃。较为新的写法往往代表着更加简洁或者是更加符合设计理念的进步，毕竟不断改进不断进步才是可持续发展的道路，不断学习不断进步才是打开成长相对正确的钥匙。

### Vue.JS[^1]

在熟练掌握了 H5 与 Css，并且对 JS 有所 **理解** 和 **了解** 的你 ，一定写了一些了不得的实例 ，写了那么长时间 JS 代码，用 Function 控制 DOM 节点 的时候，有没有想法让自己几百行的代码变得更加简单呢？

在使用 Vue 时，你将有这个机会大大减缩你的代码行数（相对），例如：

```html
<h1 v-show="1">标题</h1>
<button>click to change!</button>
```

显然，在你的 Html 文档中这个一级标题会被显示出来，你想点一下按钮将他隐藏起来,并且想改变它的内容，然后你绑定在某个 button Function 上的代码像这样：

```js
document.getElementByTagname("h1").style.display = `none`
document.getElementByTagname("h1").innerHTML = `被隐藏的标题`
```

然而，在 Vue 中，可以很简单：

```html
<div id="app">
	<h1 v-show="isShow">{{massage}}</h1>
	<button @click="changeStaus">click to change!</button>
</div>

<script>
	new Vue({
	       el:'#app',
	       data:{
	           isShow:true，
	           massage:"标题"
	       }，
	       methods:{
	       changeStaus:function(){
	       	this.massage = this.isShow?"标题":"被隐藏的标题"
	       	this.isShow = !this.isShow
	   	}
	   }
	   })
</script>
```

你看，清楚的逻辑和简短的代码，轻松又自然。不仅能实现隐藏功能，还能实现点击再次出现的功能。
当然，现在这个例子可能不是特别清晰，因为数据太少的关系，你可能觉得 Vue 的代码更加长，但没关系，以后你就能见识到 Vue 的简洁明了。

在此阶段，应该熟悉 VueJS 的 **每一项编程功能** ，包括但不限于 **Vue 生命周期** 、 **Vue 组件** 等知识。

以上，不涉及到 Vue 框架的有关细节。截止到目前为止（2021.11.1），Vue 框架已经出现了脚手架四代。对于主流框架来讲，Vue 的编程思想及实现方法一直都是热点话题，也是顶尖开发者对代码的完美诠释。相关的 **Vue 参考学习计划** 会在附录给出。

### Axios/Ajax 等

学会 Vue 之后，你开始需要 "被" 了解一些叫做 API 的东西，最终 **前端后端结合** 才是你该去长时间了解和尝试的东西。

axios（或是 ajax） 的熟练程度代表了你的 JS 技术是否来到了 **接口** 这一项，也意味着：**前后端的结合才开始**
在此阶段，你需要学习包括但不限于 **axios 函数调用网络或本地接口** 等。

例如，调用一个随机笑话接口：

```vue
<div class="JokeDiv">
	<p>{{ joke }}</p>
	<button id="jokeBtn" @click="getJoke">{{(this.joke == '请先获取至少一次笑话')?"获取笑话":"刷新笑话"}}</button>
</div>

/* 接口内容：获取一条随机笑话 请求地址：https://autumnfish.cn/api/joke
请求方法：get 响应内容：String/随机笑话 */

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			joke: "请先获取至少一次笑话",
		}
	},
	methods: {
		getJoke: function () {
			var that = this
			axios.get("https://autumnfish.cn/api/joke").then(
				function (response) {
					that.joke = response.data
				},
				function (err) {}
			)
		},
	},
}
</script>
```

# 附录

## 注意事项

- 由于每个人的学习路径以及知识的认知程度不同，一个人遇到程序报错或者兼容问题情况下，可以先行上网搜索，看看有没有相同遭遇并且问题得到解决的案例，实在找不到问题所在可以试试询问其他人，有可能也会遇到相同遭遇并且已经解决了的的小伙伴。

## 搜索技巧

- 关键词联合搜索，使用关键词加空格进行配合，对问题进行子集覆盖，如`mysql 登录 失败 配置`这一组便可能会找到关于 mysql 由于配置登陆失败的案例与解决方法或者是关于 mysql 登陆失败的解决方法。
- 限制性搜索，如指定文件类型、日期跟关键字。完整栗子为 `mysql intitle 数据库 2000..2021 filetype:doc`

## Vue 参考学习计划

```text
Vue.js(v1) --> (axios) --> Vue.js(v2-cli) --> ElementUI --> Vue.js(v3-cli) --> (ElementUI Plus) --> Vue.js(v4-cli)
```

## 大数据实验室前端路线时间分配

|   时间/内容    |                大二                 |                大三                 |
| :------------: | :---------------------------------: | :---------------------------------: |
| 至 11 周周日前 |   Vue.js(v2-cli)基础、项目、复习    |      Vue.js(v2-cli)基础、复习       |
| 至 13 周周日前 |         Vue.js(v2-cli)进阶          |         Vue.js(v2-cli)进阶          |
| 至 14 周周日前 | ES6 基本、node 基本、elementUI 基本 | ES6 基本、node 基本、elementUI 基本 |

Vue.js(v2-cli)进阶：包括但不限于 组件构建、组件通信、生命周期、响应性数据 等知识。
ES6 基本：https://www.bookstack.cn/read/es6-3rd/sidebar.md 任意学习量均可。
node 基本：学习构建项目，了解但不限于 webpack npm 等知识。
elementUI 基本：https://element.eleme.cn/#/zh-CN 任意学习量均可。

[^1]: 这里的 Vue 是指 "对 Vue.js 或 Vue.min.js 的单独引用外联文件的方式"
[^2]: rem 移动配适常用长度单位,一般是由 px 转化
