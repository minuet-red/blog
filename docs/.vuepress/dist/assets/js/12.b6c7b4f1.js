(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{361:function(t,e,i){},408:function(t,e,i){"use strict";i(361)},427:function(t,e,i){"use strict";i.r(e);var s={data:()=>({time:"",date:"",week:["SUN","MON","TUE","WED","THU","FRI","SAT"]}),mounted(){setInterval(()=>{this.updateTime()},1e3)},methods:{updateTime(){var t=new Date;this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+this.week[t.getDay()]},zeroPadding(t,e){for(var i="",s=0;s<e;s++)i+="0";return(i+t).slice(-e)}}},a=(i(408),i(2)),n=Object(a.a)(s,(function(){var t=this._self._c;return t("div",{attrs:{id:"clock02"}},[t("span",{staticClass:"date02"},[this._v(this._s(this.date))]),this._v(" "),t("span",{staticClass:"time02"},[this._v(this._s(this.time))])])}),[],!1,null,"02f8b59a",null);e.default=n.exports}}]);