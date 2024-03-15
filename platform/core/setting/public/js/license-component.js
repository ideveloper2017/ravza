(()=>{"use strict";var t={6262:(t,e)=>{e.A=(t,e)=>{const r=t.__vccOpts||t;for(const[t,n]of e)r[t]=n;return r}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}(()=>{const t=Vue;function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:j(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function L(){}var x={};l(x,u,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(N([])));S&&S!==o&&i.call(S,u)&&(x=S);var k=L.prototype=w.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,r){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==e(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function j(e,r,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function N(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(r)+" is not iterable")}return b.prototype=L,a(k,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:b,configurable:!0}),b.displayName=l(L,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l(t,f,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},_(O.prototype),l(O.prototype,s,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),l(k,f,"Generator"),l(k,u,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}}const a={props:{id:{type:String,default:function(){return null},required:!0},verifyUrl:{type:String,default:function(){return null},required:!0},activateLicenseUrl:{type:String,default:function(){return null},required:!0},deactivateLicenseUrl:{type:String,default:function(){return null},required:!0},resetLicenseUrl:{type:String,default:function(){return null},required:!0}},data:function(){return{initialized:null,loading:!0,verified:!1,license:null}},mounted:function(){this.verifyLicense()},methods:{verifyLicense:function(){var t=this;return i(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$httpClient.makeWithoutErrorHandler().get(t.verifyUrl).then((function(e){var r=e.data;t.verified=!0,t.license=r.data})).catch((function(t){400===t.response.status&&Botble.showError(t.response.data.message)})).finally((function(){t.initialized=!0,t.loading=!1})));case 1:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;return i(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new FormData(t.$refs.formRef),e.abrupt("return",t.doActivateLicense(r));case 2:case"end":return e.stop()}}),e)})))()},resetLicense:function(){var t=this;return i(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new FormData(t.$refs.formRef),e.abrupt("return",t.doResetLicense(r));case 2:case"end":return e.stop()}}),e)})))()},deactivateLicense:function(){var t=this;return i(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.abrupt("return",$httpClient.make().post(t.deactivateLicenseUrl).then((function(e){t.verified=!1})).finally((function(){t.loading=!1})));case 2:case"end":return e.stop()}}),e)})))()},doActivateLicense:function(t){var e=this;return i(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.abrupt("return",$httpClient.make().postForm(e.activateLicenseUrl,t).then((function(t){var r=t.data;e.verified=!0,e.license=r.data,Botble.showSuccess(r.message)})).finally((function(){e.loading=!1})));case 2:case"end":return r.stop()}}),r)})))()},doResetLicense:function(t){var e=this;return i(n().mark((function r(){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.abrupt("return",$httpClient.make().postForm(e.resetLicenseUrl,t).then((function(t){var r=t.data;e.verified=!1,Botble.showSuccess(r.message)})).finally((function(){e.loading=!1})));case 2:case"end":return r.stop()}}),r)})))()}}};const c=(0,r(6262).A)(a,[["render",function(e,r,n,o,i,a){return(0,t.openBlock)(),(0,t.createElementBlock)("form",{id:"license-form",ref:"formRef",onSubmit:r[0]||(r[0]=(0,t.withModifiers)((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[(0,t.renderSlot)(e.$slots,"default",(0,t.normalizeProps)((0,t.guardReactiveProps)({initialized:i.initialized,loading:i.loading,verified:i.verified,license:i.license,deactivateLicense:a.deactivateLicense,resetLicense:a.resetLicense})))],544)}]]);"undefined"!=typeof vueApp&&vueApp.booting((function(t){t.component("v-license-form",c)}))})()})();