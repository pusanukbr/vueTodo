import{I as i,B as c,a as o}from"./index.8eec1284.js";import{n as l,s as n}from"./index.82d6a689.js";const d={name:"AddTodo",components:{Input:i,Button:c},data(){return{title:"",userId:""}},methods:{async submit(){const s=await o.addTodo({title:this.title,userId:Number(this.userId),completed:!1});this.$emit("update:todo",s)}}};var _=function(){var e=this,t=e._self._c;return t("form",{staticClass:"addTodo",on:{submit:function(r){return r.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"addTodo__wrapp"},[t("Input",{attrs:{type:"text",placeholder:"Title todo"},model:{value:e.title,callback:function(r){e.title=r},expression:"title"}}),t("Input",{attrs:{type:"text",placeholder:"Enter user ID"},model:{value:e.userId,callback:function(r){e.userId=r},expression:"userId"}})],1),t("Button",{staticClass:"addTodo__button",attrs:{type:"submit"}},[e._v("Add Todo")])],1)},u=[],v=l(d,_,u,!1,null,null,null,null);const f=v.exports;const p={name:"Select",props:{label:{type:String,required:!1},value:{type:String,required:!0}},methods:{changeSelect({target:{value:s}}){this.$emit("input",s)}}};var m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select"},[e.label?t("div",{staticClass:"select__label"},[e._v(" "+e._s(e.label)+" ")]):e._e(),t("select",{staticClass:"select__list",on:{change:e.changeSelect}},[e._t("default")],2)])},h=[],g=l(p,m,h,!1,null,null,null,null);const y=g.exports;const F={name:"TableUser",data(){return{user:n.user}}};var b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tableUser"},[e.user?t("div",{staticClass:"tableUser__wrapp"},[t("fieldset",[t("legend",[e._v("About")]),t("div",[e._v("Name: "+e._s(e.user.name))]),t("div",[e._v(" Email: "),t("a",{attrs:{href:`mailto:${e.user.email}`,target:"_blank"}},[e._v(e._s(e.user.email))])]),t("div",[e._v(" Phone: "),t("a",{attrs:{href:`phone:${e.user.phone}`,target:"_blank"}},[e._v(e._s(e.user.phone))])]),t("div",[e._v(" Site: "),t("a",{attrs:{href:`https://${e.user.website}`,target:"_blank"}},[e._v(e._s(e.user.website))])])]),t("fieldset",[t("legend",[e._v("Address")]),t("address",[t("div",[e._v("City: "+e._s(e.user.address.city))]),t("div",[e._v("Street: "+e._s(e.user.address.street))]),t("div",[e._v("Suite: "+e._s(e.user.address.suite))])])]),t("fieldset",[t("legend",[e._v("Zipcode and Geo")]),t("div",[e._v("Zipcode: "+e._s(e.user.address.zipcode))]),t("div",{staticClass:"tableUser__geo"},[t("span",[e._v("Lat: "+e._s(e.user.address.geo.lat))]),t("span",[e._v("Lng: "+e._s(e.user.address.geo.lng))])])]),t("fieldset",[t("legend",[e._v("Company")]),t("div",[e._v("Name: "+e._s(e.user.company.name))]),t("div",[e._v("CatchPhrase: "+e._s(e.user.company.catchPhrase))]),t("div",[e._v("Bs: "+e._s(e.user.company.bs))])])]):e._e()])},C=[],T=l(F,b,C,!1,null,null,null,null);const $=T.exports;const S={name:"Todos",props:{lists:{type:Array,required:!0},favoritesKey:{type:Number,required:!0}},methods:{checkFavorites(s){this.$emit("favorites",s)}}};var I=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"list__todos"},e._l(e.lists,function(r){return t("li",{key:r.id,staticClass:"list__todo",class:{checked:r.completed}},[r.completed?t("font-awesome-icon",{staticClass:"icon-check",attrs:{icon:["fas","toggle-on"]}}):t("font-awesome-icon",{staticClass:"icon-check",attrs:{icon:["fas","toggle-off"]}}),t("span",[e._v("Title: "+e._s(r.title))]),t("font-awesome-icon",{key:e.favoritesKey,staticClass:"list__favorites",attrs:{icon:["fas","star"],title:r.favorites?"Remove from favorites":"Add to favorites",color:r.favorites?"#ffc917":null},on:{click:function(a){return e.checkFavorites(r.id)}}})],1)}),0)},k=[],x=l(S,I,k,!1,null,null,null,null);const A=x.exports,U={name:"User",components:{AddTodo:f,Input:i,TableUser:$,Select:y,Todos:A},data(){return{usersAll:n.usersAll||null,lists:null,listsLocal:null,statusFilter:"",idFilter:"",titleFilter:"",favoritesKey:0}},async mounted(){this.lists=await o.getTodoList();const s=localStorage.getItem("favorites"),e=JSON.parse(s)||[];this.lists.map(t=>{e.includes(t.id)&&(t.favorites=!0)})},computed:{filterCompleted(){return this.statusFilter!==""&&this.statusFilter==="completed"?s=>s.completed:null},filterUncompleted(){return this.statusFilter!==""&&this.statusFilter==="uncompleted"?s=>!s.completed:null},filterFavorites(){return this.statusFilter!==""&&this.statusFilter==="favorites"?s=>s.favorites:null},filterUserId(){return this.idFilter!==""?s=>s.userId===Number(this.idFilter):null},filterTitle(){return this.titleFilter!==""?s=>s.title.includes(this.titleFilter):null},filters(){return[this.filterCompleted,this.filterUncompleted,this.filterFavorites,this.filterUserId,this.filterTitle].filter(Boolean)},filteredList(){return this.filters.length?this.lists.filter(s=>this.filters.every(e=>e(s))):this.lists}},methods:{changeStatusFilter({target:{value:s}}){this.statusFilter=s},changeIdFilter({target:{value:s}}){this.idFilter=s},async checkFavorites(s){const e=localStorage.getItem("favorites");let t=JSON.parse(e)||[];this.lists.map(r=>{r.id===s&&(r.favorites?(r.favorites=!1,t=t.filter(a=>Number(a)!==Number(s))):r.favorites||(r.favorites=!0,t.push(s)))}),this.favoritesKey+=1,localStorage.setItem("favorites",JSON.stringify(t))},updateTodo(s){this.lists.push(s)}}};var w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user"},[t("TableUser"),t("div",{staticClass:"user__wrapp"},[t("div",{staticClass:"user__add"},[t("AddTodo",{on:{"update:todo":e.updateTodo}})],1),e.lists?t("div",{staticClass:"user__todos"},[t("div",{staticClass:"user__filter"},[t("div",{staticClass:"user_select"},[t("Select",{attrs:{label:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443"},model:{value:e.statusFilter,callback:function(r){e.statusFilter=r},expression:"statusFilter"}},[t("option",{attrs:{value:""}},[e._v("All")]),t("option",{attrs:{value:"completed"}},[e._v("Completed")]),t("option",{attrs:{value:"uncompleted"}},[e._v("Uncompleted")]),t("option",{attrs:{value:"favorites"}},[e._v("Favorites")])]),t("Select",{attrs:{label:"\u0424\u0456\u043B\u044C\u0442\u0440 \u043F\u043E ID \u044E\u0437\u0435\u0440\u0430"},model:{value:e.idFilter,callback:function(r){e.idFilter=r},expression:"idFilter"}},[t("option",{attrs:{value:""}},[e._v("All")]),e._l(e.usersAll,function(r){return t("option",{key:r,domProps:{value:r}},[e._v(" "+e._s(r)+" ")])})],2)],1),t("div",{staticClass:"user_inputSearch"},[t("Input",{attrs:{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u043D\u0456 \u0434\u043B\u044F \u0444\u0456\u043B\u044C\u0442\u0440\u0430\u0446\u0456\u0457"},model:{value:e.titleFilter,callback:function(r){e.titleFilter=r},expression:"titleFilter"}})],1)]),t("Todos",{attrs:{lists:e.filteredList,favoritesKey:e.favoritesKey},on:{favorites:e.checkFavorites}})],1):e._e()])],1)},N=[],K=l(U,w,N,!1,null,null,null,null);const B=K.exports;export{B as default};
