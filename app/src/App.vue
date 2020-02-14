<template>
  <div id="app">
    <m-audio :src="mediasrc" text="点击播放音乐" :show-duration="false"></m-audio>
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>
<script>
import StyleEditor from "./components/StyleEditor";
import ResumeEditor from "./components/ResumeEditor";
import "./assets/reset.css";
let isPc = (function() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
})();
let getDateDiff = function(startDate, endDate) {
  var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
  var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
  var dates = Math.abs(startTime - endTime) / (1000 * 60 * 60 * 24);
  return dates;
};
document.title +=
  getDateDiff(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    "2020-01-23"
  ) +
  1 +
  "天";
export default {
  name: "app",
  components: {
    StyleEditor,
    ResumeEditor
  },
  computed: {
    mediasrc() {
      // return require("./assets/music_yyqx.mp3");
      // return "http://imgs.shuxitech.com/audio/music_yyqx.mp3";
      return "https://wx.shuxitech.com/music_yyqx.mp3"
    }
  },
  data() {
    return {
      audio: null,
      interval: 54,
      currentStyle: "",
      mp3src: "./assets/music_yyqx.mp3",
      enableHtml: false,
      fullStyle: [
        `/*
* Hi。雅茹！
* 这么久了。还没和你详细说过我的工作呢！
* 我是个前端工程师。俗称程序员。网页相关。
* 如这个页面。就是个什么也没有的网页。
* 我的工作就是给这种空白的页面加点儿东西。
* 嗯。说起来手机和电脑还得区分一下。
* 你现在用的是。。。${isPc ? "电脑" : "手机"}
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了。来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54); 
}
/* 文字太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  ${isPc ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;"}
  font-size: 14px;
  line-height:1.5;
}
/* 这些代码颜色都一样。加点儿高亮区别来 */
.token.selector{ color: rgb(133,153,0) }
.token.property{ color: rgb(187,137,0) }
.token.punctuation{ color: yellow }
.token.function{ color: rgb(42,161,152) }
.token.comment{ color: rgb(177,177,177) }
/* 加个 3D 效果 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; 
  ${isPc ? "left: 0;" : "left:0;right:0;margin:auto;"}
  top: 0; 
  -webkit-transition: none; 
  transition: none;   
  ${
    isPc
      ? "-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;"
      : "-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;"
  }
  ${
    isPc ? "" : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;"
  }
}

/* 再来一张可爱的信纸 */
.resumeEditor{
  position: fixed; 
  ${isPc ? "right: 0;" : "left:0;right:0;margin:auto;"}
  ${isPc ? "top: 0;" : "bottom:2%;"}
  padding: .5em;  
  ${isPc ? "margin: .5em;" : ""}
  ${isPc ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;"}
  border: 1px solid;
  color: #fff;
  overflow: auto;
  font-size: 14px;
  line-height:1.5;
  ${
    isPc
      ? "-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;"
      : "-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;"
  }
    ${
      isPc
        ? ""
        : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;"
    }
  }
/* 我要开始写了，看右边 */


`,
        `
/* 是不是看着很简陋粗糙？
 * 因为这是 Markdown 格式的
 * 一种程序员用来写文档日志的简易语言
 * 翻译成 网页 就行了
 */
`,
        `
/* 再加点样式 */
.resumeEditor{
  padding: 2em;
  line-height:1.8;
  color:#fff;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
  font-size:18px;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '';
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: rgba(221,221,221,.5);
}

/* 节日快乐哦！ */

`
      ],
      currentMarkdown: "",
      fullMarkdown: `蒋志远 × 马雅茹
----

2020年01月23日。初次见面。你真是个好看的菇凉。
你主动加了我的微信，我当时还害羞着，哈哈哈。  
2012年01月25日。即大年初一。
你说口罩快没有了，我想起来家里好像还有KN95口罩。
在家找了很久，终于找到了，给你送过去了，开心。o(*￣▽￣*)ブ 
不过只有几个，你估计早就用完了吧 /(ㄒoㄒ)/~~

我们相识已有 \`${getDateDiff(
        new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate(),
        "2020-01-23"
      ) + 1}\` 天。
虽然不是很长，但是遇见你，真的很美好。

在相识的这些日子里，我还没有很了解你
我只知道
----

* 你喜欢乐事薯片，最喜欢黄瓜味和原味的


* 你超级喜欢榴莲，猫山王和金枕都很好吃


* 你的身高是163厘米

* 你真的很高了，才没有不高哦。嗯，又高又好看。😀


* 你的生日是1998年1月13日。我的生日也是13日哦，我们还是有一些缘分的呀。


* 你的鞋码是36.5，那天我看你的订单悄悄记下的。😊

* 话说，你的脚脚好小啊。女生是不是都喜欢自己脚小一些。

* 果然，仙女连脚脚都是好看的😝


你喜欢的明星
----

* 你喜欢iu


* 你的爱豆是易烊千玺，正在播放的音乐也是他唱的哦。

* 嗯呐

* 你也是我的《宝贝》 (○｀ 3′○)


以后的以后
----

我要让你有吃不完的榴莲，

带你去看易烊千玺的演唱会，

如果能有他的签名照就更好了 （*＾-＾*）


我知道你想别人在做什么事之前先要和你说，
但是这个节日我准备了很久，
可不能提前和你说，
不然就没氛围啦😜


> 【Happy valentine's day】  
> 喂。雅茹小仙女 情人节快乐哦！

`
    };
  },
  created() {
    this.makeResume();
  },
  methods: {
    makeResume: async function() {
      await this.progressivelyShowStyle(0);
      await this.progressivelyShowResume();
      await this.progressivelyShowStyle(1);
      await this.showHtml();
      await this.progressivelyShowStyle(2);
    },
    showHtml: function() {
      return new Promise((resolve, reject) => {
        this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        let interval = this.interval;
        let showStyle = async function() {
          let style = this.fullStyle[n];
          if (!style) {
            return;
          }
          // 计算前 n 个 style 的字符总数
          let length = this.fullStyle
            .filter((_, index) => index <= n)
            .map(item => item.length)
            .reduce((p, c) => p + c, 0);
          let prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength;
            let char = style.substring(l, l + 1) || " ";
            this.currentStyle += char;
            if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(this);
        showStyle();
      });
    },
    progressivelyShowResume() {
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length;
        let interval = this.interval;
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(
              0,
              this.currentMarkdown.length + 1
            );
            let lastChar = this.currentMarkdown[
              this.currentMarkdown.length - 1
            ];
            let prevChar = this.currentMarkdown[
              this.currentMarkdown.length - 2
            ];
            if (prevChar === "\n" && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom());
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100%;
}
.styleEditor {
  -webkit-backface-visibility: hidden;
}
</style>
