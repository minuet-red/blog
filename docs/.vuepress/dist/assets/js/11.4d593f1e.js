(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{360:function(t,e,s){},407:function(t,e,s){"use strict";s(360)},424:function(t,e,s){"use strict";s.r(e);var i={data:()=>({startPoint:""}),mounted(){this.$refs.banner.addEventListener("mousemove",this.handleBannerMove),this.$refs.banner.addEventListener("mouseout",this.handleBannerMouseout),this.$refs.banner.addEventListener("mouseenter",this.handleBannerMouseenter)},methods:{handleBannerMove(t){this.$refs.banner.classList.add("move");let e=(t.clientX-this.startPoint)/window.outerWidth+.5;this.$refs.banner.style.setProperty("--percentage",e)},handleBannerMouseenter(t){this.startPoint=t.clientX},handleBannerMouseout(t){this.$refs.banner.classList.remove("move"),this.$refs.banner.style.setProperty("--percentage",.5)}}},n=(s(407),s(2)),a=Object(n.a)(i,(function(){var t=this._self._c;return t("div",{ref:"banner",staticClass:"banner2"},[t("div",{staticClass:"view"},[t("img",{staticClass:"morning",attrs:{src:"https://assets.codepen.io/2002878/bilibili-winter-view-1.jpg",alt:""}}),this._v(" "),t("img",{staticClass:"afternoon",attrs:{src:"https://assets.codepen.io/2002878/bilibili-winter-view-2.jpg",alt:""}}),this._v(" "),t("video",{staticClass:"evening",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[t("source",{attrs:{src:"https://assets.codepen.io/2002878/bilibili-winter-view-3.webm",type:"video/webm"}})]),this._v(" "),t("img",{staticClass:"window-cover",attrs:{src:"https://assets.codepen.io/2002878/bilibili-winter-view-3-snow.png",alt:""}})]),this._v(" "),this._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"tree"},[t("img",{staticClass:"morning",attrs:{src:"https://assets.codepen.io/2002878/bilibili-winter-tree-1.png",alt:""}}),this._v(" "),t("img",{staticClass:"afternoon",attrs:{src:"https://assets.codepen.io/2002878/bilibili-winter-tree-2.png",alt:""}}),this._v(" "),t("img",{staticClass:"evening",attrs:{src:"https://assets.codepen.io/2002878/bilibili-winter-tree-3.png",alt:""}})])}],!1,null,"2c2a5ee6",null);e.default=a.exports}}]);