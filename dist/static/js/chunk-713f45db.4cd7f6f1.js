(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-713f45db"],{"0cb2":function(G,e,t){var r=t("7b0b"),n=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;G.exports=function(G,e,t,l,s,_){var o=t+G.length,u=l.length,f=c;return void 0!==s&&(s=r(s),f=i),a.call(_,f,(function(r,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return G;case"`":return e.slice(0,t);case"'":return e.slice(o);case"<":i=s[a.slice(1,-1)];break;default:var c=+a;if(0===c)return r;if(c>u){var _=n(c/10);return 0===_?r:_<=u?void 0===l[_-1]?a.charAt(1):l[_-1]+a.charAt(1):r}i=l[c-1]}return void 0===i?"":i}))}},1276:function(G,e,t){"use strict";var r=t("d784"),n=t("44e7"),a=t("825a"),i=t("1d80"),c=t("4840"),l=t("8aa5"),s=t("50c4"),_=t("14c3"),o=t("9263"),u=t("9f7f"),f=u.UNSUPPORTED_Y,h=[].push,d=Math.min,p=4294967295;r("split",2,(function(G,e,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(G,t){var r=String(i(this)),a=void 0===t?p:t>>>0;if(0===a)return[];if(void 0===G)return[r];if(!n(G))return e.call(r,G,a);var c,l,s,_=[],u=(G.ignoreCase?"i":"")+(G.multiline?"m":"")+(G.unicode?"u":"")+(G.sticky?"y":""),f=0,d=new RegExp(G.source,u+"g");while(c=o.call(d,r)){if(l=d.lastIndex,l>f&&(_.push(r.slice(f,c.index)),c.length>1&&c.index<r.length&&h.apply(_,c.slice(1)),s=c[0].length,f=l,_.length>=a))break;d.lastIndex===c.index&&d.lastIndex++}return f===r.length?!s&&d.test("")||_.push(""):_.push(r.slice(f)),_.length>a?_.slice(0,a):_}:"0".split(void 0,0).length?function(G,t){return void 0===G&&0===t?[]:e.call(this,G,t)}:e,[function(e,t){var n=i(this),a=void 0==e?void 0:e[G];return void 0!==a?a.call(e,n,t):r.call(String(n),e,t)},function(G,n){var i=t(r,G,this,n,r!==e);if(i.done)return i.value;var o=a(G),u=String(this),h=c(o,RegExp),v=o.unicode,g=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(f?"g":"y"),b=new h(f?"^(?:"+o.source+")":o,g),E=void 0===n?p:n>>>0;if(0===E)return[];if(0===u.length)return null===_(b,u)?[u]:[];var x=0,m=0,O=[];while(m<u.length){b.lastIndex=f?0:m;var D,j=_(b,f?u.slice(m):u);if(null===j||(D=d(s(b.lastIndex+(f?m:0)),u.length))===x)m=l(u,m,v);else{if(O.push(u.slice(x,m)),O.length===E)return O;for(var A=1;A<=j.length-1;A++)if(O.push(j[A]),O.length===E)return O;m=x=D}}return O.push(u.slice(x)),O}]}),f)},"129f":function(G,e){G.exports=Object.is||function(G,e){return G===e?0!==G||1/G===1/e:G!=G&&e!=e}},"14c3":function(G,e,t){var r=t("c6b6"),n=t("9263");G.exports=function(G,e){var t=G.exec;if("function"===typeof t){var a=t.call(G,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(G))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(G,e)}},"1dde":function(G,e,t){var r=t("d039"),n=t("b622"),a=t("2d00"),i=n("species");G.exports=function(G){return a>=51||!r((function(){var e=[],t=e.constructor={};return t[i]=function(){return{foo:1}},1!==e[G](Boolean).foo}))}},"44e7":function(G,e,t){var r=t("861d"),n=t("c6b6"),a=t("b622"),i=a("match");G.exports=function(G){var e;return r(G)&&(void 0!==(e=G[i])?!!e:"RegExp"==n(G))}},"4de4":function(G,e,t){"use strict";var r=t("23e7"),n=t("b727").filter,a=t("1dde"),i=a("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(G){return n(this,G,arguments.length>1?arguments[1]:void 0)}})},5319:function(G,e,t){"use strict";var r=t("d784"),n=t("825a"),a=t("50c4"),i=t("a691"),c=t("1d80"),l=t("8aa5"),s=t("0cb2"),_=t("14c3"),o=Math.max,u=Math.min,f=function(G){return void 0===G?G:String(G)};r("replace",2,(function(G,e,t,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,p=h?"$":"$0";return[function(t,r){var n=c(this),a=void 0==t?void 0:t[G];return void 0!==a?a.call(t,n,r):e.call(String(n),t,r)},function(G,r){if(!h&&d||"string"===typeof r&&-1===r.indexOf(p)){var c=t(e,G,this,r);if(c.done)return c.value}var v=n(G),g=String(this),b="function"===typeof r;b||(r=String(r));var E=v.global;if(E){var x=v.unicode;v.lastIndex=0}var m=[];while(1){var O=_(v,g);if(null===O)break;if(m.push(O),!E)break;var D=String(O[0]);""===D&&(v.lastIndex=l(g,a(v.lastIndex),x))}for(var j="",A=0,P=0;P<m.length;P++){O=m[P];for(var I=String(O[0]),y=o(u(i(O.index),g.length),0),S=[],T=1;T<O.length;T++)S.push(f(O[T]));var M=O.groups;if(b){var R=[I].concat(S,y,g);void 0!==M&&R.push(M);var w=String(r.apply(void 0,R))}else w=s(I,g,y,S,M,r);y>=A&&(j+=g.slice(A,y)+w,A=y+I.length)}return j+g.slice(A)}]}))},"5ced":function(G,e,t){},"65f0":function(G,e,t){var r=t("861d"),n=t("e8b5"),a=t("b622"),i=a("species");G.exports=function(G,e){var t;return n(G)&&(t=G.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)?r(t)&&(t=t[i],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===e?0:e)}},8418:function(G,e,t){"use strict";var r=t("c04e"),n=t("9bf2"),a=t("5c6c");G.exports=function(G,e,t){var i=r(e);i in G?n.f(G,i,a(0,t)):G[i]=t}},"841c":function(G,e,t){"use strict";var r=t("d784"),n=t("825a"),a=t("1d80"),i=t("129f"),c=t("14c3");r("search",1,(function(G,e,t){return[function(e){var t=a(this),r=void 0==e?void 0:e[G];return void 0!==r?r.call(e,t):new RegExp(e)[G](String(t))},function(G){var r=t(e,G,this);if(r.done)return r.value;var a=n(G),l=String(this),s=a.lastIndex;i(s,0)||(a.lastIndex=0);var _=c(a,l);return i(a.lastIndex,s)||(a.lastIndex=s),null===_?-1:_.index}]}))},"8aa5":function(G,e,t){"use strict";var r=t("6547").charAt;G.exports=function(G,e,t){return e+(t?r(G,e).length:1)}},9263:function(G,e,t){"use strict";var r=t("ad6d"),n=t("9f7f"),a=t("5692"),i=RegExp.prototype.exec,c=a("native-string-replace",String.prototype.replace),l=i,s=function(){var G=/a/,e=/b*/g;return i.call(G,"a"),i.call(e,"a"),0!==G.lastIndex||0!==e.lastIndex}(),_=n.UNSUPPORTED_Y||n.BROKEN_CARET,o=void 0!==/()??/.exec("")[1],u=s||o||_;u&&(l=function(G){var e,t,n,a,l=this,u=_&&l.sticky,f=r.call(l),h=l.source,d=0,p=G;return u&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),p=String(G).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==G[l.lastIndex-1])&&(h="(?: "+h+")",p=" "+p,d++),t=new RegExp("^(?:"+h+")",f)),o&&(t=new RegExp("^"+h+"$(?!\\s)",f)),s&&(e=l.lastIndex),n=i.call(u?t:l,p),u?n?(n.input=n.input.slice(d),n[0]=n[0].slice(d),n.index=l.lastIndex,l.lastIndex+=n[0].length):l.lastIndex=0:s&&n&&(l.lastIndex=l.global?n.index+n[0].length:e),o&&n&&n.length>1&&c.call(n[0],t,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(n[a]=void 0)})),n}),G.exports=l},"9cae":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("841c"),core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4de4"),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a434"),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("1276"),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__),vant__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("d399");__webpack_exports__["a"]={name:"Home",data:function(){return{search:"",tableData:[],price:0,value:1,count:0,option:[{text:"第一人称射击游戏",value:1},{text:"福利游戏",value:2},{text:"策略-战略-全面战争",value:3},{text:"国产角色-RPG游戏",value:4},{text:"火影-海贼-龙珠 ",value:5},{text:"刺客动作角色类",value:6},{text:"体育竞技赛车",value:7},{text:"丧尸生化恐怖类",value:8},{text:"2021年年新游戏",value:9},{text:"一些无法上架的游戏---敏感游戏",value:10}],show:!1,actions:[]}},computed:{filterData:function(){var G=this.search;if(G){var e=this.changObj("使命召唤1+2,使命召唤4重制版,使命召唤5,使命召唤6,使命召唤6重制版,使命召唤7,使命召唤8,使命召唤9,使命召唤10,使命召唤11,使命召唤12,使命召唤13,使命召唤14,逃离塔科夫,光明记忆EP1,光荣使命,战地1,战地3,战地4,战地5,战地硬仗,狙击手1,狙击手2,狙击手3,狙击手4,地铁2033,地铁逃离,地铁最后曙光,破坏者,终结者反抗军,毁灭全人类重制版,机甲战士5雇佣兵,荣誉勋章空降神兵,荣誉勋章现代战争,荣誉勋章战士 ,狙击精英1,狙击精英僵尸部队三部曲,狙击精英纳粹僵尸大军1,狙击精英纳粹僵尸大军2,狙击精英V2,狙击精英3,狙击精英4,国土防线,国土防线2,质量效应3,质量效应仙女座,子弹风暴重制版,洛杉机之战,孤岛惊魂3,孤岛惊魂4黄金版,孤岛惊魂5,孤岛惊魂新曙光,孤岛惊魂原始杀戮,孤岛危机重制版,孤岛危机弹头,孤岛危机2,孤岛危机3,孤岛危机1,战争机器1,战争机器4,战争机器5,战争机器战术小队,毁灭战士永恒,毁灭战士4,德军总部2新巨像,德军总部旧血液,德军总部新血液,德军总部新秩序,幽灵行动未来战士,幽灵行动荒野,合金装备5幻痛,合金装备原爆点,细胞分裂5,细胞分裂6,彩虹六号单机版,异域奇兵豪华版,失落的星球123,狂野西部枪手,征服,机甲战魔,零世代,正当防卫1,正当防卫2,正当防卫3,正当防卫4,狂怒,狂怒2,无主之地2,无主之地2前传,无主之地3,迸发,迸发2,英雄萨姆4,日落过载,收获日2,遗迹灰烬重生,噬血代码,辐射1+2,辐射3年度版,辐射新维加斯终极版,辐射4废土欲望整合版,星球大战原力释放,星球大战绝地武士,星球大战前线2,耻辱1,耻辱2,耻辱界外魔之死,天外世界,拯救者,黑玫瑰女武神,失眠方舟,崩解,致命躯壳,AI少女,家族崩坏,HoneySelect,club,Real Play,超级情圣1,超级情圣2,超级情圣3,性感沙滩4,虚拟追踪者,全面战争传奇特洛伊,罗马全面战争,幕府将军武家之殇,全面战争三国,三国全面战争,帝国全面战争,拿破仑全面战争,阿提拉全面战争,中世纪全面战争,战锤全面战争,战锤全面战争2,全面战争不列颠王座,汉之殇全面战争,三国群英传1-8,中世纪王朝,帝国时代1234全集,帝国时代2决定版,帝国时代3决定版,要塞3,要塞3十字军团2,十字军之王2,十字军之王3,远征军,文明5美丽新世界,文明5太空,文明6风云变幻,哥萨克3,美丽水世界,侏罗纪世界进化,家园重制版,三国志1-12,三国志13加强版,三国志14,信长之野望14,信长之野望创造战国立志传,信长之野望大志,骑马与砍杀全集,骑马与砍杀2,英雄无敌1-7全集,魔兽争霸3全集,工人物语7,纪元系列,战锤40K战争黎明3,战锤混沌祸根,战锤40K遗迹之战,战争之人越南,战争之人突击小队,战争之人负罪英雄,战争之人赤潮,战争之人突击小队2,战争之人冷战,战争游戏红龙,战争游戏欧洲扩张,冲突世界,敌军前线,闪电行动红河,红色警戒2+3全集,命令与征服重制版,命令与征服4,光环战争终极版,武装突袭3,突袭3,突袭4,欧陆风云4_v1.31,钢铁雄心4 1.41版本,钢铁之师：诺曼底44,钢铁之师2,钢铁收割,英雄连典藏全集1+2,英雄连2指挥官创意版,猎杀潜航4+5,欧陆风云4_v1.31,重炮母舰,哥特舰队阿玛达2,红色管弦乐队2,范海辛奇妙冒险剪辑版,火炬之光2,火炬之光3,暗黑破坏神2合集,神界2原神,咒语力量3,咒语力量3：陨落神明,泰坦之旅不朽王座,恐怖黎明,三位一体4,兽人必须死,亿万僵尸,废土3,冰城传奇4：深度挖掘,神鬼寓言系列,盟军敢死队2重制版,盟军敢死队1-4合集,机械巫师3,奇迹时代 星陨,黑暗地牢,游击队1941,废品机械师,赏金奇兵3,地下城 黑暗领主,奇点灰烬,大将军罗马,天才战术,极乐迪斯科,模拟飞行10,微软模拟飞行2020,模拟农场17,模拟农场19,模拟火车2018,模拟火车2019,模拟火车世界2020,模拟航船,模拟人生4合集,模拟城市5,城市天际线,海岛大亨6,纪元系列,模拟巴士2+16版,德国客车模拟,祖先人类奥德赛,人类黎明,幸福工厂体验版,牧场物语矿石镇,便利商店4,中国式家长,特大城市白金版,火星求生,双点医院,艾文殖民地,祖先遗产,孢子银河冒险,寒霜朋克,异星探险家,传送门2,和班尼特福迪一起攻克难关,人类一败途地,人类黎明,无人深空,暗黑破坏神2合集,群星2.11版本,黑暗地牢,我的世界故事版,我的世界多版本,边缘世界,了不起修仙模拟器,装机电脑模拟器,乞丐模拟器,全面吃鸡模拟器,旋转轮胎合集,旋转轮胎3雪地奔驰,欧洲卡车2中国版,遨游中国2 1.20版,卡车人生中国卡车模拟,车库大师,汽车修理模拟2018,美国卡车模拟最新版,斯堪尼亚重卡驾驶模拟,急难先锋20,狂热运输,鹰击长空1,鹰击长空2,皇牌空战7突击地平线,皇牌空战 未知空域,南方公园,南方公园完整破碎,动物园之星,侏罗纪世界：进化,过山车之星,荒岛求生,饥荒中文,末日求生,木筏求生,七日杀A19,缺氧,人渣,迷失森林,最终幻想经典合集,最终幻想10,最终幻想12,最终幻想13,最终幻想13-2,最终幻想13雷霆归来,最终幻想15,最终幻想世界,永恒之柱死火,斩服少女异布,天国拯救,永恒终焉：4K,刀剑神域VS加速度,刀剑神域虚空断章,刀剑神域虚空幻界,刀剑神域夺命凶弹,刀剑神域失落之歌,刀剑神域彼岸游境,塞达尔荒野之息,莎木1+2,噬神者 解放重生,噬神者2狂怒解放,噬神者3,光明之响,轩辕剑1-5,轩辕剑云之遥,轩辕剑穹之扉,轩辕剑7,古剑奇谭,古剑奇谭2,嗜血印,紫塞秋风,凡人修仙,神舞幻想,河洛群侠传,蜀山幻剑录,仙剑奇侠传1-4,仙剑奇侠传5,仙剑奇侠传5前传,仙剑奇侠传6,侠客风云传,侠客风云传前传,幻想三国志1-4全集,天下无缺,新绝代双鱼戏江湖,天龙八部加强版,金庸群俠傳5天書卷軸,天命奇御,英雄传说 闪之轨迹1,英雄传说 闪之轨迹2,英雄传说 闪之轨迹3,剑侠情缘合集,新剑侠情缘,伊苏8,勇者斗恶龙11,勇者斗恶龙 英雄2,圣剑传说2重置版,圣剑传说3重置版,黑色五叶草骑士四重奏,女神异闻录4,太阁立志传5,狂战传说,奇异人生,奇异人生2第一章,黑相集,黑相集 稀望镇,杀出重围人类分裂,凤凰点,量子破碎,底特律,控制终极版,绝体绝命都市4夏日记忆,暴雨,秋叶原之旅2,碧蓝幻想,塞伯利亚之谜3,福尔摩斯罪与罚,福尔摩斯恶魔之女,谋杀灵魂疑犯,少数幸运儿,莱莎的工作室,逃出生天,瘟疫传说无罪,美少女梦工场,明星志愿2+3,大富翁全集1-10,富甲天下四部合集,SD高达G世纪：火线纵横,火影忍者究极忍者风暴,火影忍者究极忍者风暴2,火影忍者究极忍者风暴3,火影忍者究极忍者风暴革命,火影忍者4博人之路,火影忍者博人传：忍者先锋,不义联盟2,街机游戏合集,怒火铁拳4,古惑狼三部曲,新高达破坏者,海贼无双3,海贼王燃烧热血,海贼王：无尽世界R,海贼王：世界探索者,海贼无双4,哆啦A梦  大雄,西游记：大圣归来,热血少女物语,死亡细胞,功夫鲨鱼传奇,超级机器人大战V,超级机器人大战X,超级机器人大战T,龙珠超宇宙,龙珠超宇宙2,龙珠英雄：世界任务,龙珠战士Z,龙珠Z卡卡罗特,数码宝贝物语网路侦探骇客追忆,漫画英雄VS卡普空3,漫画英雄VS卡普空无限,奥日与鬼火意志,游戏王决斗者遗产,游戏王决斗者遗产链接进化,Jump大乱斗,SNK女格斗家大乱斗,女主角大乱斗,一拳超人：无名英雄,圣斗士,忍者神龟曼哈顿突变,哈利波特7,血污：月之诅咒,血污夜之仪式,侍魂晓,乐高超人总动员,乐高漫威超级英雄,变形金刚4,变形金刚毁灭,变形金刚陨落,洛克人11,洛克人X遗产合集1+2,闪客2,金刚狼,勇敢者游戏,哈迪斯地狱之战,精灵宝可梦究极日＆月,口袋妖怪XY,精灵宝可梦剑盾,神奇蜘蛛侠1,神奇蜘蛛侠2,恋姬演武,恋姬演武辽来来,侍道外传刀神,龙之矛,桃子弹珠 闪乱神乐,灵魂能力6,街头霸王5冠军版,街头霸王5街机版,街头霸王5,终极街霸4,铁拳VS街霸,铁拳7,真人快打9,真人快打10,真人快打11,拳皇981314,刺客信条1,刺客信条2,刺客信条启示录,刺客信条兄弟会,刺客信条3,刺客信条4,刺客信条5大革命,刺客信条6枭雄,刺客信条7起源,刺客信条8奥德赛,龙腾世纪3,阿玛拉王国惩罚重制版,堕落之王,剑士,鬼泣123,鬼泣4特别版,鬼泣维吉尔,鬼泣5,鬼武者HD,恶魔城1,恶魔城2暗影之王,暗黑血统战神版,暗黑血统2,暗黑血统3,暗黑血统创世纪,暗黑之门 伦敦,猎天使魔女1,猎天使魔女2,真三国无双3,真三国无双4,真三国无双5,真三国无双6,真三国无双7,真三国无双7帝国,真三国无双8,无双大蛇Z,无双大蛇3终极版,战国无双4,战国无双真田丸,无双全明星,合金装备崛起复仇,古墓丽影1-8,古墓丽影9,古墓丽影10崛起,古墓丽影11暗影,黑暗之魂重制版,黑暗之魂受死版,黑暗之魂2,黑暗之魂3,讨鬼传极,讨鬼传2,仁王完整版,中土世界暗影魔多,中土世界战争之影,罗马之子,只狼影逝二度,怪物猎人世界冰原,尼尔机械纪元,黑色沙漠,流浪者柯南,巫师2,巫师3,进击的巨人1,进击的巨人2,御姐玫瑰：起源,御姐玫瑰Z2：混沌,影武者2,灵弹魔女,疯狂的麦克斯免安装版,死侍,战神夜袭,战神2,（时光之刃),虐杀原形1,虐争原形2,地狱时刻,蝙蝠侠：阿卡姆骑士,蝙蝠侠起源,恶魔狩猎,冥河暗影碎片,神偷4,龙之信条,归于沉寂,杀手2,杀手4 ,杀手5,杀手6,杀手13重制版,开拓者：拥王者,极品飞车1-15,极品飞车16,极品飞车17,极品飞车18,极品飞车20,极品飞车21,速度与激情：十字路口,尘埃3,尘埃4,尘埃拉力赛,尘埃拉力赛2.0,尘埃拉力赛一决高下,无限试驾2,团队索尼克赛车,赛车计划2,赛车计划3,超级房车 汽车运行含DLC,超级房车起点2,一级方程式赛车2014,一级方程式赛车2016,摩托英豪4,实况足球2018,实况足球2019,实况足球2021,NBA2K18,NBA2K19,NBA2K20,NBA2K21,NBA游乐场,FIFA18,FIFA19,FM2019,FM2020,WWE2K19,WWE2K20,FIFA17,足球小将：新秀崛起,喵星人赛车,澳洲国际网球,克苏鲁的呼唤,丛林地狱,恶灵附身全DLC,恶灵附身2,沉没之城,港诡实录,爱丽丝疯狂回归,行尸走肉全集,超杀行尸走肉,腐烂国度1,腐烂国度2主宰版,寂静岭2剪辑版,寂静岭5,小镇惊魂2,异形大战铁血战士,异形隔离,生化奇兵无限,死亡空间3,死亡岛激潮,报复,纸人1+2,僵尸世界大战,求生之路2+DLC,丧尸围城1,丧尸围城2+绝秘档案,丧尸围城3,丧尸围城4,贪婪之秋,逃生1+告密者,逃生2,吸血鬼,消逝的光芒加强版,地狱之刃塞娜的献祭,生化启示录HD,生化危机启示录2,生化危机0重制版,生化危机1高清重制版,生化危机2重制版,生化危机3重制,生化危机4终极高清版,生化危机5黄金版,生化危机6,生化危机7,众神陨落,荒野大镖客2,漫威复仇者联盟,微软模拟飞行2020,鬼谷八荒,超级机器人大战T,幽灵行者,黑手党终极版,杀手13重置版,真人快打11,戴森球计划,超级马里奥-奥德赛,天穗之咲稻姬,光环士长官合集1-4,地平线零之曙光,赛博朋克2077,杀手3,仁王2,末日准备狂,失忆症：重生,死亡搁浅,部落与弯刀,三国志14威力加强版,热血传奇1.8微变态版,渡神纪：芬尼斯崛起,观察者系统还原,罪恶帝国,骑马与砍杀2霸主,僵尸部队4死亡战争,灵媒,要塞军阀之战,精灵宝可梦剑盾,创世理想乡,塞尔达无双,诸神陨落,狼人之末日怒吼地灵之血,小小梦魇2,英灵神殿,叛乱沙漠风暴,暗黑破坏神3,双人成行,英雄传说 闪之轨迹4 ,暗黑破坏神2重制版,往日不再,大航海时代IV 威力加强版,生物变种,地铁逃离增强版,GTA5中国风整合版,GTA5纯净版1.41,侠盗猎车手4 GTA4,侠盗4自由城之章,罪恶都市终极版,黑道圣徒3重制版,黑道圣徒4,方舟生存进化免安装,方舟生存进化安装版,看门狗,看门狗2,热血无赖,黑手党终极版,黑手党3,杀戮香港,如龙0,如龙极,如龙极2,如龙3重制版,如龙4重制版,如龙5重制版,死或生5福利版,死或生6果果版,上古卷轴5 SEE,仙剑奇剑传1-4,仙剑奇剑传5,仙剑奇剑传5前传,仙剑奇剑传6,生化启示录HD,生化危机启示录2,生化危机0重制版,生化危机1高清重制版,生化危机2重制版,生化危机3重制,生化危机4终极高清版,生化危机5黄金版,生化危机6,生化危机7,CS虎王版,CSGO单机版","5.65G,43.3G,7.33G,11.5G,58.6G,7.95G,17.8G,14.8G,29.4G,44G,55.8G,70.3G,68.8G,16.4G,4.87G,4.04G,49.8G,13.8G,27.4G,50.5G,37.4G,4.66G,8.07G,43.6G,12.8G,7.85G,50.7G,9.22G,6.08G,28.1G,15.5G,45.2G,6.2G,5.01G,15.9G,3.07G,9.19G,2.16G,2.3G,12.9G,14.1G,62.9G,6.20G,60.3G,14.3G,45.8G,10.8G,1.32G,9.82G,34.8G,43.5G,39.6G,17G,20.9G,5.93G,8.47G,14.6G,6.35G,4.53G,124G,64.4G,28.7G,40.7G,62.3G,44.2G,36.5G,39.3G,43.6G,11.6G,66.5G,29G,3.24G,7G,19.2G,36G,37.1G,45.1G,4.53G,18.8G,11.4G,35.9G,1.05G,3.16G,60.3G,53.8G,23.2G,35.7G,11.5G,10G,58.1G,12.2G,15.2G,38.8G,28.1G,7.42G,31G,31.1G,1.63G,8.05G,9.48G,66.1G,15.2G,54.5G,76.8G,2.8G,40.4G,22.7G,37G,5.58G,32.8G,10.8G,10.4G,11G,33.4G,25.8G,18.3G,32.2G,12.5G,10.7G,28.4G,32.1G,25.2G,30.2G,23.9G,34.2G,3.61G,14.8G,22.7G,18.7G,9.94G,33.4G,37.6G,12.3G,11.6G,5.15G,6.36G,6.85G,42.8G,37.9G,4.04G,6.22G,3.63G,4.82G,10.3G,6.71G,6.71G,16.4G,3.03G,13.2G,5.01G,8.34G,8.47G,14.1G,8.74G,5.55G,4.8G,34.9G,23.2G,40.1G,53.4G,7G,4.64G,22.2G,28.5G,15.1G,1.96G,2.29G,5.58G,1.80G,1.97G,7.25G,12.2G,11.3G,12G,5.66G,7.80G,5.67G,13.8G,25.3G,5.55G,9.55G,24.3G,4.59G,8.14G,1.16G,2.98G,23.9G,39.7G,19.8G,53.5G,48.1G,7.35G,1.18G,4.56G,40.6G,8.03G,54.7G,1.81G,5.92G,4.21G,58.4G,21.4G,29.9G,5.84G,9.51G,13.7G,6.28G,6.53G,38.2G,51.7G,20.3G,3.86G,7.20G,9.6G,11.6G,3.23G,7.27G,1.23G,15.7G,2.58G,4.31G,3.83G,5.29G,14.3G,10G,84.2G,8.15G,10.2G,63G,47.3G,84.2G,0.97G,72G,3.65G,4.42G,28.5G,22.2G,8.09G,18.2G,9.97G,1G,16.2G,1.26G,0.29G,0.88G,6.06G,4.80G,3.61G,10.6G,19.2G,5.82G,5.96G,1.06G,4.36G,1.03G,1.47G,1.57G,9.25G,4.21G,7.48G,3.23G,8.85G,33.1G,0.17G,0.98G,3.33G,4.46G,4.56G,11.8G,12.7G,12.1G,12G,2.89G,1.33G,9.93G,1.48G,1.99G,8.85G,24GG,5.08G,5.46G,11.5G,46.6G,6.83G,19.5G,10.5G,5.03G,9.77G,0.55G,1.17G,1.26G,0.24G,10.9G,1.32G,22.2G,5.61g,26.2G,36.8G,29.3G,28.6G,20.6G,18.1G,83.5G,11G,40.9G,12.3G,34.2G,82.3G,10.1G,27.5G,40.8G,13.3G,5.8G,39.9G,20G,22.8G,15.9G,15.3G,21.8G,12.4G,10.1G,5.77G,17.6G,36.3G,9.24G,6.24G,18.5G,32.8G,2.56G,40.1G,11.2G,2.78G,11.6G,8.25G,7.80G,20.5G,16.2G,20.1G,12.5G,3.23G,2.23G,1.14G,2.86G,5.90G,7.83G,18G,21.7G,3.17G,3.08G,24.4G,30.3G,23.6G,3.18G,15.9G,13.9G,13.6G,0.53G,13.5G,15.9G,15.9G,62.7G,55.5G,77G,36.4G,67.6G,58.8G,42.2G,27G,34.8G,3.13G,8.30G,38.8G,8.28G,14G,12.5G,11.5G,14.1G,21.2G,41.5G,0.96G,2.41G,10G,10.2G,46.8G,7.91G,7.19G,16.4G,7.56G,38.5G,18.3G,49.6G,45G,4.71G,29G,8.4,10G,12.6G,11.6G,17.5G,22.G,0.77G,10G,4.83G,1.16,3.89G,13.8G,14.5G,6.20G,9.79G,30.8G,3.11G,4.82G,34G,5.65G,3.54G,54.5G,20.2G,2.32G,1.51G,20.G,12.1G,3.63G,6.77G,8.80G,7.7G,6.10G,0.3G,7.8G,34.3,14.2G,6.09G,6.25G,8.37G,7.86G,2.17G,16.1G,1.46G,5.52G,2.5G,11.4G,7.8,4.17G,23.3G,8.86G,11G,3.98G,5.20G,1.89G,3.62G,6.48G,11.9G,50.4G,29.8G,6.77G,1.89G,8G,57.3G,9.38G,35.4G,103G,22G,2.97G,5.68G,3.49G,3.25G,21.2G,23.1G,41G,66.3G,73G,48.7G,45.4G,38.4G,17.7G,11.4G,11.1G,24.8G,11.1G,40G,11G,15.8G,6.37,22.5G,12.5G,20.6G,10.1G,7.48G,13.7G,19.6G,3.01G,3.75G,1.75G,5.49G,25.3G,14.4G,53.7G,5.65G,24.7G,10.2G,24.2G,18G,24.5G,16.3G,10.6G,33.9G,35.1G,6.88G,3.65G,18.G,24.9G,17.4G,13.5G,73.9G,32.3G,146G,25.8G,18G ,93.3G,52.2G,61.2G,55.3G,12.6G,53.5G,18.4G,39.4G,21.9G,9.92G,14.8G,4.10G,32.2G,6.71G,3.99G,4.09G,3.53G,6.79G,12G,5.10G,51.9G,21.4G,23.2G,10.6G,22.4G,21.8G,10.5G,103G,4.23G,23.7G,64.5G,19.7G,35.6G,31.1G,13.6G,5.80G,9.68G,27.3G,30.3G,84.5G,13.7G,35.8G,32.1G,14.1G,3.5G47.2G,9.8G,6.02G,29.7G,46.1G,45.5G,13.7G,10.1G,5.24G,26.6G,9.72G,19.1G,36.5G,39G,66.8G,71.8G,86.9G,100G,6.2G,43.5G,48.3G,4.63G,5.52G,46.7G,49 G,41.6G,38.6G,3.21G,9.71G,12.1G,12.1G,46.3G,32.6G,30.1G,14.1G,7.77G,29G,39.7G,2.98G,17.7G,1.23G,8.23G,8.06G,14.5G,21.7G,17.5G,10G,9.27G,29.2G,9.23G,30.8G,13.7G,7.81G,8.47G,32.8G,65G,20.2G,4.95G,25.2G,14.2G,30.6G,21.3G,7.4G,16.5G,11.6G,17.5G,24.8G,24.6G,13.9G,8.43G,17.3G,37.5G,43.8G,117G,134G,107G,4G,6.91G,21.3G,36.7G,19.7G,103G,2.32G,6.41G,6.60G,130G,70.3G,64.1G,55G,76.3G,2.08G,33.8G,63.5G,1.17G,18.5G,12.7G,30.8G,12.1G,8.84G,40.1G,61G,39.1G,5.37G,23.3G,9.28G,13.1G,6G,11G,9.91G,1G,46.4G,21.4G,43.6G,27.G,18.9G,59.7G,3.24G,25.2G,79.6G,134G,71.7G,12.8G,13.9G,17.5G,37G,10.4G,143G,44.1G,15.4G,34.3G,12G,36.7G,42.9G,5.28G,13.9G,20.2G,41.2G,23G,30G,27G,26G,48G,18.4G,12G,8.26G,7.80G,20.5G,7.4G,16.5G,11.6G,17.5G,24.8G,24.6G,13.9G,8.43G,17.3G,37.5G,3.45G,16.9G");return this.tableData=e(),this.tableData.filter((function(e){return e.name.toLowerCase().indexOf(G)>-1}))}return this.changType(this.value),this.tableData},arr:function(){return new Array}},mounted:function(){this.changType(this.value)},methods:{cellClass:function(G){if(0===G.columnIndex)return"DisableSelection"},onSubmit:function(){localStorage.setItem("arr",JSON.stringify(this.arr)),this.$router.replace("/pay")},onClickIcon:function(){0==this.arr.length?Object(vant__WEBPACK_IMPORTED_MODULE_7__["a"])("您还没有选择游戏哦"):this.show=!0},removeGame:function(G){for(var e=0;e<this.arr.length;e++)this.arr[e].name==G.name&&(this.arr[e].selected=!1,this.arr.splice(e,1));0==this.arr.length&&(this.show=!1),this.changType(this.value)},handleSelectionChange:function(G,e){var t;if(console.log(e),1==e.selected){e.selected=!1,t=1;for(var r=0;r<this.arr.length;r++)this.arr[r].name==e.name&&1==t&&(this.arr.splice(r,1),t--)}else if(e.selected=!0,this.arr.length>0){t=0;for(var n=0;n<this.arr.length;n++)this.arr[n].name!=e.name&&0==t&&(this.arr.push(e),t++)}else this.arr.push(e);this.price=0,this.count=0;for(var a=0;a<this.arr.length;a++)this.price+=parseFloat(this.arr[a].capacity),this.count++},toggleSelection:function(G){var e=this;this.$nextTick((function(){for(var t=0;t<e.filterData.length;t++)G.name==e.filterData[t].name&&e.$refs.multipleTable.toggleRowSelection(e.filterData[t],!0)}))},changType:function changType(val){for(var i=0;i<this.tableData.length;i++)for(var j=0;j<this.arr.length;j++)this.tableData[i].name==this.arr[j].name&&this.toggleSelection(this.arr[j]);this.price=0,this.count=0;for(var _i3=0;_i3<this.arr.length;_i3++)this.price+=parseFloat(this.arr[_i3].capacity),this.count++;var getObj1=this.changObj("使命召唤1+2,使命召唤4重制版,使命召唤5,使命召唤6,使命召唤6重制版,使命召唤7,使命召唤8,使命召唤9,使命召唤10,使命召唤11,使命召唤12,使命召唤13,使命召唤14,逃离塔科夫,光明记忆EP1,光荣使命,战地1,战地3,战地4,战地5,战地硬仗,狙击手1,狙击手2,狙击手3,狙击手4,地铁2033,地铁逃离,地铁最后曙光,破坏者,终结者反抗军,毁灭全人类重制版,机甲战士5雇佣兵,荣誉勋章空降神兵,荣誉勋章现代战争,荣誉勋章战士 ,狙击精英1,狙击精英僵尸部队三部曲,狙击精英纳粹僵尸大军1,狙击精英纳粹僵尸大军2,狙击精英V2,狙击精英3,狙击精英4,国土防线,国土防线2,质量效应3,质量效应仙女座,子弹风暴重制版,洛杉机之战,孤岛惊魂3,孤岛惊魂4黄金版,孤岛惊魂5,孤岛惊魂新曙光,孤岛惊魂原始杀戮,孤岛危机重制版,孤岛危机弹头,孤岛危机2,孤岛危机3,孤岛危机1,战争机器1,战争机器4,战争机器5,战争机器战术小队,毁灭战士永恒,毁灭战士4,德军总部2新巨像,德军总部旧血液,德军总部新血液,德军总部新秩序,幽灵行动未来战士,幽灵行动荒野,合金装备5幻痛,合金装备原爆点,细胞分裂5,细胞分裂6,彩虹六号单机版,异域奇兵豪华版,失落的星球123,狂野西部枪手,征服,机甲战魔,零世代,正当防卫1,正当防卫2,正当防卫3,正当防卫4,狂怒,狂怒2,无主之地2,无主之地2前传,无主之地3,迸发,迸发2,英雄萨姆4,日落过载,收获日2,遗迹灰烬重生,噬血代码,辐射1+2,辐射3年度版,辐射新维加斯终极版,辐射4废土欲望整合版,星球大战原力释放,星球大战绝地武士,星球大战前线2,耻辱1,耻辱2,耻辱界外魔之死,天外世界,拯救者,黑玫瑰女武神,失眠方舟,崩解,致命躯壳","5.65G,43.3G,7.33G,11.5G,58.6G,7.95G,17.8G,14.8G,29.4G,44G,55.8G,70.3G,68.8G,16.4G,4.87G,4.04G,49.8G,13.8G,27.4G,50.5G,37.4G,4.66G,8.07G,43.6G,12.8G,7.85G,50.7G,9.22G,6.08G,28.1G,15.5G,45.2G,6.2G,5.01G,15.9G,3.07G,9.19G,2.16G,2.3G,12.9G,14.1G,62.9G,6.20G,60.3G,14.3G,45.8G,10.8G,1.32G,9.82G,34.8G,43.5G,39.6G,17G,20.9G,5.93G,8.47G,14.6G,6.35G,4.53G,124G,64.4G,28.7G,40.7G,62.3G,44.2G,36.5G,39.3G,43.6G,11.6G,66.5G,29G,3.24G,7G,19.2G,36G,37.1G,45.1G,4.53G,18.8G,11.4G,35.9G,1.05G,3.16G,60.3G,53.8G,23.2G,35.7G,11.5G,10G,58.1G,12.2G,15.2G,38.8G,28.1G,7.42G,31G,31.1G,1.63G,8.05G,9.48G,66.1G,15.2G,54.5G,76.8G,2.8G,40.4G,22.7G,37G,5.58G,32.8G,10.8G,10.4G,11G"),getObj2=this.changObj("AI少女,家族崩坏,HoneySelect,club,Real Play,超级情圣1,超级情圣2,超级情圣3,性感沙滩4,虚拟追踪者","33.4G,25.8G,18.3G,32.2G,12.5G,10.7G,28.4G,32.1G,14.1G,3.5G"),getObj3=this.changObj("全面战争传奇特洛伊,罗马全面战争,幕府将军武家之殇,全面战争三国,三国全面战争,帝国全面战争,拿破仑全面战争,阿提拉全面战争,中世纪全面战争,战锤全面战争,战锤全面战争2,全面战争不列颠王座,汉之殇全面战争,三国群英传1-8,中世纪王朝,帝国时代1234全集,帝国时代2决定版,帝国时代3决定版,要塞3,要塞3十字军团2,十字军之王2,十字军之王3,远征军,文明5美丽新世界,文明5太空,文明6风云变幻,哥萨克3,美丽水世界,侏罗纪世界进化,家园重制版,三国志1-12,三国志13加强版,三国志14,信长之野望14,信长之野望创造战国立志传,信长之野望大志,骑马与砍杀全集,骑马与砍杀2,英雄无敌1-7全集,魔兽争霸3全集,工人物语7,纪元系列,战锤40K战争黎明3,战锤混沌祸根,战锤40K遗迹之战,战争之人越南,战争之人突击小队,战争之人负罪英雄,战争之人赤潮,战争之人突击小队2,战争之人冷战,战争游戏红龙,战争游戏欧洲扩张,冲突世界,敌军前线,闪电行动红河,红色警戒2+3全集,命令与征服重制版,命令与征服4,光环战争终极版,武装突袭3,突袭3,突袭4,欧陆风云4_v1.31,钢铁雄心4 1.41版本,钢铁之师：诺曼底44,钢铁之师2,钢铁收割,英雄连典藏全集1+2,英雄连2指挥官创意版,猎杀潜航4+5,欧陆风云4_v1.31,重炮母舰,哥特舰队阿玛达2,红色管弦乐队2,范海辛奇妙冒险剪辑版,火炬之光2,火炬之光3,暗黑破坏神2合集,神界2原神,咒语力量3,咒语力量3：陨落神明,泰坦之旅不朽王座,恐怖黎明,三位一体4,兽人必须死,亿万僵尸,废土3,冰城传奇4：深度挖掘,神鬼寓言系列,盟军敢死队2重制版,盟军敢死队1-4合集,机械巫师3,奇迹时代 星陨,黑暗地牢,游击队1941,废品机械师,赏金奇兵3,地下城 黑暗领主,奇点灰烬,大将军罗马,天才战术,极乐迪斯科,模拟飞行10,微软模拟飞行2020,模拟农场17,模拟农场19,模拟火车2018,模拟火车2019,模拟火车世界2020,模拟航船,模拟人生4合集,模拟城市5,城市天际线,海岛大亨6,纪元系列,模拟巴士2+16版,德国客车模拟,祖先人类奥德赛,人类黎明,幸福工厂体验版,牧场物语矿石镇,便利商店4,中国式家长,特大城市白金版,火星求生,双点医院,艾文殖民地,祖先遗产,孢子银河冒险,寒霜朋克,异星探险家,传送门2,和班尼特福迪一起攻克难关,人类一败途地,人类黎明,无人深空,暗黑破坏神2合集,群星2.11版本,黑暗地牢,我的世界故事版,我的世界多版本,边缘世界,了不起修仙模拟器,装机电脑模拟器,乞丐模拟器,全面吃鸡模拟器,旋转轮胎合集,旋转轮胎3雪地奔驰,欧洲卡车2中国版,遨游中国2 1.20版,卡车人生中国卡车模拟,车库大师,汽车修理模拟2018,美国卡车模拟最新版,斯堪尼亚重卡驾驶模拟,急难先锋20,狂热运输,鹰击长空1,鹰击长空2,皇牌空战7突击地平线,皇牌空战 未知空域,南方公园,南方公园完整破碎,动物园之星,侏罗纪世界：进化,过山车之星,荒岛求生,饥荒中文,末日求生,木筏求生,七日杀A19,缺氧,人渣,迷失森林","25.2G,30.2G,23.9G,34.2G,3.61G,14.8G,22.7G,18.7G,9.94G,33.4G,37.6G,12.3G,11.6G,5.15G,6.36G,6.85G,42.8G,37.9G,4.04G,6.22G,3.63G,4.82G,10.3G,6.71G,6.71G,16.4G,3.03G,13.2G,5.01G,8.34G,8.47G,14.1G,8.74G,5.55G,4.8G,34.9G,23.2G,40.1G,53.4G,7G,4.64G,22.2G,28.5G,15.1G,1.96G,2.29G,5.58G,1.80G,1.97G,7.25G,12.2G,11.3G,12G,5.66G,7.80G,5.67G,13.8G,25.3G,5.55G,9.55G,24.3G,4.59G,8.14G,1.16G,2.98G,23.9G,39.7G,19.8G,53.5G,48.1G,7.35G,1.18G,4.56G,40.6G,8.03G,54.7G,1.81G,5.92G,4.21G,58.4G,21.4G,29.9G,5.84G,9.51G,13.7G,6.28G,6.53G,38.2G,51.7G,20.3G,3.86G,7.20G,9.6G,11.6G,3.23G,7.27G,1.23G,15.7G,2.58G,4.31G,3.83G,5.29G,14.3G,10G,84.2G,8.15G,10.2G,63G,47.3G,84.2G,0.97G,72G,3.65G,4.42G,28.5G,22.2G,8.09G,18.2G,9.97G,1G,16.2G,1.26G,0.29G,0.88G,6.06G,4.80G,3.61G,10.6G,19.2G,5.82G,5.96G,1.06G,4.36G,1.03G,1.47G,1.57G,9.25G,4.21G,7.48G,3.23G,8.85G,33.1G,0.17G,0.98G,3.33G,4.46G,4.56G,11.8G,12.7G,12.1G,12G,2.89G,1.33G,9.93G,1.48G,1.99G,8.85G,24GG,5.08G,5.46G,11.5G,46.6G,6.83G,19.5G,10.5G,5.03G,9.77G,0.55G,1.17G,1.26G,0.24G,10.9G,1.32G,22.2G,5.61g"),getObj4=this.changObj("最终幻想经典合集,最终幻想10,最终幻想12,最终幻想13,最终幻想13-2,最终幻想13雷霆归来,最终幻想15,最终幻想世界,永恒之柱死火,斩服少女异布,天国拯救,永恒终焉：4K,刀剑神域VS加速度,刀剑神域虚空断章,刀剑神域虚空幻界,刀剑神域夺命凶弹,刀剑神域失落之歌,刀剑神域彼岸游境,塞达尔荒野之息,莎木1+2,噬神者 解放重生,噬神者2狂怒解放,噬神者3,光明之响,轩辕剑1-5,轩辕剑云之遥,轩辕剑穹之扉,轩辕剑7,古剑奇谭,古剑奇谭2,嗜血印,紫塞秋风,凡人修仙,神舞幻想,河洛群侠传,蜀山幻剑录,仙剑奇侠传1-4,仙剑奇侠传5,仙剑奇侠传5前传,仙剑奇侠传6,侠客风云传,侠客风云传前传,幻想三国志1-4全集,天下无缺,新绝代双鱼戏江湖,天龙八部加强版,金庸群俠傳5天書卷軸,天命奇御,英雄传说 闪之轨迹1,英雄传说 闪之轨迹2,英雄传说 闪之轨迹3,剑侠情缘合集,新剑侠情缘,伊苏8,勇者斗恶龙11,勇者斗恶龙 英雄2,圣剑传说2重置版,圣剑传说3重置版,黑色五叶草骑士四重奏,女神异闻录4,太阁立志传5,狂战传说,奇异人生,奇异人生2第一章,黑相集,黑相集 稀望镇,杀出重围人类分裂,凤凰点,量子破碎,底特律,控制终极版,绝体绝命都市4夏日记忆,暴雨,秋叶原之旅2,碧蓝幻想,塞伯利亚之谜3,福尔摩斯罪与罚,福尔摩斯恶魔之女,谋杀灵魂疑犯,少数幸运儿,莱莎的工作室,逃出生天,瘟疫传说无罪,美少女梦工场,明星志愿2+3,大富翁全集1-10,富甲天下四部合集","26.2G,36.8G,29.3G,28.6G,20.6G,18.1G,83.5G,11G,40.9G,12.3G,34.2G,82.3G,10.1G,27.5G,40.8G,13.3G,5.8G,39.9G,20G,22.8G,15.9G,15.3G,21.8G,12.4G,10.1G,5.77G,17.6G,36.3G,9.24G,6.24G,18.5G,32.8G,2.56G,40.1G,11.2G,2.78G,11.6G,8.25G,7.80G,20.5G,16.2G,20.1G,12.5G,3.23G,2.23G,1.14G,2.86G,5.90G,7.83G,18G,21.7G,3.17G,3.08G,24.4G,30.3G,23.6G,3.18G,15.9G,13.9G,13.6G,0.53G,13.5G,15.9G,15.9G,62.7G,55.5G,77G,36.4G,67.6G,58.8G,42.2G,27G,34.8G,3.13G,8.30G,38.8G,8.28G,14G,12.5G,11.5G,14.1G,21.2G,41.5G,0.96G,2.41G,10G,10.2G"),getObj5=this.changObj("SD高达G世纪：火线纵横,火影忍者究极忍者风暴,火影忍者究极忍者风暴2,火影忍者究极忍者风暴3,火影忍者究极忍者风暴革命,火影忍者4博人之路,火影忍者博人传：忍者先锋,不义联盟2,街机游戏合集,怒火铁拳4,古惑狼三部曲,新高达破坏者,海贼无双3,海贼王燃烧热血,海贼王：无尽世界R,海贼王：世界探索者,海贼无双4,哆啦A梦  大雄,西游记：大圣归来,热血少女物语,死亡细胞,功夫鲨鱼传奇,超级机器人大战V,超级机器人大战X,超级机器人大战T,龙珠超宇宙,龙珠超宇宙2,龙珠英雄：世界任务,龙珠战士Z,龙珠Z卡卡罗特,数码宝贝物语网路侦探骇客追忆,漫画英雄VS卡普空3,漫画英雄VS卡普空无限,奥日与鬼火意志,游戏王决斗者遗产,游戏王决斗者遗产链接进化,Jump大乱斗,SNK女格斗家大乱斗,女主角大乱斗,一拳超人：无名英雄,圣斗士,忍者神龟曼哈顿突变,哈利波特7,血污：月之诅咒,血污夜之仪式,侍魂晓,乐高超人总动员,乐高漫威超级英雄,变形金刚4,变形金刚毁灭,变形金刚陨落,洛克人11,洛克人X遗产合集1+2,闪客2,金刚狼,勇敢者游戏,哈迪斯地狱之战,精灵宝可梦究极日＆月,口袋妖怪XY,精灵宝可梦剑盾,神奇蜘蛛侠1,神奇蜘蛛侠2,恋姬演武,恋姬演武辽来来,侍道外传刀神,龙之矛,桃子弹珠 闪乱神乐,灵魂能力6,街头霸王5冠军版,街头霸王5街机版,街头霸王5,终极街霸4,铁拳VS街霸,铁拳7,真人快打9,真人快打10,真人快打11,拳皇981314","46.8G,7.91G,7.19G,16.4G,7.56G,38.5G,18.3G,49.6G,45G,4.71G,29G,8.4,10G,12.6G,11.6G,17.5G,22.G,0.77G,10G,4.83G,1.16,3.89G,13.8G,14.5G,6.20G,9.79G,30.8G,3.11G,4.82G,34G,5.65G,3.54G,54.5G,20.2G,2.32G,1.51G,20.G,12.1G,3.63G,6.77G,8.80G,7.7G,6.10G,0.3G,7.8G,34.3,14.2G,6.09G,6.25G,8.37G,7.86G,2.17G,16.1G,1.46G,5.52G,2.5G,11.4G,7.8,4.17G,23.3G,8.86G,11G,3.98G,5.20G,1.89G,3.62G,6.48G,11.9G,50.4G,29.8G,6.77G,1.89G,8G,57.3G,9.38G,35.4G,103G,22G"),getObj6=this.changObj("刺客信条1,刺客信条2,刺客信条启示录,刺客信条兄弟会,刺客信条3,刺客信条4,刺客信条5大革命,刺客信条6枭雄,刺客信条7起源,刺客信条8奥德赛,龙腾世纪3,阿玛拉王国惩罚重制版,堕落之王,剑士,鬼泣123,鬼泣4特别版,鬼泣维吉尔,鬼泣5,鬼武者HD,恶魔城1,恶魔城2暗影之王,暗黑血统战神版,暗黑血统2,暗黑血统3,暗黑血统创世纪,暗黑之门 伦敦,猎天使魔女1,猎天使魔女2,真三国无双3,真三国无双4,真三国无双5,真三国无双6,真三国无双7,真三国无双7帝国,真三国无双8,无双大蛇Z,无双大蛇3终极版,战国无双4,战国无双真田丸,无双全明星,合金装备崛起复仇,古墓丽影1-8,古墓丽影9,古墓丽影10崛起,古墓丽影11暗影,黑暗之魂重制版,黑暗之魂受死版,黑暗之魂2,黑暗之魂3,讨鬼传极,讨鬼传2,仁王完整版,中土世界暗影魔多,中土世界战争之影,罗马之子,只狼影逝二度,怪物猎人世界冰原,尼尔机械纪元,黑色沙漠,流浪者柯南,巫师2,巫师3,进击的巨人1,进击的巨人2,御姐玫瑰：起源,御姐玫瑰Z2：混沌,影武者2,灵弹魔女,疯狂的麦克斯免安装版,死侍,战神夜袭,战神2,（时光之刃),虐杀原形1,虐争原形2,地狱时刻,蝙蝠侠：阿卡姆骑士,蝙蝠侠起源,恶魔狩猎,冥河暗影碎片,神偷4,龙之信条,归于沉寂,杀手2,杀手4 ,杀手5,杀手6,杀手13重制版,开拓者：拥王者","2.97G,5.68G,3.49G,3.25G,21.2G,23.1G,41G,66.3G,73G,48.7G,45.4G,38.4G,17.7G,11.4G,11.1G,24.8G,11.1G,40G,11G,15.8G,6.37,22.5G,12.5G,20.6G,10.1G,7.48G,13.7G,19.6G,3.01G,3.75G,1.75G,5.49G,25.3G,14.4G,53.7G,5.65G,24.7G,10.2G,24.2G,18G,24.5G,16.3G,10.6G,33.9G,35.1G,6.88G,3.65G,18.G,24.9G,17.4G,13.5G,73.9G,32.3G,146G,25.8G,18G ,93.3G,52.2G,61.2G,55.3G,12.6G,53.5G,18.4G,39.4G,21.9G,9.92G,14.8G,4.10G,32.2G,6.71G,3.99G,4.09G,3.53G,6.79G,12G,5.10G,51.9G,21.4G,23.2G,10.6G,22.4G,21.8G,10.5G,103G,4.23G,23.7G,64.5G,19.7G,35.6G"),getObj7=this.changObj("极品飞车1-15,极品飞车16,极品飞车17,极品飞车18,极品飞车20,极品飞车21,速度与激情：十字路口,尘埃3,尘埃4,尘埃拉力赛,尘埃拉力赛2.0,尘埃拉力赛一决高下,无限试驾2,团队索尼克赛车,赛车计划2,赛车计划3,超级房车 汽车运行含DLC,超级房车起点2,一级方程式赛车2014,一级方程式赛车2016,摩托英豪4,实况足球2018,实况足球2019,实况足球2021,NBA2K18,NBA2K19,NBA2K20,NBA2K21,NBA游乐场,FIFA18,FIFA19,FM2019,FM2020,WWE2K19,WWE2K20,FIFA17,足球小将：新秀崛起,喵星人赛车,澳洲国际网球","31.1G,13.6G,5.80G,9.68G,27.3G,30.3G,84.5G,13.7G,35.8G,32.1G,47.2G,9.8G,6.02G,29.7G,46.1G,45.5G,13.7G,10.1G,5.24G,26.6G,9.72G,19.1G,36.5G,39G,66.8G,71.8G,86.9G,100G,6.2G,43.5G,48.3G,4.63G,5.52G,46.7G,49 G,41.6G,38.6G,3.21G,9.71G"),getObj8=this.changObj("克苏鲁的呼唤,丛林地狱,恶灵附身全DLC,恶灵附身2,沉没之城,港诡实录,爱丽丝疯狂回归,行尸走肉全集,超杀行尸走肉,腐烂国度1,腐烂国度2主宰版,寂静岭2剪辑版,寂静岭5,小镇惊魂2,异形大战铁血战士,异形隔离,生化奇兵无限,死亡空间3,死亡岛激潮,报复,纸人1+2,僵尸世界大战,求生之路2+DLC,丧尸围城1,丧尸围城2+绝秘档案,丧尸围城3,丧尸围城4,贪婪之秋,逃生1+告密者,逃生2,吸血鬼,消逝的光芒加强版,地狱之刃塞娜的献祭,生化启示录HD,生化危机启示录2,生化危机0重制版,生化危机1高清重制版,生化危机2重制版,生化危机3重制,生化危机4终极高清版,生化危机5黄金版,生化危机6,生化危机7","12.1G,12.1G,46.3G,32.6G,30.1G,14.1G,7.77G,29G,39.7G,2.98G,17.7G,1.23G,8.23G,8.06G,14.5G,21.7G,17.5G,10G,9.27G,29.2G,9.23G,30.8G,13.7G,7.81G,8.47G,32.8G,65G,20.2G,4.95G,25.2G,14.2G,30.6G,21.3G,7.4G,16.5G,11.6G,17.5G,24.8G,24.6G,13.9G,8.43G,17.3G,37.5G"),getObj9=this.changObj("众神陨落,荒野大镖客2,漫威复仇者联盟,微软模拟飞行2020,鬼谷八荒,超级机器人大战T,幽灵行者,黑手党终极版,杀手13重置版,真人快打11,戴森球计划,超级马里奥-奥德赛,天穗之咲稻姬,光环士长官合集1-4,地平线零之曙光,赛博朋克2077,杀手3,仁王2,末日准备狂,失忆症：重生,死亡搁浅,部落与弯刀,三国志14威力加强版,热血传奇1.8微变态版,渡神纪：芬尼斯崛起,观察者系统还原,罪恶帝国,骑马与砍杀2霸主,僵尸部队4死亡战争,灵媒,要塞军阀之战,精灵宝可梦剑盾,创世理想乡,塞尔达无双,诸神陨落,狼人之末日怒吼地灵之血,小小梦魇2,英灵神殿,叛乱沙漠风暴,暗黑破坏神3,双人成行,英雄传说 闪之轨迹4 ,暗黑破坏神2重制版,往日不再,大航海时代IV 威力加强版,生物变种,地铁逃离增强版","43.8G,117G,134G,107G,4G,6.91G,21.3G,36.7G,19.7G,103G,2.32G,6.41G,6.60G,130G,70.3G,64.1G,55G,76.3G,2.08G,33.8G,63.5G,1.17G,18.5G,12.7G,30.8G,12.1G,8.84G,40.1G,61G,39.1G,5.37G,23.3G,9.28G,13.1G,6G,11G,9.91G,1G,46.4G,21.4G,43.6G,27.G,18.9G,59.7G,3.24G,25.2G,79.6G"),getObj10=this.changObj("GTA5中国风整合版,GTA5纯净版1.41,侠盗猎车手4 GTA4,侠盗4自由城之章,罪恶都市终极版,黑道圣徒3重制版,黑道圣徒4,方舟生存进化免安装,方舟生存进化安装版,看门狗,看门狗2,热血无赖,黑手党终极版,黑手党3,杀戮香港,如龙0,如龙极,如龙极2,如龙3重制版,如龙4重制版,如龙5重制版,死或生5福利版,死或生6果果版,上古卷轴5 SEE,仙剑奇剑传1-4,仙剑奇剑传5,仙剑奇剑传5前传,仙剑奇剑传6,生化启示录HD,生化危机启示录2,生化危机0重制版,生化危机1高清重制版,生化危机2重制版,生化危机3重制,生化危机4终极高清版,生化危机5黄金版,生化危机6,生化危机7,CS虎王版,CSGO单机版","134G,71.7G,12.8G,13.9G,17.5G,37G,10.4G,143G,44.1G,15.4G,34.3G,12G,36.7G,42.9G,5.28G,13.9G,20.2G,41.2G,23G,30G,27G,26G,48G,18.4G,12G,8.26G,7.80G,20.5G,7.4G,16.5G,11.6G,17.5G,24.8G,24.6G,13.9G,8.43G,17.3G,37.5G,3.45G,16.9G");this.value=val,this.tableData=eval("getObj"+val+"()")},changObj:function(G,e){var t=[],r=[];return t=G.split(","),r=e.split(","),function(){for(var G=[],e=0;e<t.length;e++){var n={};n.name=t[e],n.capacity=r[e],n.selected=!1,G.push(n)}return G}}}}},"9f7f":function(G,e,t){"use strict";var r=t("d039");function n(G,e){return RegExp(G,e)}e.UNSUPPORTED_Y=r((function(){var G=n("a","y");return G.lastIndex=2,null!=G.exec("abcd")})),e.BROKEN_CARET=r((function(){var G=n("^r","gy");return G.lastIndex=2,null!=G.exec("str")}))},a434:function(G,e,t){"use strict";var r=t("23e7"),n=t("23cb"),a=t("a691"),i=t("50c4"),c=t("7b0b"),l=t("65f0"),s=t("8418"),_=t("1dde"),o=_("splice"),u=Math.max,f=Math.min,h=9007199254740991,d="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!o},{splice:function(G,e){var t,r,_,o,p,v,g=c(this),b=i(g.length),E=n(G,b),x=arguments.length;if(0===x?t=r=0:1===x?(t=0,r=b-E):(t=x-2,r=f(u(a(e),0),b-E)),b+t-r>h)throw TypeError(d);for(_=l(g,r),o=0;o<r;o++)p=E+o,p in g&&s(_,o,g[p]);if(_.length=r,t<r){for(o=E;o<b-r;o++)p=o+r,v=o+t,p in g?g[v]=g[p]:delete g[v];for(o=b;o>b-r+t;o--)delete g[o-1]}else if(t>r)for(o=b-r;o>E;o--)p=o+r-1,v=o+t-1,p in g?g[v]=g[p]:delete g[v];for(o=0;o<t;o++)g[o+E]=arguments[o+2];return g.length=b-r+t,_}})},ac1f:function(G,e,t){"use strict";var r=t("23e7"),n=t("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(G,e,t){"use strict";var r=t("825a");G.exports=function(){var G=r(this),e="";return G.global&&(e+="g"),G.ignoreCase&&(e+="i"),G.multiline&&(e+="m"),G.dotAll&&(e+="s"),G.unicode&&(e+="u"),G.sticky&&(e+="y"),e}},b0c0:function(G,e,t){var r=t("83ab"),n=t("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,l="name";r&&!(l in a)&&n(a,l,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(G){return""}}})},b727:function(G,e,t){var r=t("0366"),n=t("44ad"),a=t("7b0b"),i=t("50c4"),c=t("65f0"),l=[].push,s=function(G){var e=1==G,t=2==G,s=3==G,_=4==G,o=6==G,u=7==G,f=5==G||o;return function(h,d,p,v){for(var g,b,E=a(h),x=n(E),m=r(d,p,3),O=i(x.length),D=0,j=v||c,A=e?j(h,O):t||u?j(h,0):void 0;O>D;D++)if((f||D in x)&&(g=x[D],b=m(g,D,E),G))if(e)A[D]=b;else if(b)switch(G){case 3:return!0;case 5:return g;case 6:return D;case 2:l.call(A,g)}else switch(G){case 4:return!1;case 7:l.call(A,g)}return o?-1:s||_?_:A}};G.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},bb51:function(G,e,t){"use strict";t.r(e);var r=function(){var G=this,e=G.$createElement,t=G._self._c||e;return t("div",{staticClass:"container"},[t("h2",[G._v("虹阳电游游戏自选")]),t("van-dropdown-menu",[t("van-dropdown-item",{attrs:{options:G.option},on:{change:G.changType},model:{value:G.value,callback:function(e){G.value=e},expression:"value"}})],1),t("van-search",{attrs:{placeholder:"请输入搜索关键词"},model:{value:G.search,callback:function(e){G.search=e},expression:"search"}}),t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:G.filterData,"tooltip-effect":"dark","header-cell-class-name":G.cellClass},on:{select:G.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"name",label:"游戏名称",align:"center","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"capacity",label:"容量",align:"center"}})],1),t("van-submit-bar",{attrs:{price:100*G.price,currency:"","suffix-label":"G","button-text":"确定",label:"已选择","text-align":"left"},on:{submit:G.onSubmit}},[t("div",{attrs:{slot:"default"},slot:"default"},[t("van-goods-action-icon",{attrs:{icon:"cart-o",badge:G.count,text:"已选游戏"},on:{click:G.onClickIcon}})],1)]),t("van-popup",{style:{height:"50%"},attrs:{round:"",position:"bottom"},model:{value:G.show,callback:function(e){G.show=e},expression:"show"}},[t("van-cell-group",G._l(G.arr,(function(e){return t("van-cell",{key:e.name,attrs:{center:"",title:e.name,label:e.capacity}},[t("div",{attrs:{slot:"default"},slot:"default"},[t("van-button",{attrs:{round:"",type:"default",size:"small"},on:{click:function(t){return G.removeGame(e)}}},[G._v("移除")])],1)])})),1)],1)],1)},n=[],a=t("9cae"),i=a["a"],c=(t("cccb"),t("2877")),l=Object(c["a"])(i,r,n,!1,null,null,null);e["default"]=l.exports},cccb:function(G,e,t){"use strict";t("5ced")},d784:function(G,e,t){"use strict";t("ac1f");var r=t("6eeb"),n=t("9263"),a=t("d039"),i=t("b622"),c=t("9112"),l=i("species"),s=RegExp.prototype,_=!a((function(){var G=/./;return G.exec=function(){var G=[];return G.groups={a:"7"},G},"7"!=="".replace(G,"$<a>")})),o=function(){return"$0"==="a".replace(/./,"$0")}(),u=i("replace"),f=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),h=!a((function(){var G=/(?:)/,e=G.exec;G.exec=function(){return e.apply(this,arguments)};var t="ab".split(G);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));G.exports=function(G,e,t,u){var d=i(G),p=!a((function(){var e={};return e[d]=function(){return 7},7!=""[G](e)})),v=p&&!a((function(){var e=!1,t=/a/;return"split"===G&&(t={},t.constructor={},t.constructor[l]=function(){return t},t.flags="",t[d]=/./[d]),t.exec=function(){return e=!0,null},t[d](""),!e}));if(!p||!v||"replace"===G&&(!_||!o||f)||"split"===G&&!h){var g=/./[d],b=t(d,""[G],(function(G,e,t,r,a){var i=e.exec;return i===n||i===s.exec?p&&!a?{done:!0,value:g.call(e,t,r)}:{done:!0,value:G.call(t,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:o,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=b[0],x=b[1];r(String.prototype,G,E),r(s,d,2==e?function(G,e){return x.call(G,this,e)}:function(G){return x.call(G,this)})}u&&c(s[d],"sham",!0)}},e8b5:function(G,e,t){var r=t("c6b6");G.exports=Array.isArray||function(G){return"Array"==r(G)}}}]);