(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{"7Fy1":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/agency/banner",function(){return n("XP2h")}])},XP2h:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=n("YFiP"),l=n("1Yj4"),o=n("ok1R"),s=n("rhny"),p=r.a.createElement;t.default=function(){return p("section",{className:"agency header",id:"header"},p("div",{className:"agency bg"},p(l.a,null,p(o.a,null,p(s.a,{md:"6"},p("div",{className:"center-text"},p("div",null,p("div",{className:"header-text"},p("h1",{className:"text-uppercase"},p("span",{className:"bold-text"},"Digital")," Agency")),p("div",{className:"header-sub-text"},p("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")),p("div",{className:"link-horizontal"},p("ul",null,p("li",null,p("a",{className:" btn btn-default btn-gradient"},"request a quote")),p("li",null,p("a",{className:"btn btn-default btn-gradient text-white active"},"start now")))))))))),p("div",{className:"set-abs abs-horizon-center girl-boy"},p(a.a,{perspective:"20000",transitionSpeed:"3000"},p("img",{alt:"",className:"img-fluid",src:"/assets/images/agency/slider/img.png"})),p("div",{className:"plus-container plus-container6"},p("div",{className:"plus white"})),p("div",{className:"plus-container plus-container7"},p("div",{className:"plus white"})),p("div",{className:"plus-container plus-container8"},p("div",{className:"plus white"})),p("div",{className:"circle-container"},p("div",{className:"gradient-circle-big"})),p("div",{className:"circle-container small"},p("div",{className:"gradient-circle-small"}))),p("div",{className:"plus-container"},p("div",{className:"plus"})),p("div",{className:"plus-container plus-container2"},p("div",{className:"plus plus-medium"})),p("div",{className:"plus-container plus-container3"},p("div",{className:"plus plus-small"})),p("div",{className:"plus-container plus-container4"},p("div",{className:"plus plus-small"})),p("div",{className:"plus-container plus-container5"},p("div",{className:"plus plus-medium"})))}},YFiP:function(e,t,n){"use strict";var i=n("q1tI"),r=n.n(i),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},l=function(){return(l=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var o=l(l({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,n,i,r){return void 0===r&&(r=null),r&&clearTimeout(r),e.style.transition=t+" "+n+"ms "+i,setTimeout(function(){e.style.transition=""},n)}function p(e,t,n){return Math.min(Math.max(e,t),n)}var c=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,n){e.updateTilt(t,n),e.updateTiltManualInput(t,n),e.updateTiltReverse(n),e.updateTiltLimits(n)},this.updateTilt=function(t,n){var i=t.yPercentage,r=n.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*n.tiltMaxAngleX/100,e.tiltAngleY=i*r/100*-1},this.updateTiltManualInput=function(t,n){var i=n.tiltAngleXManual,r=n.tiltAngleYManual,a=n.tiltMaxAngleX,l=n.tiltMaxAngleY;null===i&&null===r||(e.tiltAngleX=null!==i?i:0,e.tiltAngleY=null!==r?r:0,t.xPercentage=100*e.tiltAngleX/a,t.yPercentage=100*e.tiltAngleY/l)},this.updateTiltReverse=function(t){var n=t.tiltReverse?-1:1;e.tiltAngleX=n*e.tiltAngleX,e.tiltAngleY=n*e.tiltAngleY},this.updateTiltLimits=function(t){var n=t.tiltAxis;e.tiltAngleX=p(e.tiltAngleX,-90,90),e.tiltAngleY=p(e.tiltAngleY,-90,90),n&&(e.tiltAngleX="x"===n?e.tiltAngleX:0,e.tiltAngleY="y"===n?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var n=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/n*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},u=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){var t=e.height,n=Math.sqrt(Math.pow(e.width,2)+Math.pow(t,2));return{width:n,height:n}},this.setSize=function(e){var n=t.calculateGlareSize(e);t.glareEl.style.width=n.width+"px",t.glareEl.style.height=n.height+"px"},this.update=function(e,n,i,r){t.updateAngle(e,n.glareReverse),t.updateOpacity(e,n,i,r)},this.updateAngle=function(e,n){var i=e.xPercentage,r=180/Math.PI,a=i?Math.atan2(e.yPercentage,-i)*r:0;t.glareAngle=a-(n?180:0)},this.updateOpacity=function(e,n,i,r){var a,l=e.xPercentage,o=e.yPercentage,s=n.glareReverse,c=n.glareMaxOpacity,u=i?-1:1,d=r?-1:1;switch(n.glarePosition){case"top":a=-l*u;break;case"right":a=o*d;break;case"bottom":a=l*u;break;case"left":a=-o*d;break;case"all":a=Math.hypot(l,o);break;default:a=l*u}var g=p(a=s?-a:a,0,100);t.glareOpacity=g*c/100},this.render=function(e){var n=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+n+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var n=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:n.width+"px",height:n.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,i)},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.addDeviceOrientationEventListener=function(){return function(e,t,n,i){return new(n||(n=Promise))(function(r,a){function l(e){try{s(i.next(e))}catch(e){a(e)}}function o(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(l,o)}s((i=i.apply(e,t||[])).next())})}(t,void 0,void 0,function(){var e;return function(e,t){var n,i,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,i=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!((r=(r=l.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){l.label=a[1];break}if(6===a[0]&&l.label<r[1]){l.label=r[1],r=a;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(a);break}r[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,function(t){switch(t.label){case 0:if(!window.DeviceOrientationEvent)return[2];if("function"!=typeof DeviceMotionEvent.requestPermission)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,DeviceOrientationEvent.requestPermission()];case 2:return"granted"===t.sent()&&window.addEventListener("deviceorientation",this.onMove),[2];case 3:return e=t.sent(),console.error(e),[2];case 4:return window.addEventListener("deviceorientation",this.onMove),[2]}})})},t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach(function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)}):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var n=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),n&&n(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var n=t.props.onLeave;if(t.setTransition(),n&&n(e.type),t.props.reset){var i=new CustomEvent("autoreset");t.onMove(i)}},t.processInput=function(e){var n=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=n;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=n;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=n;break;case"autoreset":var i=t.props,r=i.tiltAngleYInitial/i.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=p(i.tiltAngleXInitial/i.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=p(r,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var n=t.props,i=n.tiltMaxAngleY,r=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/n.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=r/i*100,t.wrapperEl.clientPosition.xPercentage=p(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=p(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var n=t.props,i=n.tiltEnable,r=n.flipVertically,a=n.flipHorizontally;t.updateClientInput(e),i&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,r,a)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var n,i;if(t.props.trackOnWindow){var r=t.wrapperEl.clientPosition,a=r.x;n=r.y/window.innerHeight*200-100,i=a/window.innerWidth*200-100}else{var l=t.wrapperEl,o=l.size,s=l.clientPosition;n=(s.y-o.top)/o.height*200-100,i=((a=s.x)-o.left)/o.width*200-100}t.wrapperEl.clientPosition.xPercentage=p(n,-100,100),t.wrapperEl.clientPosition.yPercentage=p(i,-100,100)}},t.updateFlip=function(){var e=t.props,n=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),n&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new c,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new u(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var n=0,i=0;this.glare&&(n=this.glare.glareAngle,i=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,n,i,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,n=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,n,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,n,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return r.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=o,t}(i.PureComponent);t.a=d}},[["7Fy1",0,1]]]);