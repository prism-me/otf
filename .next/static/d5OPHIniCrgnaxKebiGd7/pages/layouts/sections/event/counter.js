(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{"+qiv":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("PHNs"),s=n.n(i),o=n("ds1u"),u=n("1Yj4"),l=n("ok1R"),c=n("rhny"),p=r.a.createElement;t.default=function(){return p("section",{className:"event counter set-relative bg bg-img3 bg-about"},p(u.a,null,p(l.a,null,o.CounterData.map(function(e,t){return p(c.a,{md:"3",xs:"6",className:"counter-container",key:t},p("div",{className:"counters"},p("img",{alt:"",className:"img-fluid counter-img",src:e.img}),p("div",{className:"counter-text"},p("h2",{className:"count-number text-white counts"},p(s.a,{end:e.count,duration:10})),p("h6",{className:"count-desc text-white"},e.desc))))}))))}},"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},"78Z9":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/event/counter",function(){return n("+qiv")}])},GiOn:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,i){function s(e){return"number"==typeof e&&!isNaN(e)}var o=this;if(o.version=function(){return"1.9.3"},o.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,i,s,u=e<0;if(e=Math.abs(e).toFixed(o.decimals),t=(e+="").split("."),n=t[0],a=t.length>1?o.options.decimal+t[1]:"",o.options.useGrouping){for(r="",i=0,s=n.length;i<s;++i)0!==i&&i%3===0&&(r=o.options.separator+r),r=n[s-i-1]+r;n=r}return o.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return o.options.numerals[+e]}),a=a.replace(/[0-9]/g,function(e){return o.options.numerals[+e]})),(u?"-":"")+o.options.prefix+n+a+o.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var u in o.options)i.hasOwnProperty(u)&&null!==i[u]&&(o.options[u]=i[u]);""===o.options.separator?o.options.useGrouping=!1:o.options.separator=""+o.options.separator;for(var l=0,c=["webkit","moz","ms","o"],p=0;p<c.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[c[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[p]+"CancelAnimationFrame"]||window[c[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-l)),r=window.setTimeout(function(){e(n+a)},a);return l=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),o.initialize=function(){return!!o.initialized||(o.error="",o.d="string"==typeof e?document.getElementById(e):e,o.d?(o.startVal=Number(t),o.endVal=Number(n),s(o.startVal)&&s(o.endVal)?(o.decimals=Math.max(0,a||0),o.dec=Math.pow(10,o.decimals),o.duration=1e3*Number(r)||2e3,o.countDown=o.startVal>o.endVal,o.frameVal=o.startVal,o.initialized=!0,!0):(o.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(o.error="[CountUp] target is null or undefined",!1))},o.printValue=function(e){var t=o.options.formattingFn(e);"INPUT"===o.d.tagName?this.d.value=t:"text"===o.d.tagName||"tspan"===o.d.tagName?this.d.textContent=t:this.d.innerHTML=t},o.count=function(e){o.startTime||(o.startTime=e),o.timestamp=e;var t=e-o.startTime;o.remaining=o.duration-t,o.options.useEasing?o.countDown?o.frameVal=o.startVal-o.options.easingFn(t,0,o.startVal-o.endVal,o.duration):o.frameVal=o.options.easingFn(t,o.startVal,o.endVal-o.startVal,o.duration):o.countDown?o.frameVal=o.startVal-(o.startVal-o.endVal)*(t/o.duration):o.frameVal=o.startVal+(o.endVal-o.startVal)*(t/o.duration),o.countDown?o.frameVal=o.frameVal<o.endVal?o.endVal:o.frameVal:o.frameVal=o.frameVal>o.endVal?o.endVal:o.frameVal,o.frameVal=Math.round(o.frameVal*o.dec)/o.dec,o.printValue(o.frameVal),t<o.duration?o.rAF=requestAnimationFrame(o.count):o.callback&&o.callback()},o.start=function(e){o.initialize()&&(o.callback=e,o.rAF=requestAnimationFrame(o.count))},o.pauseResume=function(){o.paused?(o.paused=!1,delete o.startTime,o.duration=o.remaining,o.startVal=o.frameVal,requestAnimationFrame(o.count)):(o.paused=!0,cancelAnimationFrame(o.rAF))},o.reset=function(){o.paused=!1,delete o.startTime,o.initialized=!1,o.initialize()&&(cancelAnimationFrame(o.rAF),o.printValue(o.startVal))},o.update=function(e){if(o.initialize()){if(!s(e=Number(e)))return void(o.error="[CountUp] update() - new endVal is not a number: "+e);o.error="",e!==o.frameVal&&(cancelAnimationFrame(o.rAF),o.paused=!1,delete o.startTime,o.startVal=o.frameVal,o.endVal=e,o.countDown=o.startVal>o.endVal,o.rAF=requestAnimationFrame(o.count))}},o.initialize()&&o.printValue(o.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},PHNs:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("17x9")),i=n("q1tI"),s=a(i),o=a(n("2W6z")),u=a(n("GiOn"));function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,i=t.easingFn,s=t.end,o=t.formattingFn,l=t.prefix,c=t.separator,p=t.start,m=t.suffix,f=t.useEasing;return new u(e,p,s,a,r,{decimal:n,easingFn:i,formattingFn:o,separator:c,prefix:l,suffix:m,useEasing:f,useGrouping:!!c})},y=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return a=this,r=(e=m(t)).call.apply(e,[this].concat(u)),n=!r||"object"!==typeof r&&"function"!==typeof r?d(a):r,c(d(n),"createInstance",function(){return"function"===typeof n.props.children&&o(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),v(n.containerRef.current,n.props)}),c(d(n),"pauseResume",function(){var e=d(n),t=e.reset,a=e.restart,r=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:a,update:r})}),c(d(n),"reset",function(){var e=d(n),t=e.pauseResume,a=e.restart,r=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:a,update:r})}),c(d(n),"restart",function(){n.reset(),n.start()}),c(d(n),"start",function(){var e=d(n),t=e.pauseResume,a=e.reset,r=e.restart,i=e.update,s=n.props,o=s.delay,u=s.onEnd,l=s.onStart,c=function(){return n.instance.start(function(){return u({pauseResume:t,reset:a,start:r,update:i})})};o>0?n.timeoutId=setTimeout(c,1e3*o):c(),l({pauseResume:t,reset:a,update:i})}),c(d(n),"update",function(e){var t=d(n),a=t.pauseResume,r=t.reset,i=t.restart,s=n.props.onUpdate;n.instance.update(e),s({pauseResume:a,reset:r,start:i})}),c(d(n),"containerRef",s.createRef()),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,i.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,s=t.redraw,o=t.duration,u=t.separator,l=t.decimals,c=t.decimal;return o!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||i!==e.prefix||u!==e.separator||l!==e.decimals||c!==e.decimal||s}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,s=t.duration,o=t.separator,u=t.decimals,l=t.decimal,c=t.preserveValue;s===e.duration&&a===e.start&&r===e.suffix&&i===e.prefix&&o===e.separator&&u===e.decimals&&l===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(c||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,i=this.pauseResume,o=this.reset,u=this.restart,l=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:i,reset:o,start:u,update:l}):s.createElement("span",{className:n,ref:r,style:a})}}])&&l(n.prototype,a),r&&l(n,r),t}();c(y,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),c(y,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var h={innerHTML:null};t.default=y,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},y.defaultProps,{},e),n=t.start,a=t.formattingFn,r=g(i.useState("function"===typeof a?a(n):n),2),s=r[0],o=r[1],u=i.useRef(null),l=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=v(h,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);o(e)},e}();return u.current=n,n},m=function(){var e=t.onReset;l().reset(),e({pauseResume:d,start:f,update:b})},f=function e(){var n=t.onStart,a=t.onEnd;l().reset(),l().start(function(){a({pauseResume:d,reset:m,start:e,update:b})}),n({pauseResume:d,reset:m,update:b})},d=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:m,start:f,update:b})},b=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:d,reset:m,start:f})};return i.useEffect(function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout(function(){n({pauseResume:d,reset:m,update:b}),l().start(function(){clearTimeout(r),a({pauseResume:d,reset:m,start:f,update:b})})},1e3*e);return m},[]),{countUp:s,start:f,pauseResume:d,reset:m,update:b}}},ds1u:function(e,t){e.exports={PricingData:[{title:"Free",features:["Easy Installations","Unlimited support","Free Forever"],price:0},{title:"Silver",features:["Easy Installations","Unlimited support","Free Forever"],price:70},{title:"Golden",features:["Easy Installations","Unlimited support","Free Forever"],price:100},{title:"Silver",features:["Easy Installations","Unlimited support","Free Forever"],price:70}],TestimonialData:[{photo:"/assets/images/event/testimonial/L3-1.png",name:"JHON DENAL",role:"UI DESIGNER",details:"When You Innovate, You Make Mistakes.It Is Best To Admit Them Quickly, & Get On With Improving Your Other Innovations."},{photo:"/assets/images/event/testimonial/L3-1.png",name:"Kolan Motto",role:"CEO, Therat",details:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board."},{photo:"/assets/images/event/testimonial/L3-1.png",name:"Kolan Motto",role:"CEO, Therat",details:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board."}],BlogData:[{photo:"/assets/images/event/blog/1.jpg",title:"Find Great Speaker For Event.",date:"June 19, 2019",user:"Admin",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book "},{photo:"/assets/images/event/blog/2.jpg",title:"Find Great Speaker For Event.",date:"June 19, 2019",user:"Admin",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book "},{photo:"/assets/images/event/blog/3.jpg",title:"Find Great Speaker For Event.",date:"June 19, 2019",user:"Admin",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book "},{photo:"/assets/images/event/blog/2.jpg",title:"Find Great Speaker For Event.",date:"June 19, 2019",user:"Admin",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book "}],CounterData:[{img:"/assets/images/event/counter/1.png",count:14,desc:"Total Topics"},{img:"/assets/images/event/counter/2.png",count:8,desc:"Total Speaker"},{img:"/assets/images/event/counter/3.png",count:542,desc:"Total Event"},{img:"/assets/images/event/counter/4.png",count:14152,desc:"Total Attendance"}],AllImgData:[{img:"/assets/images/event/gallery/1.jpg"},{img:"/assets/images/event/gallery/2.jpg"},{img:"/assets/images/event/gallery/3.jpg"},{img:"/assets/images/event/gallery/2.jpg"},{img:"/assets/images/event/gallery/1.jpg"}],UsZoneData:[{img:"/assets/images/event/gallery/3.jpg"},{img:"/assets/images/event/gallery/2.jpg"},{img:"/assets/images/event/gallery/1.jpg"}],AnnualData:[{img:"/assets/images/event/gallery/2.jpg"}],VisitData:[{img:"/assets/images/event/gallery/1.jpg"},{img:"/assets/images/event/gallery/2.jpg"}]}}},[["78Z9",0,1]]]);