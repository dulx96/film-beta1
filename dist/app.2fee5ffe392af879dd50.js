webpackJsonp([0],{"0teF":function(e,t){e.exports={wrap:"_2Zn6O-wg4nXSilSBK9OswB",container:"_1MZQPGDp1eus-xqQFrcNNF"}},"29pa":function(e,t,n){"use strict";(function(e){function n(){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t=e.env.PUBLIC_URL+"/service-worker.js";o?(r(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):a(t)})}}function a(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function r(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):a(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}t.a=n;var o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}).call(t,n("W2nU"))},"47kk":function(e,t){},"66Z6":function(e,t){e.exports={wrap:"EDrvrUSbizAfZDdkSS82","sb-wd-scr-active":"_3Jdn1_WRQQ_HVjWKmzx6Hp"}},"8g3j":function(e,t){e.exports={wrap:"_2TF1konEE76xHHpVEmCs7i"}},DzUV:function(e,t){e.exports={wrap:"_2PdbVIULmhGg7ZNj95xnQd"}},F63P:function(e,t){e.exports={wrap:"awNRTDWiLeLLl7Wh7CTta",content:"_35bLC9WRDzUPC7tVuteZUI","search-bar":"_1rIqY_M55zBRPaqAsOT2ho",menu:"_3utv71jZqHf6dmUQ3U_FCm",active:"_6fnfY8lkNU_YQccAERwDD",avatar:"_2bqlhNrii7OFJgHgVwimd2","avatar-onload":"_1_tOR8521la7Xpch3nY13n","board-inactive":"_27lTdYm4zS-1SgEzw5lcTS","board-active":"_2nDuJC6kYCETWf0haqWGtK",animatedbordergradient:"GQoSCc4LEq7QYGIfvPxfO"}},PUek:function(e,t){e.exports={wrap:"_2ayawcO0QjmdfhbEcKiGyS",content:"ChW6-0uFNUEu3MvFH4vgr",image:"_29Tfs5X_1jper6chHXEVaf",info:"_3gRtmddH9iFPgq4X_cyvSB",star:"_2dt-j61MtFlcLdN6f-DuIe",details:"_1sbS2_eELL7fnfWaawyR36",sub:"dvlKZGAevdiGCD4JZBj-2",options:"LVBD0MN8wDVU3aGldGpWR"}},Pldg:function(e,t){e.exports={wrap:"_16bZqYHCH-2ajjH4ma2Ikd",active:"FD4U0_CFc4bVazivqaVRU",container:"gOtuOlbDRFbUrCZUeRdsO","sb-wd-active":"_4S7ikdkWrAfIGzumNuji2"}},Slje:function(e,t){e.exports={wrap:"LT9eO5YiAbtSokme2R29i",content:"_84tbxvorKy2DR8yI1PCOe",scroll:"ZVgFnE9M_E4wqqoLz61D_"}},"Ue/Q":function(e,t){},bXme:function(e,t){e.exports={wrap:"_3HmhLEfNOqL3Xku0pDnBaq",player:"_3Jz4f4uzfP4V-OZex0RJBz"}},cilB:function(e,t){},lGYb:function(e,t){e.exports={wrap:"FF9k8E5cAOKWUt92YgFfB","sub-content":"_2WGcwCpHfWd4fW4-7bSxKR","sub-item":"_2phM8ZAVW1NUipdVcSASZP"}},lVK7:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var T=n("GiK3"),R=n.n(T),N=(n("cilB"),n("F8kA")),B=n("RH2O"),x=function(e){return{type:"FETCH_USER_SUCCESS",user:e}},U={ava:"/ava/thoa.jpg"},D=function(){return function(e){e(x(U))}},W=n("Ol7m"),L=function(e){return{type:"TOGGLE_SIDEBAR",screenWidth:e}},V=n("KSGD"),M=n.n(V),H=n("9R3h"),G=n("SUcq"),F=function(e){var t=e.size;return R.a.createElement(H.Icon,{size:t,icon:G.iosSearchStrong})},J=n("v2hi"),z=n.n(J),Z="http://cdn.ekiio.com",K=n("F63P"),Y=function(e){var t=e.userReducer,n=t.user,a=t.fetchUserSuccess,r=e.homeBoardIsActive,o=e.toggleSideBar,c=e.windowWidth;return R.a.createElement("div",{className:K.wrap},R.a.createElement("div",{className:K.content},r&&R.a.createElement("div",{onClick:function(){return o(c)}},"toggle"),R.a.createElement("div",{style:{flex:.5}}),R.a.createElement("div",{className:K["search-bar"]},R.a.createElement(F,{size:25})),R.a.createElement("div",{style:{flex:1}}),R.a.createElement("div",{className:K.menu},R.a.createElement("p",{className:K.active},"Home"),R.a.createElement("p",null,"News"),R.a.createElement("p",null,"Contact"),R.a.createElement("p",null,"Help"),R.a.createElement("p",null,"Info")),R.a.createElement("div",{className:a?K.avatar:K["avatar-onload"],style:a?{backgroundImage:"url("+(Z+n.ava)+")"}:{}})))};Y.propTypes={userReducer:M.a.object,homeBoardIsActive:M.a.bool,toggleSideBar:M.a.func,windowWidth:M.a.number};var q=z()(Y),X=function(e){return{userReducer:e.userReducer,homeBoardIsActive:e.homeBoardReducer.homeBoardIsActive}},Q=function(e){return Object(W.bindActionCreators)({toggleSideBar:L},e)},$=Object(B.b)(X,Q)(q),ee=function(){return{type:"TOGGLE_HOME_BOARD"}},te=[{imageId:"/images/slide11.jpg",title:"The Return Of Night Fury",views:1e3,details:"It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong",sub:["VI","EN"]},{imageId:"/images/slide12.jpg",title:"Attack on Titan",views:2e3,details:"It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong",sub:["VI","EN","JA"]},{imageId:"/images/slide13.jpg",title:"Conan the Pigs",views:3e3,details:"It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong",sub:["VI","EN"]},{imageId:"/images/slide14.jpg",title:"The Return Of Night Fury",views:1e3,details:"It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong",sub:["VI","EN","JA"]},{imageId:"/images/slide15.jpg",title:"Beautiful Life",views:5e3,details:"It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong",sub:["VI","JA"]}],ne=function(e){return{type:"GET_CAROUSEL_SUCCESS",data:e}},ae=function(){return function(e){e(ne(te))}},re=n("Ox9d"),oe=n.n(re),ce=n("PUek"),ie=function(e){return R.a.createElement("div",{className:ce.wrap},R.a.createElement("div",{className:ce.content},R.a.createElement("div",{className:ce.image,style:{backgroundImage:"url("+(Z+e.imageId)+")"}},R.a.createElement("a",null)),R.a.createElement("div",{className:ce.info},R.a.createElement("h2",null,e.title),R.a.createElement("div",{className:ce.star},R.a.createElement(oe.a,{size:20}),R.a.createElement(oe.a,{size:20}),R.a.createElement(oe.a,{size:20}),R.a.createElement(oe.a,{size:20}),R.a.createElement(oe.a,{size:20}),R.a.createElement("p",null,e.views," Views")),R.a.createElement("p",{className:ce.details},e.details),R.a.createElement("div",{style:{flex:1}}),R.a.createElement("div",{className:ce.sub},R.a.createElement("h3",null,"Subtitle:"),e.sub.map(function(e,t){return R.a.createElement("i",{key:t}," ",e," ")})),R.a.createElement("div",{className:ce.options},R.a.createElement("a",null,"Details"),R.a.createElement("a",null,"Play")))))};ie.propTypes={imageId:M.a.string,title:M.a.string,star:M.a.number,views:M.a.number,details:M.a.string,sub:M.a.array};var le=ie,se=n("DzUV"),ue=function(){return R.a.createElement("div",{className:se.wrap})},fe=ue,pe=n("qmfj"),me=n.n(pe),he=n("Slje"),de=(n("47kk"),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),be=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),de(t,[{key:"componentWillMount",value:function(){this.props.getHomeCarousel()}},{key:"render",value:function(){var e=this,t=this.props.windowWidth,n=0;t>1600?n="350px":t>1440?n="280px":t>1276?n="200px":t>1024?n="140px":t>960&&(n="100px");var a={className:"center",centerMode:!0,infinite:!0,centerPadding:n,arrows:!1,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:6e3,speed:500},r=this.props.data;return R.a.createElement("div",{className:he.wrap,style:{backgroundImage:"url("+Z+"/images/1.jpg)"},onWheel:function(){return!e.props.homeBoardIsActive&&e.props.toggleHomeBoard()}},R.a.createElement("div",{className:he.content},R.a.createElement(me.a,a,r.map(function(e,t){return R.a.createElement(le,Object.assign({key:t},e))}))),R.a.createElement("span",{className:he.scroll,onClick:function(){return e.props.toggleHomeBoard()}}))}}]),t}(T.Component),we=z()(be),ve=function(e){var t=e.homeCarouselReducer,n=t.data,a=t.getHomeCarouselSuccess,r=e.homeBoardReducer.homeBoardIsActive;return{data:a?n:[],homeBoardIsActive:r}},Ee=function(e){return Object(W.bindActionCreators)({getHomeCarousel:ae,toggleHomeBoard:ee},e)},ye=Object(B.b)(ve,Ee)(we),ge=n("0teF"),_e=function(){return R.a.createElement("div",{className:ge.container},R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect")," ",R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect")," ",R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect")," ",R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"),R.a.createElement("a",null,"that was perfect"))},Oe=_e,Se=n("HW6M"),je=n.n(Se),ke=n("uAZy"),Ae=function(e){var t,n=e.isVisible;return R.a.createElement("div",{className:je()((t={},c(t,ke["sb-wd-scr"],!0),c(t,ke.active,n),t))},R.a.createElement(Oe,null))};Ae.propTypes={isVisible:M.a.bool};var Ie=Ae,Pe=function(e){var t,n=e.isVisible,a=e.toggleSideBar;return R.a.createElement("div",{className:je()((t={},i(t,ke["sb-sm-scr"],!0),i(t,ke.active,n),t))},R.a.createElement("div",{className:ke.header},R.a.createElement("span",null,"Toggle")),R.a.createElement(Oe,null),n&&R.a.createElement("div",{className:ke["blur-content"],onClick:function(){return a(0)}}))};Pe.propTypes={isVisible:M.a.bool,toggleSideBar:M.a.func};var Ce=Pe,Te=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Re=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),Te(t,[{key:"shouldComponentUpdate",value:function(e){return e.sb_wd_scrIsActive!==this.props.sb_wd_scrIsActive||e.sb_sml_scrIsActive!==this.props.sb_sml_scrIsActive||(e.windowWidth-1276)*(1276-this.props.windowWidth)>0}},{key:"componentWillReceiveProps",value:function(e){e.windowWidth!==this.props.windowWidth&&e.windowWidth>1276&&this.props.windowWidth<1276&&this.props.sb_sml_scrIsActive&&this.props.toggleSideBar(0)}},{key:"render",value:function(){return this.props.windowWidth>1276?R.a.createElement(Ie,{isVisible:this.props.sb_wd_scrIsActive}):R.a.createElement(Ce,{isVisible:this.props.sb_sml_scrIsActive,toggleSideBar:this.props.toggleSideBar})}}]),t}(R.a.Component),Ne=Re,Be=function(e){var t=e.sideBarReducer,n=t.sb_sml_scrIsActive;return{sb_wd_scrIsActive:t.sb_wd_scrIsActive,sb_sml_scrIsActive:n}},xe=function(e){return Object(W.bindActionCreators)({toggleSideBar:L},e)},Ue=Object(B.b)(Be,xe)(Ne),De=n("8g3j"),We=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Le=function(e){function t(){return f(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),We(t,[{key:"render",value:function(){return R.a.createElement("div",{className:De.wrap},R.a.createElement(fe,null),R.a.createElement(fe,null),R.a.createElement(fe,null),R.a.createElement(fe,null),R.a.createElement(fe,null),R.a.createElement(fe,null))}}]),t}(R.a.Component);Le.propTypes={};var Ve=Le,Me=n("66Z6"),He=function(e){var t,n=e.sb_wd_scrIsActive;return R.a.createElement("div",{className:je()((t={},h(t,Me.wrap,!0),h(t,Me["sb-wd-scr-active"],n),t))},R.a.createElement(Ve,null),R.a.createElement(Ve,null),R.a.createElement(Ve,null),R.a.createElement(Ve,null),R.a.createElement(Ve,null))};He.propTypes={sb_wd_scrIsActive:M.a.bool};var Ge=He,Fe=Ge,Je=n("g/Kx"),ze=n.n(Je),Ze=n("Pldg"),Ke=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Ye=function(e){function t(e){b(this,t);var n=w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={scrollTop:0},n.handleContainerScroll=function(){n.setState({scrollTop:n.container.scrollTop})},ze.a.config({left:function(){},right:function(){},up:function(){},down:function(){0===n.state.scrollTop&&n.props.toggleHomeBoard()}}),n}return v(t,e),Ke(t,[{key:"componentDidMount",value:function(){this.container.addEventListener("scroll",this.handleContainerScroll)}},{key:"render",value:function(){var e,t,n=this;return R.a.createElement("div",{className:je()((e={},d(e,Ze.wrap,!0),d(e,Ze.active,this.props.homeBoardIsActive),e))},R.a.createElement(Ue,{windowWidth:this.props.windowWidth}),R.a.createElement("div",Object.assign({className:je()((t={},d(t,Ze.container,!0),d(t,Ze["sb-wd-active"],this.props.sb_wd_scrIsActive&&this.props.windowWidth>1276),t)),ref:function(e){return n.container=e}},ze.a.events),R.a.createElement(Fe,{sb_wd_scrIsActive:this.props.sb_wd_scrIsActive&&this.props.windowWidth>1276})))}}]),t}(R.a.Component);Ye.propTypes={homeBoardIsActive:M.a.bool,sb_wd_scrIsActive:M.a.bool};var qe=z()(Ye),Xe=function(e){return{homeBoardIsActive:e.homeBoardReducer.homeBoardIsActive,sb_wd_scrIsActive:e.sideBarReducer.sb_wd_scrIsActive}},Qe=function(e){return Object(W.bindActionCreators)({toggleHomeBoard:ee},e)},$e=Object(B.b)(Xe,Qe)(qe),et=n("yhak"),tt=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),nt=function(e){function t(){return E(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),tt(t,[{key:"render",value:function(){return R.a.createElement("div",{className:et.wrap},R.a.createElement(ye,null),R.a.createElement($e,null))}}]),t}(R.a.Component);nt.propTypes={toggleHomeBoard:M.a.func};var at=nt,rt=function(e){return Object(W.bindActionCreators)({toggleHomeBoard:ee},e)},ot=Object(B.b)(void 0,rt)(at),ct=(n("TfGK"),n("lGYb")),it=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),lt=function(e){function t(e){_(this,t);var n=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isLoading:!0,isScrolling:!1,subs:[]},n.subBar=R.a.createRef(),n.handleScroll=n.handleScroll.bind(n),n}return S(t,e),it(t,[{key:"handleScroll",value:function(){var e=this;this.setState({isScrolling:!0}),clearTimeout(this.controlScrollTimer),this.controlScrollTimer=setTimeout(function(){e.setState({isScrolling:!1})},3e3)}},{key:"render",value:function(){return R.a.createElement("div",{className:ct.wrap,onScroll:this.handleScroll},this.props.isLoading?R.a.createElement("div",null," loading sub"):R.a.createElement("div",{ref:this.subBar,className:ct["sub-content"]},R.a.createElement(ut,{subs:this.state.subs,seek:this.props.seek})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return!e.isLoading&&t.isLoading?{isLoading:!1,subs:e.subs}:null}}]),t}(R.a.Component),st=lt,ut=function(e){function t(){return _(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,e),it(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){var e=this,t=this.props.subs.map(function(t,n){return R.a.createElement("div",{key:n,onClick:e.props.seek(t.startTime/1e3),className:ct["sub-item"]}," ",t.text," ")});return R.a.createElement("div",null,t)}}]),t}(R.a.Component),ft=st,pt=n("dFF1"),mt=n("R6Am"),ht=n.n(mt),dt=(n("MMV+"),n("bXme")),bt=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),wt=function(e){function t(e){j(this,t);var n=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={subs:null,currentSubIndex:-1,subJALoading:!0},n.player=R.a.createRef(),n.seek=n.seek.bind(n),n}return A(t,e),bt(t,[{key:"componentDidMount",value:function(){this.props.getMoviePlayData()}},{key:"componentDidUpdate",value:function(e,t){var n=this;!e.getMoviePlayDataSuccess&&this.props.getMoviePlayDataSuccess&&(this.player.current.subscribeToStateChange(this.handleStateChange.bind(this)),t.subJALoading&&(console.log(Z+this.props.moviePlayData.JASubSrc),fetch(Z+this.props.moviePlayData.JASubSrc).then(function(e){return e.text()}).then(function(e){n.setState({subs:{JA:ht.a.fromSrt(e,!0)},subJALoading:!1})})))}},{key:"handleStateChange",value:function(e,t){var n=this.state,a=n.subs,r=n.currentSubIndex,o=n.subJALoading,c=-1;o||e.currentTime===t.currentTime||(c=a.JA.slice(0,a.JA.length-1).findIndex(function(t){return t.startTime/1e3<=e.currentTime&&t.endTime/1e3>=e.currentTime})),c!==r&&this.setState({currentSubIndex:c})}},{key:"seek",value:function(e){var t=this;return function(){t.player.current.seek(e)}}},{key:"render",value:function(){var e=this.props.getMoviePlayDataSuccess,t=this.props.moviePlayData;return e?R.a.createElement("div",{className:dt.wrap},R.a.createElement("div",{className:dt.player},R.a.createElement(pt.Player,{autoPlay:!0,ref:this.player,src:{en:t.OriVideoSrc,vi:t.ViVideoSrc}})),R.a.createElement(ft,{subs:this.state.subJALoading?[]:this.state.subs.JA,isLoading:this.state.subJALoading,seek:this.seek,currentSubIndex:this.state.currentSubIndex})):R.a.createElement("div",null,"loading")}}]),t}(R.a.Component),vt=wt;wt.propTypes={getMoviePlayDataSuccess:M.a.bool,moviePlayData:M.a.object};var Et={title:"sontung-mtp",eps:"1",espSum:"21",OriVideoSrc:"https://lh3.googleusercontent.com/tYNW7gMpV5V0W87iogLKDhJXySzUNanWaH8d_EZhRps3EuyLFdV9cQxaCeOOPnNjtvksbjyEnNEMvG-3mWHI_P3vfLqU5X5ysIlAuSOd7lEvZGKtkknsEGRYGJMF3OSjZF-cQfbW=w600-h315-k-no-m18",ViVideoSrc:"https://lh3.googleusercontent.com/kMCqKzdGU_McxkYrkYuwJw3pa_Cz-kluTxtx4kqUQfj6V9klTjTXry70U3mPjjAG4KWWlz9SK1ACSOLcVA=m22",JASubSrc:"/sub/text.txt"},yt=function(e){return{type:"GET_MOVIE_PLAY_DATA_SUCCESS",data:e}},gt=function(e){return function(e){return e(yt(Et))}},_t=function(e){var t=e.movieReducer;return{getMoviePlayDataSuccess:t.getMoviePlayDataSuccess,moviePlayData:t.moviePlayData}},Ot=function(e){return Object(W.bindActionCreators)({getMoviePlayData:gt},e)},St=Object(B.b)(_t,Ot)(vt),jt=(n("Ue/Q"),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),kt=function(e){function t(){return I(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,e),jt(t,[{key:"componentWillMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return R.a.createElement(N.a,null,R.a.createElement("div",null,R.a.createElement($,null),R.a.createElement(N.b,{exact:!0,path:"/",component:ot}),R.a.createElement(N.b,{path:"/movie/play",component:St})))}}]),t}(T.Component),At=function(e){return{fetchUserSuccess:e.userReducer.fetchUserSuccess}},It=function(e){return{fetchUser:function(){return e(D())}}},Pt=Object(B.b)(At,It)(kt),Ct=n("O27J"),Tt=n("bEzl"),Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetchUserSuccess:!1},t=arguments[1];switch(t.type){case"FETCH_USER_SUCCESS":return Object.assign({},e,{user:t.user,fetchUserSuccess:!0});default:return e}},Nt=Rt,Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"GET_CAROUSEL_SUCCESS":return Object.assign({},e,{data:t.data,getHomeCarouselSuccess:!0});default:return e}},xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{homeBoardIsActive:!1};switch(arguments[1].type){case"TOGGLE_HOME_BOARD":return Object.assign({},e,{homeBoardIsActive:!e.homeBoardIsActive});default:return e}},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sb_sml_scrIsActive:!1,sb_wd_scrIsActive:!0},t=arguments[1];switch(t.type){case"TOGGLE_SIDEBAR":var n=e.sb_wd_scrIsActive,a=e.sb_sml_scrIsActive;return t.screenWidth>1276?n=!n:a=!a,Object.assign({},e,{sb_wd_scrIsActive:n,sb_sml_scrIsActive:a});default:return e}},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getMoviePlayDataSuccess:!1},t=arguments[1];switch(t.type){case"GET_MOVIE_PLAY_DATA_SUCCESS":return Object.assign({},e,{getMoviePlayDataSuccess:!0,moviePlayData:t.data});default:return e}},Wt=Object(W.combineReducers)({userReducer:Nt,homeCarouselReducer:Bt,homeBoardReducer:xt,sideBarReducer:Ut,movieReducer:Dt}),Lt=n("29pa"),Vt=(n("uMhA"),n("01M/"));n.n(Vt).a.load({google:{families:["Roboto Condensed:400, 700","sans-serif"]}});var Mt=Object(W.createStore)(Wt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(W.applyMiddleware)(Tt.a)),Ht=document.getElementById("root");Object(Ct.render)(R.a.createElement(B.a,{store:Mt},R.a.createElement(Pt,null)),Ht),Object(Lt.a)()},uAZy:function(e,t){e.exports={"sb-common":"_1y32WqxB8zpWoYcaxxDmwr",active:"_3XMLh99JmpahSI1lO3T6fh","sb-wd-scr":"_31PpEWCFRFYvHwUc8N8Zob","sb-sm-scr":"_2_f55ZenKUpvH2FmOjp5t-",header:"_1M7Ku0EhAAL2xsX9Emb57x","blur-content":"_2jpPd03mSVLJ-fFY1iEPVC"}},yhak:function(e,t){e.exports={wrap:"_3xMgLkw21d3Ti9ABOS3GBZ"}}},["lVK7"]);