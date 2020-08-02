(function(){var g=this||self;function h(a){return"string"==typeof a}
var aa=/^[\w+/_-]+[=]{0,2}$/,m=null;function n(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function p(){}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
var r="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=da:t=ea;return t.apply(null,arguments)}
function fa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var e=c.slice();e.push.apply(e,arguments);return a.apply(this,e)}}
function u(a,b){var c=a.split("."),e=g;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
function ha(a,b){function c(){}
c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.w=function(e,d,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];return b.prototype[d].apply(e,k)}}
;var ia=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(h(a))return h(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,d=h(a)?a.split(""):a,f=0;f<e;f++)f in d&&b.call(c,d[f],f,a)};function w(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
w.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};function x(a,b){this.f=a===y&&b||"";this.g=z}
x.prototype.b=!0;x.prototype.a=function(){return this.f};
x.prototype.toString=function(){return"Const{"+this.f+"}"};
var z={},y={},A=new x(y,"");function B(){this.f="";this.g=C}
B.prototype.b=!0;B.prototype.a=function(){return this.f.toString()};
function D(a){return a instanceof B&&a.constructor===B&&a.g===C?a.f:"type_error:TrustedResourceUrl"}
var C={};function E(a){var b=new B;b.f=a;return b}
;function F(){this.f="";this.g=G}
F.prototype.b=!0;F.prototype.a=function(){return this.f.toString()};
var ja=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,G={};function H(a){var b=new F;b.f=a;return b}
H("about:blank");var I;a:{var J=g.navigator;if(J){var K=J.userAgent;if(K){I=K;break a}}I=""};function L(){this.f="";this.g=ka}
L.prototype.b=!0;L.prototype.a=function(){return this.f.toString()};
var ka={};function M(a){var b=new L;b.f=a;return b}
M("<!DOCTYPE html>");var N=M("");M("<br>");function la(a){var b=E(A instanceof x&&A.constructor===x&&A.g===z?A.f:"type_error:Const");a.src=D(b).toString()}
function ma(a,b){a.src=D(b);if(null===m)b:{var c=g.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&aa.test(c)){m=c;break b}m=""}c=m;c&&a.setAttribute("nonce",c)}
;function na(a){g.setTimeout(function(){throw a;},0)}
var O;
function oa(){var a=g.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==I.indexOf("Presto")&&(a=function(){var d=document.createElement("IFRAME");d.style.display="none";la(d);document.documentElement.appendChild(d);var f=d.contentWindow;d=f.document;d.open();d.write(N instanceof L&&N.constructor===L&&N.g===ka?N.f:"type_error:SafeHtml");d.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+
f.location.host;d=t(function(ba){if(("*"==l||ba.origin==l)&&ba.data==k)this.port1.onmessage()},this);
f.addEventListener("message",d,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&-1==I.indexOf("Trident")&&-1==I.indexOf("MSIE")){var b=new a,c={},e=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var d=c.m;c.m=null;d()}};
return function(d){e.next={m:d};e=e.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(d){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;d();d=null};
document.documentElement.appendChild(f)}:function(d){g.setTimeout(d,0)}}
;function P(){this.b=this.a=null}
var pa=new w(function(){return new Q},function(a){a.reset()});
P.prototype.add=function(a,b){var c=pa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
P.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Q(){this.next=this.b=this.a=null}
Q.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Q.prototype.reset=function(){this.next=this.b=this.a=null};function qa(a){R||ra();S||(R(),S=!0);sa.add(a,void 0)}
var R;function ra(){if(g.Promise&&g.Promise.resolve){var a=g.Promise.resolve(void 0);R=function(){a.then(ta)}}else R=function(){var b=ta,c;
!(c="function"!=q(g.setImmediate))&&(c=g.Window&&g.Window.prototype)&&(c=-1==I.indexOf("Edge")&&g.Window.prototype.setImmediate==g.setImmediate);c?(O||(O=oa()),O(b)):g.setImmediate(b)}}
var S=!1,sa=new P;function ta(){for(var a;a=sa.remove();){try{a.a.call(a.b)}catch(c){na(c)}var b=pa;b.g(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}S=!1}
;function T(){this.f=this.f;this.g=this.g}
T.prototype.f=!1;T.prototype.dispose=function(){this.f||(this.f=!0,this.j())};
T.prototype.j=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function ua(a){va();return E(a)}
var va=p;function U(a){T.call(this);this.o=1;this.h=[];this.i=0;this.a=[];this.b={};this.s=!!a}
ha(U,T);U.prototype.subscribe=function(a,b,c){var e=this.b[a];e||(e=this.b[a]=[]);var d=this.o;this.a[d]=a;this.a[d+1]=b;this.a[d+2]=c;this.o=d+3;e.push(d);return d};
U.prototype.l=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.i)this.h.push(a),this.a[a+1]=p;else{if(c){var e=ia(c,a);0<=e&&Array.prototype.splice.call(c,e,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
U.prototype.u=function(a,b){var c=this.b[a];if(c){for(var e=Array(arguments.length-1),d=1,f=arguments.length;d<f;d++)e[d-1]=arguments[d];if(this.s)for(d=0;d<c.length;d++){var k=c[d];wa(this.a[k+1],this.a[k+2],e)}else{this.i++;try{for(d=0,f=c.length;d<f;d++)k=c[d],this.a[k+1].apply(this.a[k+2],e)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.l(c)}}return 0!=d}return!1};
function wa(a,b,c){qa(function(){a.apply(b,c)})}
U.prototype.clear=function(a){if(a){var b=this.b[a];b&&(v(b,this.l,this),delete this.b[a])}else this.a.length=0,this.b={}};
U.prototype.j=function(){U.v.j.call(this);this.clear();this.h.length=0};var V=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",V);function W(a){var b=arguments;if(1<b.length)V[b[0]]=b[1];else{b=b[0];for(var c in b)V[c]=b[c]}}
function xa(a,b){return a in V?V[a]:b}
;function ya(a){return a?a.dataset?a.dataset[za()]:a.getAttribute("data-loaded"):null}
var Aa={};function za(){return Aa.loaded||(Aa.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Ba(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ca(b)}}:a}
function Ca(a){var b=n("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=xa("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),W("ERRORS",b))}
;function Da(a){"function"==q(a)&&(a=Ba(a));window.setTimeout(a,0)}
;var Ea=n("ytPubsubPubsubInstance")||new U;U.prototype.subscribe=U.prototype.subscribe;U.prototype.unsubscribeByKey=U.prototype.l;U.prototype.publish=U.prototype.u;U.prototype.clear=U.prototype.clear;u("ytPubsubPubsubInstance",Ea);var X=n("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",X);var Y=n("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",Y);var Fa=n("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",Fa);
function Ga(a,b){var c=Z();if(c){var e=c.subscribe(a,function(){var d=arguments;var f=function(){X[e]&&b.apply(window,d)};
try{Fa[a]?f():Da(f)}catch(k){Ca(k)}},void 0);
X[e]=!0;Y[a]||(Y[a]=[]);Y[a].push(e)}}
function Ha(a,b){var c=Z();c&&c.publish.apply(c,arguments)}
function Ia(a){var b=Z();if(b)if(b.clear(a),a)Ja(a);else for(var c in Y)Ja(c)}
function Z(){return n("ytPubsubPubsubInstance")}
function Ja(a){Y[a]&&(a=Y[a],v(a,function(b){X[b]&&delete X[b]}),a.length=0)}
;var Ka=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,La=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ma(a,b){var c=void 0===c?null:c;if(window.spf){c="";if(a){var e=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),f=e+6;-1<e&&-1<d&&d>f&&(c=a.substring(f,d),c=c.replace(Ka,""),c=c.replace(La,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Na(a,b,c)}
function Na(a,b,c){c=void 0===c?null:c;var e=Oa(a),d=document.getElementById(e),f=d&&ya(d),k=d&&!f;f?b&&b():(b&&(Ga(e,b),b[r]||(b[r]=++ca)),k||(d=Pa(a,e,function(){if(!ya(d)){var l=d;l&&(l.dataset?l.dataset[za()]="true":l.setAttribute("data-loaded","true"));Ha(e);Da(fa(Ia,e))}},c)))}
function Pa(a,b,c,e){e=void 0===e?null:e;var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
e&&d.setAttribute("nonce",e);ma(d,ua(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Oa(a){var b=document.createElement("a");a instanceof F||a instanceof F||(a="object"==typeof a&&a.b?a.a():String(a),ja.test(a)||(a="about:invalid#zClosurez"),a=H(a));b.href=a instanceof F&&a.constructor===F&&a.g===G?a.f:"type_error:SafeUrl";b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"js-"+a}
;u("_gel",function(a){var b=document;return h(a)?b.getElementById(a):a});
u("yt.setConfig",W);u("yt.config.set",W);u("yt.www.notfound.init",function(){var a=xa("SBOX_JS_URL",void 0);a&&Ma(a,function(){try{n("yt.www.masthead.searchbox.init")()}catch(b){throw b.message+=' SboxUrl: "'+a+'"',b;}})});}).call(this);
