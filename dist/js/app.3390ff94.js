(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-navigation-drawer",{attrs:{drawer:t.drawer},on:{"update:drawer":function(e){t.drawer=e}}}),a("app-toolbar",{attrs:{drawer:t.drawer},on:{"update:drawer":function(e){t.drawer=e}}}),a("v-content",{staticStyle:{background:"#e5e9f1"}},[a("v-container",[a("router-view")],1)],1),a("v-snackbar",{attrs:{color:t.snackbar.color,right:"",bottom:""},model:{value:t.snackbar.shown,callback:function(e){t.$set(t.snackbar,"shown",e)},expression:"snackbar.shown"}},[a("span",[t._v(t._s(t.snackbar.message))]),a("v-btn",{attrs:{text:""},on:{click:t.hideSnackbar}},[t._v("OK")])],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{value:t.drawer,app:"",color:"primary",dark:""},on:{input:t.emitValue}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{on:{click:function(e){return t.$router.push({name:"BidsList"})}}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-view-list")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Заявки")])],1)],1),a("v-list-item",{on:{click:function(e){return t.$router.push({name:"CreateBid"})}}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-account-edit")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Создать заявку")])],1)],1)],1)],1)},s=[],c={name:"AppNavigationDrawer",props:{drawer:Boolean},methods:{emitValue(t){this.$emit("update:drawer",t)}}},l=c,d=a("2877"),u=a("6544"),m=a.n(u),p=a("132d"),b=a("8860"),v=a("da13"),f=a("1800"),h=a("5d23"),k=a("f774"),g=Object(d["a"])(l,i,s,!1,null,"4f06ab46",null),w=g.exports;m()(g,{VIcon:p["a"],VList:b["a"],VListItem:v["a"],VListItemAction:f["a"],VListItemContent:h["a"],VListItemTitle:h["b"],VNavigationDrawer:k["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"white",elevation:"0"}},[a("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),a("v-toolbar-title",[t._v("Заявки")])],1)},x=[],y={name:"AppToolbar",props:{drawer:Boolean},methods:{toggleDrawer(){this.$emit("update:drawer",!this.drawer)}}},V=y,B=a("40dc"),C=a("5bc1"),S=a("2a7f"),$=Object(d["a"])(V,_,x,!1,null,"a967162c",null),O=$.exports;m()($,{VAppBar:B["a"],VAppBarNavIcon:C["a"],VToolbarTitle:S["a"]});var I={init(t){this.snackbarComponent=t,this.snackbarComponent.snackbar.color="default"},show(t){this.snackbarComponent.snackbar.color="info",this.snackbarComponent.snackbar.message=t,this.snackbarComponent.snackbar.shown=!0},error(t){this.snackbarComponent.snackbar.color="red darken-1",this.snackbarComponent.snackbar.message=t,this.snackbarComponent.snackbar.shown=!0},success(t){this.snackbarComponent.snackbar.color="green darken-1",this.snackbarComponent.snackbar.message=t,this.snackbarComponent.snackbar.shown=!0},hide(){this.snackbarComponent.snackbar.shown=!1}},j={components:{AppToolbar:O,AppNavigationDrawer:w},data(){return{drawer:null,snackbar:{shown:!1,color:"info",message:""}}},mounted(){I.init(this)},methods:{hideSnackbar(){this.snackbar.shown=!1}}},A=j,T=a("7496"),D=a("8336"),E=a("a523"),P=a("a75b"),F=a("2db4"),N=Object(d["a"])(A,r,o,!1,null,null,null),L=N.exports;m()(N,{VApp:T["a"],VBtn:D["a"],VContainer:E["a"],VContent:P["a"],VSnackbar:F["a"]});var q=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("v-container",[a("v-row",{attrs:{justify:"space-between"}},[a("v-col",[a("v-row",[t._v("Список заявок")]),a("v-row",[a("v-switch",{attrs:{label:"Групповые операции",color:"primary","hide-details":""},model:{value:t.actionsToggle,callback:function(e){t.actionsToggle=e},expression:"actionsToggle"}})],1)],1),a("v-col",[a("v-row",{staticClass:"pr-2",attrs:{justify:"end"}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.push({name:"CreateBid"})}}},[t._v("Добавить")])],1)],1)],1),t.actionsToggle?a("v-row",{attrs:{align:"baseline"}},[a("v-col",{attrs:{lg:"3",md:"4"}},[a("v-select",{attrs:{items:t.bidStatuses,"item-text":"name","item-value":"id",label:"Статус заявок","hide-details":""},model:{value:t.commonStatusId,callback:function(e){t.commonStatusId=e},expression:"commonStatusId"}})],1),a("v-col",[a("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.changeStatuses}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-content-save")])],1)],1)],1):t._e()],1)]},proxy:!0},{key:"content",fn:function(){return[a("v-data-table",{staticClass:"elevation-0",attrs:{"show-select":"",headers:t.headers,items:t.bids,"items-per-page":10},scopedSlots:t._u([{key:"item.statusName",fn:function(e){var n=e.item;return[a("v-chip",{attrs:{color:t.getColor(n.statusId),dark:""}},[t._v(t._s(n.statusName))])]}},{key:"item.action",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-3",on:{click:function(e){return t.$router.push({name:"EditBid",params:{id:n.id}})}}},[t._v("mdi-table-edit")]),a("v-icon",{on:{click:function(e){return t.removeBid(n)}}},[t._v("mdi-delete")])]}}]),model:{value:t.selectedBids,callback:function(e){t.selectedBids=e},expression:"selectedBids"}})]},proxy:!0}])})},J=[],R={set(t,e){return localStorage.setItem(t,JSON.stringify(e))},get(t){return JSON.parse(localStorage.getItem(t))}};const K=[{id:1,name:"Новая",color:"orange"},{id:2,name:"В работе",color:"blue"},{id:3,name:"Выполнено",color:"green"},{id:4,name:"Закрыто",color:"black"}];class z{constructor({id:t,number:e,statusId:a,date:n,comment:r}){this.id=t,this.number=e,this.statusId=a,this.statusName=K.find(t=>t.id===a).name,this.date=n,this.comment=r}}var G=z;const H="APP_BIDS",Q=[],U=()=>{return R.get(H).map(t=>new G(t))},W=t=>{R.set(H,t)},X=t=>{return new G(R.get(H).find(e=>e.id===t))},Y=(t,e)=>{const a=U();let n;a.find((e,a)=>{e.id===t&&(n=a)}),Object.assign(a[n],e),W(a)},Z=t=>{const e=U();e.push(t),W(e)},tt=t=>{const e=U();let a;e.find((e,n)=>{e.id===t&&(a=n)}),e.splice(a,1),W(e)},et=()=>{U()||W(Q)};et();var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{elevation:"0","max-width":"900"}},[a("v-card-title",[t._t("title")],2),a("v-divider"),a("v-card-text",[t._t("content")],2),a("v-divider"),a("v-card-actions",[t._t("actions")],2)],1)},nt=[],rt={name:"AppCard"},ot=rt,it=a("b0af"),st=a("99d9"),ct=a("ce7e"),lt=Object(d["a"])(ot,at,nt,!1,null,"2923dc5a",null),dt=lt.exports;m()(lt,{VCard:it["a"],VCardActions:st["a"],VCardText:st["b"],VCardTitle:st["c"],VDivider:ct["a"]});var ut={components:{AppCard:dt},data(){return{bids:[],selectedBids:[],commonStatusId:1,actionsToggle:!1,bidStatuses:K,headers:[{text:"Номер",value:"number",align:"center"},{text:"Статус",value:"statusName",align:"center"},{text:"Дата",value:"date",align:"center"},{text:"Действия",value:"action",align:"center",sortable:!1}]}},mounted(){this.getBids()},methods:{getBids(){this.bids=U()},getColor(t){return K.find(e=>e.id===t).color},removeBid(t){tt(t.id),I.success("Заявка удалена"),this.getBids()},changeStatuses(){0!==this.selectedBids.length?(this.selectedBids.forEach(t=>{Y(t.id,{statusId:this.commonStatusId})}),I.success("Статус заявок изменен"),this.getBids()):I.error("Выберите заявки")}}},mt=ut,pt=a("cc20"),bt=a("62ad"),vt=a("8fea"),ft=a("0fd9"),ht=a("b974"),kt=a("b73d"),gt=Object(d["a"])(mt,M,J,!1,null,"a6176168",null),wt=gt.exports;m()(gt,{VBtn:D["a"],VChip:pt["a"],VCol:bt["a"],VContainer:E["a"],VDataTable:vt["a"],VIcon:p["a"],VRow:ft["a"],VSelect:ht["a"],VSwitch:kt["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-card",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Создание")]},proxy:!0},{key:"content",fn:function(){return[a("app-bid-form",{ref:"bidForm",model:{value:t.bid,callback:function(e){t.bid=e},expression:"bid"}})]},proxy:!0},{key:"actions",fn:function(){return[a("v-btn",{staticClass:"ml-auto",attrs:{color:"red darken-3",dark:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Отмена")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.create}},[t._v("Сохранить")])]},proxy:!0}])})},xt=[],yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",on:{input:t.input}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Номер заявки",filled:"",rules:t.required},model:{value:t.bid.number,callback:function(e){t.$set(t.bid,"number",e)},expression:"bid.number"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("app-date-picker",{attrs:{rules:t.required},model:{value:t.bid.date,callback:function(e){t.$set(t.bid,"date",e)},expression:"bid.date"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.bidStatuses,"item-text":"name","item-value":"id",filled:"",label:"Статус заявки",rules:t.required},model:{value:t.bid.statusId,callback:function(e){t.$set(t.bid,"statusId",e)},expression:"bid.statusId"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Комментарий",filled:"",rules:t.required},model:{value:t.bid.comment,callback:function(e){t.$set(t.bid,"comment",e)},expression:"bid.comment"}})],1)],1)],1)},Vt=[];const Bt=[t=>!!t||"Обязательное поле"];var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{value:t.date,label:"Дата заявки",readonly:"",filled:"",rules:t.$attrs.rules}},n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{locale:"ru",value:t.date,"no-title":"",scrollable:""},on:{input:t.changeDate}})],1)},St=[],$t={name:"AppDatePicker",props:["value"],data(){return{date:"",menu:!1}},watch:{value(t){this.date=t}},methods:{changeDate(t){this.menu=!1,this.date=t,this.$emit("input",this.date)}}},Ot=$t,It=a("2e4b"),jt=a("e449"),At=a("8654"),Tt=Object(d["a"])(Ot,Ct,St,!1,null,"d38c7328",null),Dt=Tt.exports;m()(Tt,{VDatePicker:It["a"],VMenu:jt["a"],VTextField:At["a"]});var Et={name:"AppBidForm",components:{AppDatePicker:Dt},props:["value"],data(){return{bidStatuses:K,bid:{date:null,comment:"",statusId:null,number:null},required:Bt}},watch:{value(t){this.bid=t}},methods:{input(){this.$emit("input",this.bid)}}},Pt=Et,Ft=a("4bd4"),Nt=a("a844"),Lt=Object(d["a"])(Pt,yt,Vt,!1,null,"7f3f1bdb",null),qt=Lt.exports;m()(Lt,{VCol:bt["a"],VForm:Ft["a"],VRow:ft["a"],VSelect:ht["a"],VTextField:At["a"],VTextarea:Nt["a"]});var Mt=a("c64e"),Jt=a.n(Mt),Rt={name:"CreateBid",components:{AppBidForm:qt,AppCard:dt},data(){return{bid:null,createBid:Z}},methods:{create(){this.$refs.bidForm.$refs.form.validate()&&(this.bid.id=Jt()(),Z(this.bid),I.success("Заявка создана"))}}},Kt=Rt,zt=Object(d["a"])(Kt,_t,xt,!1,null,"f30f74d4",null),Gt=zt.exports;m()(zt,{VBtn:D["a"]});var Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-card",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Редактирование")]},proxy:!0},{key:"content",fn:function(){return[a("app-bid-form",{ref:"bidForm",model:{value:t.bid,callback:function(e){t.bid=e},expression:"bid"}})]},proxy:!0},{key:"actions",fn:function(){return[a("v-btn",{staticClass:"ml-auto",attrs:{color:"red darken-3",dark:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Отмена")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.saveBid}},[t._v("Сохранить")])]},proxy:!0}])})},Qt=[],Ut={name:"EditBid",components:{AppBidForm:qt,AppCard:dt},props:{id:String},data(){return{bid:{}}},mounted(){this.getBid()},methods:{saveBid(){this.$refs.bidForm.$refs.form.validate()&&(Y(this.id,this.bid),I.success("Заявка изменена"),this.$router.push({name:"BidsList"}))},getBid(){this.bid=X(this.id)}}},Wt=Ut,Xt=Object(d["a"])(Wt,Ht,Qt,!1,null,"330c0f8c",null),Yt=Xt.exports;m()(Xt,{VBtn:D["a"]}),n["a"].use(q["a"]);var Zt=new q["a"]({mode:"history",base:"/",routes:[{path:"/",name:"BidsList",component:wt},{path:"/bids/create",name:"CreateBid",component:Gt},{path:"/bids/edit/:id",name:"EditBid",component:Yt,props:!0}]}),te=a("2f62");n["a"].use(te["a"]);var ee=new te["a"].Store({state:{},mutations:{},actions:{}}),ae=a("f309");n["a"].use(ae["a"]);var ne=new ae["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#37495f",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});a("fb98");n["a"].config.productionTip=!1,new n["a"]({router:Zt,store:ee,vuetify:ne,render:t=>t(L)}).$mount("#app")},fb98:function(t,e,a){}});
//# sourceMappingURL=app.3390ff94.js.map