(function(){"use strict";var e={4573:function(e,t,o){var r=o(9242),s=o(3396);function l(e,t){const o=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(o)}var n=o(89);const a={},c=(0,n.Z)(a,[["render",l]]);var i=c,u=o(2483);const d={class:"h-screen relative"},p=(0,s._)("div",{id:"map",class:"h-full z-[1]"},null,-1);function m(e,t,o,r,l,n){const a=(0,s.up)("GeoErrorModal"),c=(0,s.up)("MapFeatures");return(0,s.wg)(),(0,s.iD)("div",d,[r.geoError?((0,s.wg)(),(0,s.j4)(a,{key:0,geoErrorMsg:r.geoErrorMsg,onCloseGeoError:r.closeGeoError},null,8,["geoErrorMsg","onCloseGeoError"])):(0,s.kq)("",!0),(0,s.Wm)(c,{coords:r.coords,fetchCoords:r.fetchCoords,onGetGeolocation:r.getGeolocation,onPlotResult:r.plotResult,onToggleSearchResults:r.toggleSearchResults,onRemoveResult:r.removeResult,searchResults:r.searchResults},null,8,["coords","fetchCoords","onGetGeolocation","onPlotResult","onToggleSearchResults","onRemoveResult","searchResults"]),p])}var v=o(3153),f=o.n(v),g=o(4870),h=o(7139);const w={class:"h-screen absolute w-full z-10 flex justify-center items-start pt-[125px] bg-black/50"},x={class:"flex flex-col bg-white w-[80%] sm:w-[450px] px-6 py-4 rounded-md"},y={class:"text-lg mb-1"},b=(0,s._)("p",{class:"text-sm mb-4"}," To take advantage of this applications feature, please ensure location services are enabled ",-1);function R(e,t,o,r,l,n){return(0,s.wg)(),(0,s.iD)("div",w,[(0,s._)("div",x,[(0,s._)("h1",y,"Error: "+(0,h.zw)(o.geoErrorMsg),1),b,(0,s._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("closeGeoError")),class:"self-start py-2 px-4 bg-red-500 text-white rounded-md text-sm"}," Close ")])])}var k={props:["geoErrorMsg"],setup(){}};const _=(0,n.Z)(k,[["render",R]]);var C=_;const S={class:"w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent"},z={class:"relative flex-1 md:min-w-[350px]"},M=(0,s._)("div",{class:"absolute top-0 left-[8px] h-full flex items-center"},[(0,s._)("i",{class:"fas fa-search"})],-1),E={class:"absolute mt-2 w-full"},j={key:0,class:"h-[200px] overflow-scroll bg-white rounded-md"},O={key:1},H=["onClick"],T=(0,s._)("i",{class:"fas fa-map-marker-alt"},null,-1),D={class:"text-xs"},G={key:1,class:"mt-2 px-4 py-3 bg-white rounded-md"},I={class:"text-lg"},Z={class:"text-xs mb-1"},J={class:"text-xs"};function L(e,t,o,l,n,a){const c=(0,s.up)("LoadingSpinner");return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",z,[(0,s.wy)((0,s._)("input",{class:"pl-9 pr-4 py-3 text-sm focus:outline-none w-full shadow-md rounded-md",type:"text",placeholder:"Start your search","onUpdate:modelValue":t[0]||(t[0]=e=>l.searchQuery=e),onInput:t[1]||(t[1]=(...e)=>l.search&&l.search(...e)),onFocus:t[2]||(t[2]=t=>e.$emit("toggleSearchResults"))},null,544),[[r.nr,l.searchQuery]]),M,(0,s._)("div",E,[l.searchQuery&&o.searchResults?((0,s.wg)(),(0,s.iD)("div",j,[l.searchData?((0,s.wg)(),(0,s.iD)("div",O,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.searchData,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white",key:t,onClick:t=>l.selectResult(e)},[T,(0,s._)("p",D,(0,h.zw)(e.place_name_en),1)],8,H)))),128))])):((0,s.wg)(),(0,s.j4)(c,{key:0}))])):(0,s.kq)("",!0),l.selectedResult?((0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("i",{onClick:t[3]||(t[3]=(...e)=>l.removeResult&&l.removeResult(...e)),class:"far fa-times-circle flex justify-end cursor-pointer"}),(0,s._)("h1",I,(0,h.zw)(l.selectedResult.text),1),(0,s._)("p",Z,(0,h.zw)(l.selectedResult.properties.address)+", "+(0,h.zw)(l.selectedResult.city)+", "+(0,h.zw)(l.selectedResult.state),1),(0,s._)("p",J,(0,h.zw)(l.selectedResult.properties.category),1)])):(0,s.kq)("",!0)])]),(0,s._)("div",{class:(0,h.C_)(["px-4 bg-white flex items-center shadow-md rounded-md min-h-[45px]",{"bg-slate-600":o.coords}]),onClick:t[4]||(t[4]=t=>e.$emit("getGeolocation"))},[(0,s._)("i",{class:(0,h.C_)(["fas fa-location-arrow text-[18px]",{"text-white ":o.coords,"animate-pulse":o.fetchCoords}])},null,2)],2)])}var P=o(6265),F=o.n(P);const V={class:"h-full w-full flex items-center justify-center"},$=(0,s._)("span",{class:"block w-[60px] h-[60px] border-[5px] border-solid border-transparent border-t-black rounded-full animate-spin"},null,-1),N=[$];function Q(e,t,o,r,l,n){return(0,s.wg)(),(0,s.iD)("div",V,N)}var q={name:"LoadingSpinner"};const U=(0,n.Z)(q,[["render",Q]]);var X=U,Y={props:["coords","fetchCoords","searchResults"],components:{LoadingSpinner:X},setup(e,{emit:t}){const o=(0,g.iH)(null),r=(0,g.iH)(null),s=(0,g.iH)(null),l=(0,g.iH)(null),n=()=>{clearTimeout(s.value),r.value=null,s.value=setTimeout((async()=>{if(""!==o.value){const t=new URLSearchParams({fuzzyMatch:!0,language:"en",limit:10,proximity:e.coords?`${e.coords.lng}, ${e.coords.lat}`:"0,0"}),s=await F().get(`api/search/${o.value}?${t}`);r.value=s.data.features}}),750)},a=e=>{l.value=e,t("plotResult",e.geometry)},c=()=>{l.value=null,t("removeResult")};return{searchQuery:o,searchData:r,queryTimeout:s,search:n,selectResult:a,selectedResult:l,removeResult:c}}};const B=(0,n.Z)(Y,[["render",L]]);var W=B,A={name:"HomeView",components:{GeoErrorModal:C,MapFeatures:W},setup(){let e;(0,s.bv)((()=>{e=f().map("map").setView([28.538336,-81.379234],10),f().tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFmYW1lZCIsImEiOiJjbDViZ2FycXkwN2JpM2NtaXhpdjhsMzluIn0.H2CJPHL0Baaz6Z1QTZb33g",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoicmFmYW1lZCIsImEiOiJjbDViZ2FycXkwN2JpM2NtaXhpdjhsMzluIn0.H2CJPHL0Baaz6Z1QTZb33g"}).addTo(e),e.on("moveend",(()=>{x()})),c()}));const t=(0,g.iH)(null),r=(0,g.iH)(null),l=(0,g.iH)(null),n=(0,g.iH)(null),a=(0,g.iH)("Testing v-bind on modal"),c=()=>t.value?(t.value=null,sessionStorage.removeItem("coords"),void e.removeLayer(l.value)):sessionStorage.getItem("coords")?(t.value=JSON.parse(sessionStorage.getItem("coords")),void d(t.value)):(r.value=!0,void navigator.geolocation.getCurrentPosition(i,u)),i=e=>{r.value=null;const o={lat:e.coords.latitude,lng:e.coords.longitude};sessionStorage.setItem("coords",JSON.stringify(o)),t.value=o,d(t.value)},u=e=>{r.value=null,n.value=!0,a.value=e.message},d=t=>{const r=f().icon({iconUrl:o(3266),iconSize:[35,35]});l.value=f().marker([t.lat,t.lng],{icon:r}).addTo(e),e.setView([t.lat,t.lng],10)},p=()=>{n.value=null,a.value=null},m=(0,g.iH)(null),v=t=>{m.value&&e.removeLayer(m.value);const r=f().icon({iconUrl:o(2929),iconSize:[35,35]});m.value=f().marker([t.coordinates[1],t.coordinates[0]],{icon:r}).addTo(e),e.setView([t.coordinates[1],t.coordinates[0]],14),x()},h=(0,g.iH)(null),w=()=>{h.value=!h.value},x=()=>{h.value=null},y=()=>{e.removeLayer(m.value)};return{coords:t,geoMarker:l,closeGeoError:p,geoError:n,geoErrorMsg:a,fetchCoords:r,getGeolocation:c,plotResult:v,searchResults:h,toggleSearchResults:w,closeSearchResults:x,removeResult:y}}};const K=(0,n.Z)(A,[["render",m]]);var ee=K;const te=[{path:"/",name:"home",component:ee}],oe=(0,u.p7)({history:(0,u.PO)("/"),routes:te});var re=oe;(0,r.ri)(i).use(re).mount("#app")},2929:function(e,t,o){e.exports=o.p+"img/map-marker-blue.48a8e449.svg"},3266:function(e,t,o){e.exports=o.p+"img/map-marker-red.d479dee5.svg"}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,r,s,l){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],l=e[u][2];for(var a=!0,c=0;c<r.length;c++)(!1&l||n>=l)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(a=!1,l<n&&(n=l));if(a){e.splice(u--,1);var i=s();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,s,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,l,n=r[0],a=r[1],c=r[2],i=0;if(n.some((function(t){return 0!==e[t]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(c)var u=c(o)}for(t&&t(r);i<n.length;i++)l=n[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(4573)}));r=o.O(r)})();
//# sourceMappingURL=app.6d76d915.js.map