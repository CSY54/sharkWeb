(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{377:function(t,n,e){var content=e(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("2b706c4c",content,!0,{sourceMap:!1})},378:function(t,n,e){"use strict";var r=e(377);e.n(r).a},379:function(t,n,e){(n=e(12)(!1)).push([t.i,".mapboxgl-popup-content{padding:0}",""]),t.exports=n},381:function(t,n,e){"use strict";e.r(n);e(80);var r=e(24),o=e(208),c=e.n(o),main=e(209),l=e(137),d={components:{MglMap:main.a,MglMarker:main.b,MglPopup:main.d,MglNavigationControl:main.c,InformationDialog:l.default},data:function(){return{loading:!0,canShowMap:!1,accessToken:"pk.eyJ1IjoiYXJhc2hpODciLCJhIjoiY2tjcnZxaXoyMGh0czJxanZxc3ZmY3d1YyJ9.OVrTS_6qhfnIXAtztl6VjA",curLongitude:0,curLatitude:0,mapStyle:"mapbox://styles/mapbox/navigation-guidance-day-v4",stores:[],shownStore:{},showInformation:!1,buttonLoading:!1}},head:function(){return{title:"地圖"}},computed:{coordinates:function(){return this.stores.map((function(t){return[t.longitude,t.latitude]}))}},created:function(){this.mapbox=c.a},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.geolocation.getCurrentPosition(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(e){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.coords,t.longitude=r.longitude,t.latitude=r.latitude,n.next=5,t.fetchData(r);case 5:data=n.sent,t.stores=data,t.canShowMap=!0,t.loading=!1;case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),(function(){}));case 2:case"end":return n.stop()}}),n)})))()},methods:{fetchData:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.latitude,o=t.longitude,e.next=3,n.$axios.$post("/store",{latitude:r,longitude:o});case 3:return data=e.sent,e.abrupt("return",data);case 5:case"end":return e.stop()}}),e)})))()},getCoordinate:function(t){return[t.longitude,t.latitude]},toggleInformation:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n.buttonLoading=!0,e.next=4,n.$axios.$get("/store/".concat(r));case 4:o=e.sent,n.buttonLoading=!1,n.shownStore=o,n.showInformation=!0;case 8:case"end":return e.stop()}}),e)})))()},closeDialog:function(){this.showInformation=!1}}},f=(e(378),e(28)),m=e(49),h=e.n(m),v=e(365),w=e(159),x=e(81),y=e(375),k=e(158),M=e(376),C=e(368),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"pa-0",attrs:{fluid:"","fill-height":""}},[t.loading?e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:""}})],1):t.canShowMap?e("MglMap",{attrs:{accessToken:t.accessToken,mapStyle:t.mapStyle,center:[t.longitude,t.latitude],zoom:12},on:{"update:mapStyle":function(n){t.mapStyle=n},"update:map-style":function(n){t.mapStyle=n}}},[e("MglNavigationControl"),t._l(t.stores,(function(n,r){return e("MglMarker",{key:r,attrs:{coordinates:t.getCoordinate(n)}},[e("MglPopup",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",{domProps:{textContent:t._s(n.name)}}),e("v-row",{attrs:{justify:"center"}},[e("v-rating",{attrs:{value:n.rating,color:"yellow accent-4","background-color":"grey darken-1",readonly:"",small:"",dense:""}})],1),e("v-card-actions",[e("v-btn",{attrs:{loading:t.buttonLoading,color:"primary",block:""},on:{click:function(e){return t.toggleInformation(n)}}},[t._v("詳細資訊")])],1)],1)],1)],1)],1)}))],2):e("v-row",{attrs:{align:"center",justify:"center"}},[e("h2",{staticClass:"text-center"},[t._v("請開啟瀏覽器之定位功能以使用此服務"),e("br"),t._v("如已開啟，請稍等或重新整理此頁面")])]),t.showInformation?e("InformationDialog",t._b({on:{close:t.closeDialog}},"InformationDialog",t.shownStore,!1)):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;h()(component,{InformationDialog:e(137).default}),h()(component,{VBtn:v.a,VCard:w.a,VCardActions:x.a,VCardTitle:x.c,VContainer:y.a,VProgressCircular:k.a,VRating:M.a,VRow:C.a})}}]);