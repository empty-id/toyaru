webpackJsonp([1],{100:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("m-audio",{attrs:{src:n.mediasrc,text:"点击播放音乐"}}),n._v(" "),e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},38:function(n,t,e){e(87);var r=e(15)(e(42),e(100),"data-v-bd26cd6c",null);n.exports=r.exports},41:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"m-audio",props:{src:{type:String,default:""},text:{type:String,default:"轻触播放"},showDuration:{type:Boolean,default:!0},block:{type:Boolean,default:!1}},data:function(){return{audio:null,animate:!1,timer:null,duration:null}},mounted:function(){var n=this;this.audio=new Audio,this.audio.src=this.src,this.audio.addEventListener("canplaythrough",function(){n.duration=n.format(n.audio.duration)}),this.audio.onplay=function(){n.animate=!0,n.timer=setInterval(function(){n.animate=!1,setTimeout(function(){n.animate=!0},50)},1250)},this.audio.onpause=function(){n.animate=!1,n.timer&&clearInterval(n.timer)},this.audio.onended=function(){n.animate=!1,n.timer&&clearInterval(n.timer)},window.audioList.push(this.audio)},methods:{play:function(){window.audioList.forEach(function(n){n.pause()}),this.audio.paused?this.audio.play():this.audio.pause()},format:function(n){var t="";if(n>-1){var e=Math.floor(n/60)%60,r=n%60;e<10&&(t+="0"),t+=e+"'",r<10&&(t+="0"),t+=r.toFixed(2)}return t=t.replace(".",'"')}}}},42:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(24),o=e.n(r),i=e(47),a=e.n(i),s=e(46),u=e.n(s),l=e(96),c=e.n(l),d=e(95),f=e.n(d),m=e(83),p=(e.n(m),function(){for(var n=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],e=!0,r=0;r<t.length;r++)if(n.indexOf(t[r])>0){e=!1;break}return e}()),h=function(n,t){var e=new Date(Date.parse(n.replace(/-/g,"/"))).getTime(),r=new Date(Date.parse(t.replace(/-/g,"/"))).getTime();return Math.abs(e-r)/864e5};document.title+=h((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2020-01-23")+1+"天",t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},computed:{mediasrc:function(){return"http://imgs.shuxitech.com/audio/music_yyqx.mp3"}},data:function(){return{audio:null,interval:54,currentStyle:"",mp3src:"./assets/music_yyqx.mp3",enableHtml:!1,fullStyle:["/*\n* Hi。雅茹！\n* 这么久了。还没和你详细说过我的工作呢！\n* 我是个前端工程师。俗称程序员。网页相关。\n* 如这个页面。就是个什么也没有的网页。\n* 我的工作就是给这种空白的页面加点儿东西。\n* 嗯。说起来手机和电脑还得区分一下。\n* 你现在用的是。。。"+(p?"电脑":"手机")+"\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  "+(p?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  "+(p?"left: 0;":"left:0;right:0;margin:auto;")+"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  "+(p?"-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;")+"\n  "+(p?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n}\n\n/* 再来一张可爱的信纸 */\n.resumeEditor{\n  position: fixed; \n  "+(p?"right: 0;":"left:0;right:0;margin:auto;")+"\n  "+(p?"top: 0;":"bottom:2%;")+"\n  padding: .5em;  \n  "+(p?"margin: .5em;":"")+"\n  "+(p?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  border: 1px solid;\n  color: #fff;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  "+(p?"-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;":"-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;")+"\n    "+(p?"":"-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;")+"\n  }\n/* 我要开始写了，看右边 */\n\n\n","\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n",'\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n  color:#fff;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'\';\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* 节日快乐哦！ */\n\n'],currentMarkdown:"",fullMarkdown:"蒋志远 × 马雅茹\n----\n\n2020年01月23日。初次见面。你真是个好看的菇凉。\n你主动加了我的微信，我当时还害羞着，哈哈哈。  \n2012年01月25日。即大年初一。\n你说口罩快没有了，我想起来家里好像还有KN95口罩。\n在家找了很久，终于找到了，给你送过去了，开心。o(*￣▽￣*)ブ \n不过只有几个，你估计早就用完了吧 /(ㄒoㄒ)/~~\n\n我们相识已有 `"+(h((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2020-01-23")+1)+"` 天。\n虽然不是很长，但是遇见你，真的很美好。\n\n在相识的这些日子里，我还没有很了解你\n我只知道\n----\n\n* 你喜欢乐事薯片，最喜欢黄瓜味和原味的\n\n\n* 你超级喜欢榴莲，猫山王和金枕都很好吃\n\n\n* 你的身高是163厘米\n\n* 你真的很高了，才没有不高哦。嗯，又高又好看。😀\n\n\n* 你的生日是1998年1月13日。我的生日也是13日哦，我们还是有一些缘分的呀。\n\n\n* 你的鞋码是36.5，那天我看你的订单悄悄记下的。😊\n\n* 话说，你的脚脚好小啊。女生是不是都喜欢自己脚小一些。\n\n* 果然，仙女连脚脚都是好看的😝\n\n\n你喜欢的明星\n----\n\n* 你喜欢iu\n\n\n* 你的爱豆是易烊千玺，正在播放的音乐也是他唱的哦。\n\n* 嗯呐\n\n* 你也是我的《宝贝》 (○｀ 3′○)\n\n\n以后的以后\n----\n\n我要让你有吃不完的榴莲，\n\n带你去看易烊千玺的演唱会，\n\n如果能有他的签名照就更好了 （*＾-＾*）\n\n\n我知道你想别人在做什么事之前先要和你说，\n但是这个节日我准备了很久，\n可不能提前和你说，\n不然就没氛围啦😜\n\n\n> 【Happy valentine's day】  \n> 喂。雅茹小仙女 情人节快乐哦！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(a.a.mark(function t(){var r,s,u,l,c,d=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:s=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=s-r.length,this.currentStyle.length<s?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},43:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(88),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},44:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(89),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},45:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(40),o=e(38),i=e.n(o),a=e(39);r.a.use(a.a),new r.a({el:"#app",render:function(n){return n(i.a)}})},83:function(n,t){},84:function(n,t){},85:function(n,t){},86:function(n,t){},87:function(n,t){},94:function(n,t,e){e(85);var r=e(15)(e(41),e(98),"data-v-31d24134",null);n.exports=r.exports},95:function(n,t,e){e(86);var r=e(15)(e(43),e(99),"data-v-3539023c",null);n.exports=r.exports},96:function(n,t,e){e(84);var r=e(15)(e(44),e(97),"data-v-23b5cc2c",null);n.exports=r.exports},97:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},98:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"wrap",staticClass:"x-audio-wrap",class:{inline:!n.block},on:{click:n.play}},[e("div",{staticClass:"x-sector",class:{play:n.animate}},[e("div",{staticClass:"x-dot"})]),n._v(" "),e("div",{staticClass:"x-time"},[n._v(n._s(n.duration&&n.showDuration?n.duration:n.text))])])},staticRenderFns:[]}},99:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[45]);