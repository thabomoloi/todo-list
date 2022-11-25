(()=>{"use strict";const t=function(){const t=document.createElement("button");return t.classList.add("menu-button"),t.innerHTML='<i class="fa-sharp fa-solid fa-bars"></i>',t},e=function(){const t=document.createElement("span");return t.classList.add("site-name"),t.innerHTML="TODO List",t};function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===i(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){return n(1,arguments),t instanceof Date||"object"===r(t)&&"[object Date]"===Object.prototype.toString.call(t)}function s(t){if(n(1,arguments),!o(t)&&"number"!=typeof t)return!1;var e=a(t);return!isNaN(Number(e))}function d(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t,e){n(2,arguments);var i=a(t).getTime(),r=d(e);return new Date(i+r)}function l(t,e){n(2,arguments);var i=d(e);return u(t,-i)}var c=864e5;function h(t){n(1,arguments);var e=1,i=a(t),r=i.getUTCDay(),o=(r<e?7:0)+r-e;return i.setUTCDate(i.getUTCDate()-o),i.setUTCHours(0,0,0,0),i}function m(t){n(1,arguments);var e=a(t),i=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(i+1,0,4),r.setUTCHours(0,0,0,0);var o=h(r),s=new Date(0);s.setUTCFullYear(i,0,4),s.setUTCHours(0,0,0,0);var d=h(s);return e.getTime()>=o.getTime()?i+1:e.getTime()>=d.getTime()?i:i-1}function f(t){n(1,arguments);var e=m(t),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var a=h(i);return a}var p=6048e5,g={};function b(){return g}function v(t,e){var i,r,o,s,u,l,c,h;n(1,arguments);var m=b(),f=d(null!==(i=null!==(r=null!==(o=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(u=e.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:m.weekStartsOn)&&void 0!==r?r:null===(c=m.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=a(t),g=p.getUTCDay(),v=(g<f?7:0)+g-f;return p.setUTCDate(p.getUTCDate()-v),p.setUTCHours(0,0,0,0),p}function w(t,e){var i,r,o,s,u,l,c,h;n(1,arguments);var m=a(t),f=m.getUTCFullYear(),p=b(),g=d(null!==(i=null!==(r=null!==(o=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(u=e.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:p.firstWeekContainsDate)&&void 0!==r?r:null===(c=p.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(f+1,0,g),w.setUTCHours(0,0,0,0);var y=v(w,e),T=new Date(0);T.setUTCFullYear(f,0,g),T.setUTCHours(0,0,0,0);var k=v(T,e);return m.getTime()>=y.getTime()?f+1:m.getTime()>=k.getTime()?f:f-1}function y(t,e){var i,a,r,o,s,u,l,c;n(1,arguments);var h=b(),m=d(null!==(i=null!==(a=null!==(r=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(s=e.locale)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==r?r:h.firstWeekContainsDate)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==i?i:1),f=w(t,e),p=new Date(0);p.setUTCFullYear(f,0,m),p.setUTCHours(0,0,0,0);var g=v(p,e);return g}var T=6048e5;function k(t,e){for(var n=t<0?"-":"",i=Math.abs(t).toString();i.length<e;)i="0"+i;return n+i}const C=function(t,e){var n=t.getUTCFullYear(),i=n>0?n:1-n;return k("yy"===e?i%100:i,e.length)},x=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):k(n+1,2)},M=function(t,e){return k(t.getUTCDate(),e.length)},_=function(t,e){return k(t.getUTCHours()%12||12,e.length)},D=function(t,e){return k(t.getUTCHours(),e.length)},E=function(t,e){return k(t.getUTCMinutes(),e.length)},S=function(t,e){return k(t.getUTCSeconds(),e.length)},L=function(t,e){var n=e.length,i=t.getUTCMilliseconds();return k(Math.floor(i*Math.pow(10,n-3)),e.length)};function P(t,e){var n=t>0?"-":"+",i=Math.abs(t),a=Math.floor(i/60),r=i%60;if(0===r)return n+String(a);var o=e||"";return n+String(a)+o+k(r,2)}function U(t,e){return t%60==0?(t>0?"-":"+")+k(Math.abs(t)/60,2):W(t,e)}function W(t,e){var n=e||"",i=t>0?"-":"+",a=Math.abs(t);return i+k(Math.floor(a/60),2)+n+k(a%60,2)}const N={G:function(t,e,n){var i=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var i=t.getUTCFullYear(),a=i>0?i:1-i;return n.ordinalNumber(a,{unit:"year"})}return C(t,e)},Y:function(t,e,n,i){var a=w(t,i),r=a>0?a:1-a;return"YY"===e?k(r%100,2):"Yo"===e?n.ordinalNumber(r,{unit:"year"}):k(r,e.length)},R:function(t,e){return k(m(t),e.length)},u:function(t,e){return k(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return k(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return k(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){var i=t.getUTCMonth();switch(e){case"M":case"MM":return x(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){var i=t.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return k(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,i,r){var o=function(t,e){n(1,arguments);var i=a(t),r=v(i,e).getTime()-y(i,e).getTime();return Math.round(r/T)+1}(t,r);return"wo"===e?i.ordinalNumber(o,{unit:"week"}):k(o,e.length)},I:function(t,e,i){var r=function(t){n(1,arguments);var e=a(t),i=h(e).getTime()-f(e).getTime();return Math.round(i/p)+1}(t);return"Io"===e?i.ordinalNumber(r,{unit:"week"}):k(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):M(t,e)},D:function(t,e,i){var r=function(t){n(1,arguments);var e=a(t),i=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),o=i-r;return Math.floor(o/c)+1}(t);return"Do"===e?i.ordinalNumber(r,{unit:"dayOfYear"}):k(r,e.length)},E:function(t,e,n){var i=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){var a=t.getUTCDay(),r=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return k(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){var a=t.getUTCDay(),r=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return k(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var i=t.getUTCDay(),a=0===i?7:i;switch(e){case"i":return String(a);case"ii":return k(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){var i=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var i,a=t.getUTCHours();switch(i=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){var i,a=t.getUTCHours();switch(i=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var i=t.getUTCHours()%12;return 0===i&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return _(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):D(t,e)},K:function(t,e,n){var i=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(i,{unit:"hour"}):k(i,e.length)},k:function(t,e,n){var i=t.getUTCHours();return 0===i&&(i=24),"ko"===e?n.ordinalNumber(i,{unit:"hour"}):k(i,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):E(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):S(t,e)},S:function(t,e){return L(t,e)},X:function(t,e,n,i){var a=(i._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return U(a);case"XXXX":case"XX":return W(a);default:return W(a,":")}},x:function(t,e,n,i){var a=(i._originalDate||t).getTimezoneOffset();switch(e){case"x":return U(a);case"xxxx":case"xx":return W(a);default:return W(a,":")}},O:function(t,e,n,i){var a=(i._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+P(a,":");default:return"GMT"+W(a,":")}},z:function(t,e,n,i){var a=(i._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+P(a,":");default:return"GMT"+W(a,":")}},t:function(t,e,n,i){var a=i._originalDate||t;return k(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,i){return k((i._originalDate||t).getTime(),e.length)}};var Y=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},H=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},A={p:H,P:function(t,e){var n,i=t.match(/(P+)(p+)?/)||[],a=i[1],r=i[2];if(!r)return Y(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Y(a,e)).replace("{{time}}",H(r,e))}};const q=A;function O(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var j=["D","DD"],F=["YY","YYYY"];function z(t){return-1!==j.indexOf(t)}function I(t){return-1!==F.indexOf(t)}function Q(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var G={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function X(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,i=t.formats[n]||t.formats[t.defaultWidth];return i}}var B,R={date:X({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:X({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:X({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},J={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function V(t){return function(e,n){var i;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,r=null!=n&&n.width?String(n.width):a;i=t.formattingValues[r]||t.formattingValues[a]}else{var o=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;i=t.values[s]||t.values[o]}return i[t.argumentCallback?t.argumentCallback(e):e]}}function $(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],r=e.match(a);if(!r)return null;var o,s=r[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(d)?Z(d,(function(t){return t.test(s)})):K(d,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(u):u,o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(s.length);return{value:o,rest:l}}}function K(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Z(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const tt={code:"en-US",formatDistance:function(t,e,n){var i,a=G[t];return i="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i},formatLong:R,formatRelative:function(t,e,n,i){return J[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:V({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:V({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:V({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:V({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:V({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(B={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(B.matchPattern);if(!n)return null;var i=n[0],a=t.match(B.parsePattern);if(!a)return null;var r=B.valueCallback?B.valueCallback(a[0]):a[0];r=e.valueCallback?e.valueCallback(r):r;var o=t.slice(i.length);return{value:r,rest:o}}),era:$({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:$({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:$({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:$({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,at=/''/g,rt=/[a-zA-Z]/;function ot(t,e,i){var r,o,u,c,h,m,f,p,g,v,w,y,T,k,C,x,M,_;n(2,arguments);var D=String(e),E=b(),S=null!==(r=null!==(o=null==i?void 0:i.locale)&&void 0!==o?o:E.locale)&&void 0!==r?r:tt,L=d(null!==(u=null!==(c=null!==(h=null!==(m=null==i?void 0:i.firstWeekContainsDate)&&void 0!==m?m:null==i||null===(f=i.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==h?h:E.firstWeekContainsDate)&&void 0!==c?c:null===(g=E.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==u?u:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=d(null!==(w=null!==(y=null!==(T=null!==(k=null==i?void 0:i.weekStartsOn)&&void 0!==k?k:null==i||null===(C=i.locale)||void 0===C||null===(x=C.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==T?T:E.weekStartsOn)&&void 0!==y?y:null===(M=E.locale)||void 0===M||null===(_=M.options)||void 0===_?void 0:_.weekStartsOn)&&void 0!==w?w:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var U=a(t);if(!s(U))throw new RangeError("Invalid time value");var W=O(U),Y=l(U,W),H={firstWeekContainsDate:L,weekStartsOn:P,locale:S,_originalDate:U},A=D.match(nt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,q[e])(t,S.formatLong):t})).join("").match(et).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return st(n);var r=N[a];if(r)return null!=i&&i.useAdditionalWeekYearTokens||!I(n)||Q(n,e,String(t)),null!=i&&i.useAdditionalDayOfYearTokens||!z(n)||Q(n,e,String(t)),r(Y,n,S.localize,H);if(a.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return A}function st(t){var e=t.match(it);return e?e[1].replace(at,"'"):t}const dt=function(t=[]){return{tasks:t}},ut=function(t,e,n,i,a,r=!1){return{id:t,title:e,description:n,dueDate:i,priority:a,done:r}};!function(){document.querySelector("header").append(document.createElement("span"),e(),t()),function(){const t=document.createElement("nav");t.appendChild((()=>{const t=document.createElement("div");t.className="tasks",t.innerHTML="<h2>Tasks</h2>";const e=document.createElement("div");e.className="nav-items";const n=document.createElement("button");n.className="nav-item",n.classList.add("active-side-menu-btn"),n.innerHTML='<i class="fa-solid fa-inbox"></i><span>Inbox</span>';const i=document.createElement("button");i.className="nav-item",i.innerHTML='<i class="fa-solid fa-calendar-day"></i><span>Today<span>';const a=document.createElement("button");a.className="nav-item",a.innerHTML='<i class="fa-solid fa-calendar-days"></i><span>Upcoming<span>';const r=document.createElement("button");r.className="priority",r.innerHTML='<i class="fa-solid fa-circle-exclamation"></i><span>Priority<span>';const o=document.createElement("div");o.classList.add("subnav","nav-items"),e.append(n,i,a,r),r.addEventListener("click",(()=>{const t=o.style.display;o.style.display="none"!=t?"none":"block"}));const s=document.createElement("button");s.classList.add("nav-item","priority-item"),s.innerHTML='<i class="fa-solid fa-angle-right"></i><span>High</span>';const d=document.createElement("button");d.classList.add("nav-item","priority-item"),d.innerHTML='<i class="fa-solid fa-angle-right"></i><span>Medium</span>';const u=document.createElement("button");return u.classList.add("nav-item","priority-item"),u.innerHTML='<i class="fa-solid fa-angle-right"></i><span>Low</span>',o.append(s,d,u),e.appendChild(o),t.appendChild(e),t})()),t.appendChild((()=>{const t=document.createElement("div");t.className="projects",t.innerHTML="<h2>Projects</h2>";const e=document.createElement("div");e.classList.add("project-items","nav-items");const n=document.createElement("button");return n.classList.add("btn-add-project"),n.innerHTML='<i class="fa-solid fa-plus"></i><span>Add new project<span>',e.appendChild(n),t.appendChild(e),t})()),document.querySelector("#sidemenu").appendChild(t)}();const i=new class{constructor(){this.operation="view",this.editID="",this.inboxStorage=new class{constructor(){this.todoStorage=new class{constructor(){var t=localStorage.getItem("todoList");this.inbox=dt(),this.projects=[],null!=t&&(this.todoList=JSON.parse(t),this.inbox=this.todoList.inbox,this.projects=this.todoList.projects)}getProjects(){return this.projects}getInbox(){return this.inbox}setInbox(t){this.inbox=t,this.commit()}setProjects(t){this.projects=t,this.commit()}commit(){const t={inbox:this.inbox,projects:this.projects};localStorage.setItem("todoList",JSON.stringify(t))}},this.inbox=this.todoStorage.getInbox()}getAllTasks(){return this.inbox.tasks}addTask(t,e,n,i,a){const r=`inbox-${this.inbox.tasks.length}`,o=ut(r,t,e,n,i,a);this.inbox.tasks.push(o),this.todoStorage.setInbox(this.inbox)}updateTask(t,e,n,i,a,r){for(let o=0;o<this.inbox.tasks.length;o++)if(this.inbox.tasks[o].id==t){this.inbox.tasks[o]=ut(t,e,n,i,a,r);break}this.todoStorage.setInbox(this.inbox)}removeTask(t){const e=this.getAllTasks().filter((e=>e.id!=t));this.inbox=dt(e),this.todoStorage.setInbox(this.inbox)}}}getAllTasks(){return this.inboxStorage.getAllTasks()}addTask(t,e,n,i,a){this.inboxStorage.addTask(t,e,n,i,a)}updateTask(t,e,n,i,a,r){this.inboxStorage.updateTask(t,e,n,i,a,r)}removeTask(t){this.inboxStorage.removeTask(t.id)}},r=new class{constructor(t){this.controller=t,this.modal_container=document.createElement("div"),this.modal_container.className="todo-modal-container";const e=document.createElement("section");e.classList.add("modal"),e.id="todo-modal",this.modal_container.appendChild(e);const n=document.createElement("div");n.classList.add("modal-content"),e.appendChild(n),this.modal_title=document.createElement("h1"),this.modal_title.innerText="Add New Task",this.modal_title.classList.add("modal-title"),n.appendChild(this.modal_title),this.form=document.createElement("form"),this.form.classList.add("task-form"),n.appendChild(this.form),this.title_label=document.createElement("label"),this.title_label.setAttribute("for","todo-title"),this.title_label.innerText="Title",this.form.appendChild(this.title_label),this.title_input=document.createElement("input"),this.title_input.setAttribute("type","text"),this.title_input.setAttribute("placeholder","Title..."),this.title_input.required=!0,this.title_input.id="todo-title",this.form.appendChild(this.title_input),this.description_label=document.createElement("label"),this.description_label.setAttribute("for","todo-description"),this.description_label.innerText="Description",this.form.appendChild(this.description_label),this.description_input=document.createElement("input"),this.description_input.setAttribute("type","text"),this.description_input.setAttribute("placeholder","Add a description..."),this.description_input.id="todo-description",this.form.appendChild(this.description_input),this.due_date_label=document.createElement("label"),this.due_date_label.setAttribute("for","due-date"),this.due_date_label.innerText="Due Date",this.form.appendChild(this.due_date_label),this.due_date_input=document.createElement("input"),this.due_date_input.setAttribute("type","date"),this.due_date_input.id="due-date",this.due_date_input.required=!0,this.form.appendChild(this.due_date_input),this.priority_label=document.createElement("label"),this.priority_label.setAttribute("for","priority"),this.priority_label.innerText="Priority",this.form.appendChild(this.priority_label),this.priority_input=document.createElement("select"),this.priority_input.id="priority",this.priority_input.required=!0,this.form.appendChild(this.priority_input);const i=document.createElement("option");i.setAttribute("value","low"),i.innerText="Low";const a=document.createElement("option");a.innerText="Medium",a.setAttribute("value","medium");const r=document.createElement("option");r.innerText="High",r.setAttribute("value","high"),this.priority_input.append(i,a,r);const o=document.createElement("button");o.innerText="Cancel",o.addEventListener("click",(t=>{t.preventDefault(),this.modal_container.style.display="none"}));const s=document.createElement("input");s.setAttribute("type","submit"),this.form.append(o,s),window.onclick=function(t){t.target!=this.modal_container&&t.target!=e||(this.modal_container.style.display="none")},this.loadTaskForm()}loadTaskForm(){document.querySelector("body").appendChild(this.modal_container)}clearFields(){this.title_input.value="",this.due_date_input.value="",this.description_input.value="",this.priority_input.value="low"}addNewTask(t){this.modal_title.innerText="Add New Task",this.modal_container.style.display="block",this.form.onsubmit=e=>{e.preventDefault(),this.controller.addTask(this.title_input.value.trim(),this.description_input.value.trim(),this.due_date_input.value,this.priority_input.value,!1),this.clearFields(),this.modal_container.style.display="none",t.updateView()}}editTask(t,e){this.modal_title.innerText="Edit Task",this.modal_container.style.display="block",this.title_input.value=t.title,this.due_date_input.value=t.dueDate,this.description_input.value=t.description,this.priority_input.value=t.priority,this.form.onsubmit=n=>{n.preventDefault(),this.controller.updateTask(t.id,this.title_input.value.trim(),this.description_input.value.trim(),this.due_date_input.value,this.priority_input.value,t.done),this.clearFields(),this.modal_container.style.display="none",e.updateView()}}}(i);new class{constructor(t,e){this.inboxController=t,this.taskForm=e,this.createInbox()}createInbox(){const t=document.querySelector("#content"),e=document.createElement("h1");e.innerText="Inbox",e.classList.add("heading"),t.appendChild(e);const n=document.createElement("div");n.id="inbox",n.classList.add("task-view"),t.appendChild(n);const i=document.createElement("button");i.innerHTML='<i class="fa-solid fa-plus">&nbsp;</i><span>Add task<span>',i.className="btn-add-task",i.addEventListener("click",(()=>{this.taskForm.addNewTask(this)})),t.appendChild(i),this.updateView()}updateView(){const t=this.inboxController.getAllTasks(),e=document.querySelector("#inbox");e&&(e.innerHTML="",t.forEach((t=>{const i=document.createElement("div");i.id=t.id,i.classList.add(t.done?"done-task":"todo-task"),i.classList.add(-1==function(t,e){n(2,arguments);var i=a(t),r=a(e),o=i.getTime()-r.getTime();return o<0?-1:o>0?1:o}(Date.parse(t.dueDate),Date.parse(ot(new Date,"yyyy-MM-dd")))?"task-due-date-passed":"task-upcoming"),e.appendChild(i);const r=document.createElement("input");r.setAttribute("type","checkbox"),r.id=`${t.id}-checkbox}`,r.checked=t.done,i.appendChild(r),r.style.backgroundImage=r.checked?'url("../dist/images/check-solid.svg")':"none",r.addEventListener("click",(e=>{t.done=e.target.checked,this.inboxController.updateTask(t.id,t.title,t.description,t.dueDate,t.priority,t.done),this.updateView()}));const o=document.createElement("label");o.setAttribute("for",r.id),o.innerHTML=`<strong>${t.title}</strong>`,i.appendChild(o);const s=document.createElement("span");s.classList.add("priority-color",t.priority),i.appendChild(s);const d=document.createElement("span");d.classList.add("task-due-date"),d.innerText=ot(Date.parse(t.dueDate),"d MMM yyyy"),i.append(d);const u=document.createElement("button");u.id=`${t.id}-edit-button`,u.innerHTML='<i class="fa-solid fa-pen-to-square"></i>',i.appendChild(u),u.addEventListener("click",(e=>{this.taskForm.editTask(t,this),this.updateView()}));const l=document.createElement("button");l.id=`${t.id}-delete-button`,l.innerHTML='<i class="fa-solid fa-trash-can"></i>',i.appendChild(l),l.addEventListener("click",(e=>{this.inboxController.removeTask(t),this.updateView()}))})))}}(i,r)}()})();