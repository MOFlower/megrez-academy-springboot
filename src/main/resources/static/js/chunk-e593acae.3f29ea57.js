(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e593acae"],{"3dca":function(t,i,s){"use strict";var e=s("ffad"),a=s.n(e);a.a},7159:function(t,i,s){t.exports=s.p+"img/img.146655c9.jpg"},"7ed4":function(t,i,s){"use strict";var e=s("2b0e"),a=new e["default"];i["a"]=a},"8c93":function(t,i,s){var e;
/*!
 * sChart JavaScript Library v2.0.1
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */(function(a,h){e=function(){return h(a)}.call(i,s,i,t),void 0===e||(t.exports=e)})(this,(function(t){"use strict";function i(t,i,s,e){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.dpi=window.devicePixelRatio||1,this.type=i,this.data=s,this.dataLength=this.data.length,this.showValue=!0,this.autoWidth=!1,this.width=this.canvas.width*this.dpi,this.height=this.canvas.height*this.dpi,this.topPadding=50*this.dpi,this.leftPadding=50*this.dpi,this.rightPadding=0*this.dpi,this.bottomPadding=50*this.dpi,this.yEqual=5,this.yLength=0,this.xLength=0,this.yFictitious=0,this.yRatio=0,this.bgColor="#ffffff",this.fillColor="#1E9FFF",this.axisColor="#666666",this.contentColor="#eeeeee",this.titleColor="#000000",this.title="",this.titlePosition="top",this.radius=100*this.dpi,this.innerRadius=70*this.dpi,this.colorList=["#1E9FFF","#13CE66","#F7BA2A","#FF4949","#72f6ff","#199475","#e08031","#726dd1"],this.legendColor="#000000",this.legendTop=40*this.dpi,this.totalValue=this.getTotalValue(),this.init(e)}return i.prototype={init:function(t){if(0===this.dataLength)return!1;if(t){var i=["topPadding","leftPadding","rightPadding","bottomPadding","radius","innerRadius","legendTop"];for(var s in t)"colorList"===s&&Array.isArray(t[s])?this[s]=t[s].concat(this[s]):i.indexOf(s)>-1?this[s]=t[s]*this.dpi:this[s]=t[s]}t.autoWidth?(this.width=this.canvas.width=this.canvas.parentNode.offsetWidth*this.dpi,this.height=this.canvas.height=this.canvas.parentNode.offsetHeight*this.dpi,this.canvas.setAttribute("style","width:"+this.canvas.parentNode.offsetWidth+"px;height:"+this.canvas.parentNode.offsetHeight+"px;")):(this.canvas.setAttribute("style","width:"+this.canvas.width+"px;height:"+this.canvas.height+"px;"),this.canvas.width*=this.dpi,this.canvas.height*=this.dpi),"bar"===this.type||"line"===this.type?(this.yLength=Math.floor((this.height-this.topPadding-this.bottomPadding-10)/this.yEqual),this.xLength=Math.floor((this.width-this.leftPadding-this.rightPadding-10)/this.dataLength),this.yFictitious=this.getYFictitious(this.data),this.yRatio=this.yLength/this.yFictitious,this.drawBarUpdate()):this.drawPieUpdate()},drawBarUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawAxis(),this.drawPoint(),this.drawTitle(),this.drawBarChart()},drawPieUpdate:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.width,this.height),this.drawLegend(),this.drawTitle(),this.drawPieChart()},drawBarChart:function(){this.ctx.fillStyle=this.fillColor,this.ctx.strokeStyle=this.fillColor;for(var t=0;t<this.dataLength;t++)this.data[t].left=this.leftPadding+this.xLength*(t+.25),this.data[t].top=this.height-this.bottomPadding-this.data[t].value*this.yRatio,this.data[t].right=this.leftPadding+this.xLength*(t+.75),this.data[t].bottom=this.height-this.bottomPadding,"line"===this.type?(this.ctx.beginPath(),this.ctx.arc(this.data[t].left+this.xLength/4,this.data[t].top,2,0,2*Math.PI,!0),this.ctx.fill(),0!==t&&(this.ctx.moveTo(this.data[t].left+this.xLength/4,this.data[t].top),this.ctx.lineTo(this.data[t-1].left+this.xLength/4,this.data[t-1].top)),this.ctx.stroke()):"bar"===this.type&&this.ctx.fillRect(this.data[t].left,this.data[t].top,this.data[t].right-this.data[t].left,this.data[t].bottom-this.data[t].top),this.showValue&&(this.ctx.font=12*this.dpi+"px Arial",this.ctx.fillText(this.data[t].value,this.data[t].left+this.xLength/4,this.data[t].top-5))},drawPieChart:function(){for(var t=this.width/2,i=this.height/2,s=0,e=0,a=0;a<this.dataLength;a++)this.ctx.beginPath(),this.ctx.fillStyle=this.colorList[a],this.ctx.moveTo(t,i),this.data[a].start=0===a?-Math.PI/2:this.data[a-1].end,this.data[a].end=this.data[a].start+this.data[a].value/this.totalValue*2*Math.PI,this.ctx.arc(t,i,this.radius,this.data[a].start,this.data[a].end),this.ctx.closePath(),this.ctx.fill(),this.data[a].middle=(this.data[a].start+this.data[a].end)/2,s=Math.ceil(Math.abs(this.radius*Math.cos(this.data[a].middle))),e=Math.floor(Math.abs(this.radius*Math.sin(this.data[a].middle))),this.ctx.strokeStyle=this.colorList[a],this.showValue&&(this.data[a].middle<=0?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i-e),this.ctx.lineTo(t+s+10,i-e-10),this.ctx.moveTo(t+s+10,i-e-10),this.ctx.lineTo(t+s+this.radius/2,i-e-10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t+s+5+this.radius/2,i-e-5)):this.data[a].middle>0&&this.data[a].middle<=Math.PI/2?(this.ctx.textAlign="left",this.ctx.moveTo(t+s,i+e),this.ctx.lineTo(t+s+10,i+e+10),this.ctx.moveTo(t+s+10,i+e+10),this.ctx.lineTo(t+s+this.radius/2,i+e+10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t+s+5+this.radius/2,i+e+15)):this.data[a].middle>Math.PI/2&&this.data[a].middle<Math.PI?(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i+e),this.ctx.lineTo(t-s-10,i+e+10),this.ctx.moveTo(t-s-10,i+e+10),this.ctx.lineTo(t-s-this.radius/2,i+e+10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t-s-5-this.radius/2,i+e+15)):(this.ctx.textAlign="right",this.ctx.moveTo(t-s,i-e),this.ctx.lineTo(t-s-10,i-e-10),this.ctx.moveTo(t-s-10,i-e-10),this.ctx.lineTo(t-s-this.radius/2,i-e-10),this.ctx.stroke(),this.ctx.fillText(this.data[a].value,t-s-5-this.radius/2,i-e-5)));"ring"===this.type&&(this.ctx.beginPath(),this.ctx.fillStyle=this.bgColor,this.ctx.arc(t,i,this.innerRadius,0,2*Math.PI),this.ctx.fill())},drawAxis:function(){this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+.5,this.topPadding+.5),this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding+.5),this.ctx.stroke()},drawPoint:function(){this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="center",this.ctx.fillStyle=this.axisColor;for(var t=0;t<this.dataLength;t++){var i=this.data[t].name,s=this.xLength*(t+1);this.ctx.moveTo(this.leftPadding+s+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding+s+.5,this.height-this.bottomPadding+5.5),this.ctx.fillText(i,this.leftPadding+s-this.xLength/2,this.height-this.bottomPadding+15*this.dpi)}this.ctx.stroke(),this.ctx.beginPath(),this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="right",this.ctx.fillStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding+.5),this.ctx.fillText(0,this.leftPadding-10,this.height-this.bottomPadding+5);for(t=0;t<this.yEqual;t++){var e=this.yFictitious*(t+1),a=this.yLength*(t+1);this.ctx.beginPath(),this.ctx.strokeStyle=this.axisColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-a+.5),this.ctx.lineTo(this.leftPadding-4.5,this.height-this.bottomPadding-a+.5),this.ctx.stroke(),this.ctx.fillText(e,this.leftPadding-10,this.height-this.bottomPadding-a+5),this.ctx.beginPath(),this.ctx.strokeStyle=this.contentColor,this.ctx.moveTo(this.leftPadding+.5,this.height-this.bottomPadding-a+.5),this.ctx.lineTo(this.width-this.rightPadding-.5,this.height-this.bottomPadding-a+.5),this.ctx.stroke()}},drawTitle:function(){this.title&&(this.ctx.beginPath(),this.ctx.textAlign="center",this.ctx.fillStyle=this.titleColor,this.ctx.font=16*this.dpi+"px Microsoft YaHei","bottom"===this.titlePosition&&this.bottomPadding>=40?this.ctx.fillText(this.title,this.width/2,this.height-5):this.ctx.fillText(this.title,this.width/2,this.topPadding/2+5))},drawLegend:function(){for(var t=0;t<this.dataLength;t++)this.ctx.fillStyle=this.colorList[t],this.ctx.fillRect(10,this.legendTop+15*t*this.dpi,20,11),this.ctx.fillStyle=this.legendColor,this.ctx.font=12*this.dpi+"px Microsoft YaHei",this.ctx.textAlign="left",this.ctx.fillText(this.data[t].name,35,this.legendTop+10+15*t*this.dpi)},getYFictitious:function(t){var i=t.slice(0);i.sort((function(t,i){return-(t.value-i.value)}));var s=Math.ceil(i[0].value/this.yEqual),e=s.toString().length-1;return e=e>2?2:e,Math.ceil(s/Math.pow(10,e))*Math.pow(10,e)},getTotalValue:function(){for(var t=0,i=0;i<this.dataLength;i++)t+=this.data[i].value;return t}},i}))},"9c91":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"user-info"},[e("img",{staticClass:"user-avator",attrs:{src:s("7159"),alt:""}}),e("div",{staticClass:"user-info-cont"},[e("div",{staticClass:"user-info-name"},[t._v(t._s(t.userInfo.firstName))]),e("div",[t._v("parent")])])])]),e("el-card",{staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("Notification")])]),e("p",[t._v(t._s(t.publicNotification))])])],1),e("el-col",{attrs:{span:16}},[e("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-1"},[e("i",{staticClass:"el-icon-lx-people grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("div",{staticClass:"grid-num"},[t._v(t._s(t.studentList.length))]),e("div",[t._v("You kids")])])])])],1),e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-2"},[e("i",{staticClass:"el-icon-notebook-1 grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("div",{staticClass:"grid-num"},[t._v(t._s(t.courseNumber))]),e("div",[t._v("All Courses you have taken")])])])])],1)],1),e("el-card",{staticStyle:{height:"403px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("Recent news")])]),e("el-table",{staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.notices,"show-header":!1,height:"304"}},[e("el-table-column",{attrs:{width:"40"}}),e("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticClass:"todo-item",class:{"todo-item-del":i.row.status}},[t._v("\n                                "+t._s(i.row.title)+"\n                            ")])]}}])})],1)],1)],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:4}},[e("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"Student"},model:{value:t.selectStudent,callback:function(i){t.selectStudent=i},expression:"selectStudent"}},[e("el-option",{key:"0",attrs:{label:"",value:""}}),e("el-option",{key:"1",attrs:{label:"F2020",value:"F2020"}}),e("el-option",{key:"2",attrs:{label:"W2020",value:"W2020"}}),e("el-option",{key:"3",attrs:{label:"F2021",value:"F2021"}}),e("el-option",{key:"4",attrs:{label:"W2021",value:"W2021"}}),e("el-option",{key:"5",attrs:{label:"S2021",value:"S2021"}})],1)],1),e("el-col",{attrs:{span:4}},[e("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"Course"},model:{value:t.selectCourse,callback:function(i){t.selectCourse=i},expression:"selectCourse"}},[e("el-option",{key:"0",attrs:{label:"",value:""}}),e("el-option",{key:"1",attrs:{label:"F2020",value:"F2020"}}),e("el-option",{key:"2",attrs:{label:"W2020",value:"W2020"}}),e("el-option",{key:"3",attrs:{label:"F2021",value:"F2021"}}),e("el-option",{key:"4",attrs:{label:"W2021",value:"W2021"}}),e("el-option",{key:"5",attrs:{label:"S2021",value:"S2021"}})],1)],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover"}},[e("schart",{ref:"bar",staticClass:"schart",attrs:{canvasId:"bar",data:t.data,type:"bar",options:t.options}})],1)],1),e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover"}},[e("schart",{ref:"line",staticClass:"schart",attrs:{canvasId:"line",data:t.data,type:"line",options:t.options2}})],1)],1)],1)],1)},a=[],h=(s("ac6a"),s("7f7f"),s("f5ac")),o=s("7ed4"),n={name:"dashboard",data:function(){return{userInfo:{},publicNotification:"This project is in the testing stage, if you find any errors, please contact the author.",studentList:[],courseNumber:"41",name:localStorage.getItem("ms_username"),selectCourse:"",selectStudent:"",notices:[{title:"The first results of the machine learning course have been announced",status:!1},{title:"More features will be online soon",status:!1},{title:"More features will be online soon",status:!1},{title:"More courses will be added in the next semester",status:!1}],data:[{name:"2020/09/04",value:95},{name:"2020/09/05",value:89},{name:"2020/09/06",value:77},{name:"2020/09/07",value:98},{name:"2020/09/08",value:76},{name:"2020/09/09",value:98},{name:"2020/09/10",value:65}],options:{title:"Scores of machine learning",showValue:!1,fillColor:"rgb(45, 140, 240)",bottomPadding:30,topPadding:30},options2:{title:"Scores of machine learning",fillColor:"#FC6FA1",axisColor:"#008ACD",contentColor:"#EEEEEE",bgColor:"#F5F8FD",bottomPadding:30,topPadding:30}}},components:{Schart:h["a"]},computed:{role:function(){return"admin"===this.name?"administrator":"parent"}},created:function(){this.getUserInfo(),this.handleListener(),this.changeDate()},activated:function(){this.handleListener()},deactivated:function(){window.removeEventListener("resize",this.renderChart),o["a"].$off("collapse",this.handleBus)},methods:{changeDate:function(){var t=(new Date).getTime();this.data.forEach((function(i,s){var e=new Date(t-864e5*(6-s));i.name="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())}))},handleListener:function(){o["a"].$on("collapse",this.handleBus),window.addEventListener("resize",this.renderChart)},handleBus:function(t){var i=this;setTimeout((function(){i.renderChart()}),300)},renderChart:function(){this.$refs.bar.renderChart(),this.$refs.line.renderChart()},getUserInfo:function(){var t=this,i=localStorage.getItem("userId");this.$axios({method:"get",url:"/api/user/"+i}).then((function(i){t.userInfo=i.data})).catch((function(i){t.$message.error("loading info failed"),console.log(i)}))}}},l=n,d=(s("3dca"),s("2877")),r=Object(d["a"])(l,e,a,!1,null,"344766d6",null);i["default"]=r.exports},f5ac:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("canvas",{attrs:{id:t.canvasId}})])},a=[],h=s("8c93"),o=s.n(h),n={data:function(){return{schart:null,opt:{}}},props:{canvasId:{type:String,default:""},type:{type:String,default:"bar"},data:{type:Array,default:[]},options:{type:Object,required:!1}},mounted:function(){this.renderChart()},methods:{renderChart:function(){this.schart=null,this.opt=this.options,this.width&&this.height||(this.opt?this.opt["autoWidth"]=!0:this.opt={autoWidth:!0}),this.schart=new o.a(this.canvasId,this.type,this.data,this.opt)}},watch:{data:function(){this.renderChart()},options:function(){this.renderChart()},type:function(){this.renderChart()}}},l=n,d=s("2877"),r=Object(d["a"])(l,e,a,!1,null,null,null);i["a"]=r.exports},ffad:function(t,i,s){}}]);
//# sourceMappingURL=chunk-e593acae.3f29ea57.js.map