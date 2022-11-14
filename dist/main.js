(()=>{"use strict";const t=function(){const t=document.createElement("button");return t.classList.add("menu-button"),t.innerHTML='<i class="fa-sharp fa-solid fa-bars"></i>',t},e=function(){const t=document.createElement("span");return t.classList.add("site-name"),t.innerHTML="TODO List",t},n=function(t,e){return{inbox:t,projects:e}},a=(()=>{var t=localStorage.getItem("todoList"),e=function(t=[]){return{tasks:t}}(),n=[];if(null!=t){const a=JSON.parse(t);e=a.inbox,n=a.projects}return{getInbox:()=>e,getProjects:()=>n,save:t=>{localStorage.setItem("todoList",JSON.stringify(t)),e=t.inbox,n=t.projects}}})(),r=a;function o(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t){return o(1,arguments),t instanceof Date||"object"===i(t)&&"[object Date]"===Object.prototype.toString.call(t)}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function d(t){o(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===s(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function c(t){if(o(1,arguments),!u(t)&&"number"!=typeof t)return!1;var e=d(t);return!isNaN(Number(e))}function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(t,e){o(2,arguments);var n=d(t).getTime(),a=l(e);return new Date(n+a)}function h(t,e){o(2,arguments);var n=l(e);return m(t,-n)}var f=864e5;function g(t){o(1,arguments);var e=1,n=d(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function v(t){o(1,arguments);var e=d(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=g(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var u=g(i);return e.getTime()>=r.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function p(t){o(1,arguments);var e=v(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=g(n);return a}var b=6048e5,w={};function y(){return w}function T(t,e){var n,a,r,i,u,s,c,m;o(1,arguments);var h=y(),f=l(null!==(n=null!==(a=null!==(r=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==r?r:h.weekStartsOn)&&void 0!==a?a:null===(c=h.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=d(t),v=g.getUTCDay(),p=(v<f?7:0)+v-f;return g.setUTCDate(g.getUTCDate()-p),g.setUTCHours(0,0,0,0),g}function C(t,e){var n,a,r,i,u,s,c,m;o(1,arguments);var h=d(t),f=h.getUTCFullYear(),g=y(),v=l(null!==(n=null!==(a=null!==(r=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==r?r:g.firstWeekContainsDate)&&void 0!==a?a:null===(c=g.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(f+1,0,v),p.setUTCHours(0,0,0,0);var b=T(p,e),w=new Date(0);w.setUTCFullYear(f,0,v),w.setUTCHours(0,0,0,0);var C=T(w,e);return h.getTime()>=b.getTime()?f+1:h.getTime()>=C.getTime()?f:f-1}function M(t,e){var n,a,r,i,u,s,d,c;o(1,arguments);var m=y(),h=l(null!==(n=null!==(a=null!==(r=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==r?r:m.firstWeekContainsDate)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=C(t,e),g=new Date(0);g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0);var v=T(g,e);return v}var x=6048e5;function k(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const E=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return k("yy"===e?a%100:a,e.length)},D=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):k(n+1,2)},S=function(t,e){return k(t.getUTCDate(),e.length)},P=function(t,e){return k(t.getUTCHours()%12||12,e.length)},L=function(t,e){return k(t.getUTCHours(),e.length)},U=function(t,e){return k(t.getUTCMinutes(),e.length)},W=function(t,e){return k(t.getUTCSeconds(),e.length)},N=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return k(Math.floor(a*Math.pow(10,n-3)),e.length)};function Y(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+k(o,2)}function H(t,e){return t%60==0?(t>0?"-":"+")+k(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+k(Math.floor(r/60),2)+n+k(r%60,2)}const O={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return E(t,e)},Y:function(t,e,n,a){var r=C(t,a),o=r>0?r:1-r;return"YY"===e?k(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):k(o,e.length)},R:function(t,e){return k(v(t),e.length)},u:function(t,e){return k(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return k(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return k(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return D(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return k(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){o(1,arguments);var n=d(t),a=T(n,e).getTime()-M(n,e).getTime();return Math.round(a/x)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):k(r,e.length)},I:function(t,e,n){var a=function(t){o(1,arguments);var e=d(t),n=g(e).getTime()-p(e).getTime();return Math.round(n/b)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):k(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):S(t,e)},D:function(t,e,n){var a=function(t){o(1,arguments);var e=d(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/f)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):k(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return k(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return k(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return k(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return P(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):L(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):k(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):k(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):U(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):W(t,e)},S:function(t,e){return N(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return H(r);case"XXXX":case"XX":return q(r);default:return q(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return H(r);case"xxxx":case"xx":return q(r);default:return q(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");default:return"GMT"+q(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");default:return"GMT"+q(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return k(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return k((a._originalDate||t).getTime(),e.length)}};var A=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},j=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},F={p:j,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return A(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",A(r,e)).replace("{{time}}",j(o,e))}};const I=F;function z(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Q=["D","DD"],G=["YY","YYYY"];function X(t){return-1!==Q.indexOf(t)}function B(t){return-1!==G.indexOf(t)}function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var J={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function $(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var _,V={date:$({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:$({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:$({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},K={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Z(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function tt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,u=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?nt(s,(function(t){return t.test(u)})):et(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(u.length);return{value:i,rest:c}}}function et(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function nt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const at={code:"en-US",formatDistance:function(t,e,n){var a,r=J[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:V,formatRelative:function(t,e,n,a){return K[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(_={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(_.matchPattern);if(!n)return null;var a=n[0],r=t.match(_.parsePattern);if(!r)return null;var o=_.valueCallback?_.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(a.length);return{value:o,rest:i}}),era:tt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:tt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:tt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:tt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,ut=/''/g,st=/[a-zA-Z]/;function dt(t){var e=t.match(it);return e?e[1].replace(ut,"'"):t}!function(){const a=new class{constructor(){}getInbox(){return r.getInbox()}getAllProjects(){return r.getProjects()}saveToStorage(t){return r.save(t)}updateInbox(){const t=this.getInbox(),e=this.getAllProjects(),a=document.querySelector("#inbox");a&&(a.innerHTML="",t.tasks.forEach((r=>{const i=document.createElement("div");i.id=r.id,a.appendChild(i);const u=document.createElement("input");u.setAttribute("type","checkbox"),u.id=`${r.id}-checkbox}`,u.checked=r.done,i.appendChild(u),u.style.backgroundImage=u.checked?'url("../dist/images/check-solid.svg")':"none",u.addEventListener("click",(a=>{r.done=a.target.checked;const o=n(t,e);this.saveToStorage(o),this.updateInbox()}));const s=document.createElement("label");s.setAttribute("for",u.id),s.innerHTML=`<strong>${r.title}</strong>`,i.appendChild(s);const m=document.createElement("span");m.classList.add("priority-color",r.priority),i.appendChild(m);const f=document.createElement("span");f.classList.add("task-due-date"),f.innerText=function(t,e,n){var a,r,i,u,s,m,f,g,v,p,b,w,T,C,M,x,k,E;o(2,arguments);var D=String(e),S=y(),P=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:S.locale)&&void 0!==a?a:at,L=l(null!==(i=null!==(u=null!==(s=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==s?s:S.firstWeekContainsDate)&&void 0!==u?u:null===(v=S.locale)||void 0===v||null===(p=v.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==i?i:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=l(null!==(b=null!==(w=null!==(T=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(M=n.locale)||void 0===M||null===(x=M.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==T?T:S.weekStartsOn)&&void 0!==w?w:null===(k=S.locale)||void 0===k||null===(E=k.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var W=d(t);if(!c(W))throw new RangeError("Invalid time value");var N=h(W,z(W)),Y={firstWeekContainsDate:L,weekStartsOn:U,locale:P,_originalDate:W};return D.match(ot).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,I[e])(t,P.formatLong):t})).join("").match(rt).map((function(a){if("''"===a)return"'";var r=a[0];if("'"===r)return dt(a);var o=O[r];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!B(a)||R(a,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!X(a)||R(a,e,String(t)),o(N,a,P.localize,Y);if(r.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return a})).join("")}(Date.parse(r.dueDate),"d MMM yyyy"),i.append(f);const g=document.createElement("button");g.id=`${r.id}-edit-button`,g.innerHTML='<i class="fa-solid fa-pen-to-square"></i>',i.appendChild(g);const v=document.createElement("button");v.id=`${r.id}-delete-button`,v.innerHTML='<i class="fa-solid fa-trash-can"></i>',i.appendChild(v),v.addEventListener("click",(a=>{t.tasks.pop(r);const o=n(t,e);this.saveToStorage(o),this.updateInbox()}))})))}addInboxTask(t,e,a,r,o){const i=this.getInbox(),u=this.getAllProjects(),s=function(t,e,n,a,r,o=!1){return{id:t,title:e,description:n,dueDate:a,priority:r,done:o}}(`inbox-${i.tasks.length}`,t,e,a,r,o);i.tasks.push(s);const d=n(i,u);this.saveToStorage(d),this.updateInbox()}};document.querySelector("header").append(document.createElement("span"),e(),t()),function(){const t=document.createElement("nav");t.appendChild((()=>{const t=document.createElement("div");t.className="tasks",t.innerHTML="<h2>Tasks</h2>";const e=document.createElement("div");e.className="nav-items";const n=document.createElement("button");n.className="nav-item",n.innerHTML='<i class="fa-solid fa-inbox"></i><span>Inbox</span>';const a=document.createElement("button");a.className="nav-item",a.innerHTML='<i class="fa-solid fa-calendar-day"></i><span>Today<span>';const r=document.createElement("button");r.className="nav-item",r.innerHTML='<i class="fa-solid fa-calendar-days"></i><span>Upcoming<span>';const o=document.createElement("button");o.className="priority",o.innerHTML='<i class="fa-solid fa-circle-exclamation"></i><span>Priority<span>';const i=document.createElement("div");i.classList.add("subnav","nav-items"),e.append(n,a,r,o);const u=document.createElement("button");u.classList.add("nav-item","priority-item"),u.innerHTML='<i class="fa-solid fa-angle-right"></i><span>High</span>';const s=document.createElement("button");s.classList.add("nav-item","priority-item"),s.innerHTML='<i class="fa-solid fa-angle-right"></i><span>Medium</span>';const d=document.createElement("button");return d.classList.add("nav-item","priority-item"),d.innerHTML='<i class="fa-solid fa-angle-right"></i><span>Low</span>',i.append(u,s,d),e.appendChild(i),t.appendChild(e),t})()),t.appendChild((()=>{const t=document.createElement("div");t.className="projects",t.innerHTML="<h2>Projects</h2>";const e=document.createElement("div");e.classList.add("project-items","nav-items");const n=document.createElement("button");return n.classList.add("btn-add-project"),n.innerHTML='<i class="fa-solid fa-plus"></i><span>Add new project<span>',e.appendChild(n),t.appendChild(e),t})()),document.querySelector("#sidemenu").appendChild(t)}(),function(t){const e=document.querySelector("body"),n=function(t){const e=document.createElement("div");e.className="todo-modal-container";const n=document.createElement("section");n.classList.add("modal"),n.id="todo-modal",e.appendChild(n);const a=document.createElement("div");a.classList.add("modal-content"),n.appendChild(a);const r=document.createElement("h1");r.innerText="Add New Task",r.classList.add("modal-title"),a.appendChild(r);const o=document.createElement("form");o.classList.add("task-form"),a.appendChild(o);const i=document.createElement("label");i.setAttribute("for","todo-title"),i.innerText="Title",o.appendChild(i);const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("placeholder","Title..."),u.required=!0,u.id="todo-title",o.appendChild(u);const s=document.createElement("label");s.setAttribute("for","todo-description"),s.innerText="Description",o.appendChild(s);const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("placeholder","Add a description..."),d.id="todo-description",d.required=!0,o.appendChild(d);const c=document.createElement("label");c.setAttribute("for","due-date"),c.innerText="Due Date",o.appendChild(c);const l=document.createElement("input");l.setAttribute("type","date"),l.id="due-date",l.required=!0,o.appendChild(l);const m=document.createElement("label");m.setAttribute("for","priority"),m.innerText="Priority",o.appendChild(m);const h=document.createElement("select");h.id="priority",h.required=!0,o.appendChild(h);const f=document.createElement("option");f.setAttribute("value","low"),f.innerText="Low";const g=document.createElement("option");g.innerText="Medium",g.setAttribute("value","medium");const v=document.createElement("option");v.innerText="High",v.setAttribute("value","high"),h.append(f,g,v);const p=document.createElement("button");p.innerText="Cancel",p.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"}));const b=document.createElement("input");return b.setAttribute("type","submit"),o.append(p,b),o.onsubmit=e=>{e.preventDefault(),t.addInboxTask(u.value.trim(),d.value.trim(),l.value,h.value),u.value="",l.value="",d.value="",h.value="low"},e}(t);e.appendChild(n)}(a),function(t){const e=document.querySelector("#content"),n=document.createElement("h1");n.innerText="Inbox",n.classList.add("heading"),e.appendChild(n);const a=document.createElement("div");a.id="inbox",a.classList.add("task-view"),e.appendChild(a);const r=document.createElement("button");r.innerHTML='<i class="fa-solid fa-plus">&nbsp;</i><span>Add task<span>',r.className="btn-add-task",e.appendChild(r),t.updateInbox()}(a),a.updateInbox()}()})();