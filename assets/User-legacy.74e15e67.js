!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,s=Object.create(i.prototype),a=new C(n||[]);return o(s,"_invoke",{value:F(t,r,a)}),s}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}r.wrap=f;var v={};function h(){}function p(){}function m(){}var y={};c(y,a,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(T([])));g&&g!==n&&i.call(g,a)&&(y=g);var b=m.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(o,s,a,l){var u=d(e[o],e,s);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):r.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,l)}))}l(u.arg)}var s;o(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,i){n(t,e,r,i)}))}return s=s?s.then(i,i):i()}})}function F(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return E()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var a=L(s,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=d(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=m,o(b,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,l,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var s=new x(f(t,e,n,i),o);return r.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(b),c(b,u,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(a&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},r}function r(t,e,r,n,i,o,s){try{var a=t[o](s),l=a.value}catch(u){return void r(u)}a.done?e(l):Promise.resolve(l).then(n,i)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,l,"next",t)}function l(t){r(s,i,o,a,l,"throw",t)}a(void 0)}))}}System.register(["./index-legacy.87884ae0.js","./index-legacy.15ca3f91.js"],(function(t,r){"use strict";var i,o,s,a,l;return{setters:[function(t){i=t.I,o=t.B,s=t.a},function(t){a=t.n,l=t.s}],execute:function(){var r=function(){var t=this,e=t._self._c;return e("form",{staticClass:"addTodo",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"addTodo__wrapp"},[e("Input",{attrs:{type:"text",placeholder:"Title todo"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),e("Input",{attrs:{type:"text",placeholder:"Enter user ID"},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}})],1),e("Button",{staticClass:"addTodo__button",attrs:{type:"submit"}},[t._v("Add Todo")])],1)},u=a({name:"AddTodo",components:{Input:i,Button:o},data:function(){return{title:"",userId:""}},methods:{submit:function(){var t=this;return n(e().mark((function r(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.addTodo({title:t.title,userId:Number(t.userId),completed:!1});case 2:n=e.sent,t.$emit("update:todo",n);case 4:case"end":return e.stop()}}),r)})))()}}},r,[],!1,null,null,null,null).exports,c=a({name:"Select",props:{label:{type:String,required:!1},value:{type:String,required:!0}},methods:{changeSelect:function(t){var e=t.target.value;this.$emit("input",e)}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"select"},[t.label?e("div",{staticClass:"select__label"},[t._v(" "+t._s(t.label)+" ")]):t._e(),e("select",{staticClass:"select__list",on:{change:t.changeSelect}},[t._t("default")],2)])}),[],!1,null,null,null,null).exports,f=a({name:"TableUser",data:function(){return{user:l.user}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tableUser"},[t.user?e("div",{staticClass:"tableUser__wrapp"},[e("fieldset",[e("legend",[t._v("About")]),e("div",[t._v("Name: "+t._s(t.user.name))]),e("div",[t._v(" Email: "),e("a",{attrs:{href:"mailto:".concat(t.user.email),target:"_blank"}},[t._v(t._s(t.user.email))])]),e("div",[t._v(" Phone: "),e("a",{attrs:{href:"phone:".concat(t.user.phone),target:"_blank"}},[t._v(t._s(t.user.phone))])]),e("div",[t._v(" Site: "),e("a",{attrs:{href:"https://".concat(t.user.website),target:"_blank"}},[t._v(t._s(t.user.website))])])]),e("fieldset",[e("legend",[t._v("Address")]),e("address",[e("div",[t._v("City: "+t._s(t.user.address.city))]),e("div",[t._v("Street: "+t._s(t.user.address.street))]),e("div",[t._v("Suite: "+t._s(t.user.address.suite))])])]),e("fieldset",[e("legend",[t._v("Zipcode and Geo")]),e("div",[t._v("Zipcode: "+t._s(t.user.address.zipcode))]),e("div",{staticClass:"tableUser__geo"},[e("span",[t._v("Lat: "+t._s(t.user.address.geo.lat))]),e("span",[t._v("Lng: "+t._s(t.user.address.geo.lng))])])]),e("fieldset",[e("legend",[t._v("Company")]),e("div",[t._v("Name: "+t._s(t.user.company.name))]),e("div",[t._v("CatchPhrase: "+t._s(t.user.company.catchPhrase))]),e("div",[t._v("Bs: "+t._s(t.user.company.bs))])])]):t._e()])}),[],!1,null,null,null,null).exports,d=a({name:"Todos",props:{lists:{type:Array,required:!0},favoritesKey:{type:Number,required:!0}},methods:{checkFavorites:function(t){this.$emit("favorites",t)}}},(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list__todos"},t._l(t.lists,(function(r){return e("li",{key:r.id,staticClass:"list__todo",class:{checked:r.completed}},[r.completed?e("font-awesome-icon",{staticClass:"icon-check",attrs:{icon:["fas","toggle-on"]}}):e("font-awesome-icon",{staticClass:"icon-check",attrs:{icon:["fas","toggle-off"]}}),e("span",[t._v("Title: "+t._s(r.title))]),e("font-awesome-icon",{key:t.favoritesKey,staticClass:"list__favorites",attrs:{icon:["fas","star"],title:r.favorites?"Remove from favorites":"Add to favorites",color:r.favorites?"#ffc917":null},on:{click:function(e){return t.checkFavorites(r.id)}}})],1)})),0)}),[],!1,null,null,null,null).exports;t("default",a({name:"User",components:{AddTodo:u,Input:i,TableUser:f,Select:c,Todos:d},data:function(){return{usersAll:l.usersAll||null,lists:null,listsLocal:null,statusFilter:"",idFilter:"",titleFilter:"",favoritesKey:0}},mounted:function(){var t=this;return n(e().mark((function r(){var n,i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getTodoList();case 2:t.lists=e.sent,n=localStorage.getItem("favorites"),i=JSON.parse(n)||[],t.lists.map((function(t){i.includes(t.id)&&(t.favorites=!0)}));case 6:case"end":return e.stop()}}),r)})))()},computed:{filterCompleted:function(){return""!==this.statusFilter&&"completed"===this.statusFilter?function(t){return t.completed}:null},filterUncompleted:function(){return""!==this.statusFilter&&"uncompleted"===this.statusFilter?function(t){return!t.completed}:null},filterFavorites:function(){return""!==this.statusFilter&&"favorites"===this.statusFilter?function(t){return t.favorites}:null},filterUserId:function(){var t=this;return""!==this.idFilter?function(e){return e.userId===Number(t.idFilter)}:null},filterTitle:function(){var t=this;return""!==this.titleFilter?function(e){return e.title.includes(t.titleFilter)}:null},filters:function(){return[this.filterCompleted,this.filterUncompleted,this.filterFavorites,this.filterUserId,this.filterTitle].filter(Boolean)},filteredList:function(){var t=this;return this.filters.length?this.lists.filter((function(e){return t.filters.every((function(t){return t(e)}))})):this.lists}},methods:{changeStatusFilter:function(t){var e=t.target.value;this.statusFilter=e},changeIdFilter:function(t){var e=t.target.value;this.idFilter=e},checkFavorites:function(t){var r=this;return n(e().mark((function n(){var i,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=localStorage.getItem("favorites"),o=JSON.parse(i)||[],r.lists.map((function(e){e.id===t&&(e.favorites?(e.favorites=!1,o=o.filter((function(e){return Number(e)!==Number(t)}))):e.favorites||(e.favorites=!0,o.push(t)))})),r.favoritesKey+=1,localStorage.setItem("favorites",JSON.stringify(o));case 5:case"end":return e.stop()}}),n)})))()},updateTodo:function(t){this.lists.push(t)}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user"},[e("TableUser"),e("div",{staticClass:"user__wrapp"},[e("div",{staticClass:"user__add"},[e("AddTodo",{on:{"update:todo":t.updateTodo}})],1),t.lists?e("div",{staticClass:"user__todos"},[e("div",{staticClass:"user__filter"},[e("div",{staticClass:"user_select"},[e("Select",{attrs:{label:"Фільтр по статусу"},model:{value:t.statusFilter,callback:function(e){t.statusFilter=e},expression:"statusFilter"}},[e("option",{attrs:{value:""}},[t._v("All")]),e("option",{attrs:{value:"completed"}},[t._v("Completed")]),e("option",{attrs:{value:"uncompleted"}},[t._v("Uncompleted")]),e("option",{attrs:{value:"favorites"}},[t._v("Favorites")])]),e("Select",{attrs:{label:"Фільтр по ID юзера"},model:{value:t.idFilter,callback:function(e){t.idFilter=e},expression:"idFilter"}},[e("option",{attrs:{value:""}},[t._v("All")]),t._l(t.usersAll,(function(r){return e("option",{key:r,domProps:{value:r}},[t._v(" "+t._s(r)+" ")])}))],2)],1),e("div",{staticClass:"user_inputSearch"},[e("Input",{attrs:{type:"text",placeholder:"Введіть дані для фільтрації"},model:{value:t.titleFilter,callback:function(e){t.titleFilter=e},expression:"titleFilter"}})],1)]),e("Todos",{attrs:{lists:t.filteredList,favoritesKey:t.favoritesKey},on:{favorites:t.checkFavorites}})],1):t._e()])],1)}),[],!1,null,null,null,null).exports)}}}))}();
