(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[691],{4665:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(7294),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function a(e){return c(e)||u(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function u(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function c(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var f=n(1),p=n.n(f),d="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,m=Object(f.forwardRef)((function(e,t){var n=Object(f.useRef)(),o=Object(f.useRef)();return d((function(){function t(){var t=e.highcharts||"object"===("undefined"==typeof window?"undefined":s(window))&&window.Highcharts,r=e.constructorType||"chart";t?t[r]?e.options?o.current=t[r](n.current,e.options,e.callback?e.callback:void 0):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(o.current){if(!1!==e.allowChartUpdate)if(!e.immutable&&o.current){var r;(r=o.current).update.apply(r,[e.options].concat(a(e.updateArgs||[!0,!0])))}else t()}else t()})),d((function(){return function(){o.current&&(o.current.destroy(),o.current=null)}}),[]),Object(f.useImperativeHandle)(t,(function(){return{get chart(){return o.current},container:n}}),[]),p.a.createElement("div",r({},e.containerProps,{ref:n}))}));t.default=Object(f.memo)(m)},function(e,t){e.exports=r}]))},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},3188:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $e}});var r=n(7294),a=n(3047),o=n(1063);function i(e,t,n){var r=e.find((function(e){return e.key===t}));r?r.value+=n:e.push({key:t,value:n})}function u(e){return void 0===e&&(e=""),console.debug("Fetch users now data"),fetch("/data/users-now.json?v="+e).then((function(e){return e.json()})).then((function(e){return i(e.list,"US",33),i(e.list,"DE",24),i(e.list,"FR",23),i(e.list,"GB",21),i(e.list,"TR",19),i(e.list,"CA",18),i(e.list,"PL",16),i(e.list,"ES",15),i(e.list,"BR",12),i(e.list,"AU",5),e.list.sort((function(e,t){return"other"===e.key?1:"other"===t.key?-1:t.value-e.value})),e})).catch((function(e){return console.error(e),{cardinality:0,list:[]}}))}var c=null,l=null;function s(){var e=new Date;return""+e.getFullYear()+e.getMonth()+e.getDate()+e.getHours()+e.getMinutes()+e.getTimezoneOffset()}var f=function(){var e=(0,o.mr)().dispatch;return r.useEffect((function(){if(null===c){var t=s();l=t,u(t).then((function(t){return e({type:"UsersNowDataLoaded",payload:{data:t}})})),c=setInterval((function(){var t=s();l!==t&&(l=t,u(t).then((function(t){return e({type:"UsersNowDataLoaded",payload:{data:t}})})))}),2e3)}}),[]),null},p=function(){return r.createElement("div",{className:"top-banner-module--container--AUM7q"},r.createElement("p",null,"By just staying on this website you are showing your support for Ukraine and raising funds to help rebuild the country"))},d=n(4138),m=n(207);var y={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",CV:"Cabo Verde",KH:"Cambodia",CM:"Cameroon",CA:"Canada",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CD:"Democratic Congo",CG:"Congo",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czechia",CI:"Côte d'Ivoire",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Malvinas",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard and McDonald Islands",VA:"Holy See",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",MK:"Republic of North Macedonia",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",RE:"Réunion",BL:"Saint Barthélemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands (British)",VI:"Virgin Islands (U.S.)",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe",AX:"Åland Islands",other:"Other"},h=n(8819),g=function(e){var t=e.items;return r.createElement("div",{className:"country-list-module--container--wGWss"},t.map((function(e){return r.createElement("div",{key:e.country,className:"country-list-module--item--GOTuK"},r.createElement("img",{src:(t=e.country,"/images/countries/"+t.toUpperCase()+".svg")}),r.createElement("div",null,y[e.country]),r.createElement("div",{className:"country-list-module--counter--kg6Rc"},(0,h.formatNumber)(e.supporters)));var t})))},b=r.memo((function(){var e=r.useRef(null);r.useEffect((function(){if(e.current){var t,n=document.createElement("script");n.src="https://live.primis.tech/live/liveView.php?s=110394",n.type="text/javascript",null===(t=e.current)||void 0===t||t.appendChild(n)}}),[]);var t="primis-main-page-video-ad-slot";return r.createElement("div",{id:t,key:t,ref:e,className:"video-ad-slot-module--container--6IHdI"})})),v=function(){var e=(0,o.mr)().dispatch;return r.createElement("div",{className:"footer-module--container--wjHmS"},r.createElement("div",{className:"footer-module--footer-menu--zOtPF"},r.createElement("a",{onClick:function(){return e({type:"OpenModal",payload:{type:"about"}})}},"About"),r.createElement("a",{onClick:function(){return e({type:"OpenModal",payload:{type:"about",props:{defaultSlug:"Option4"}}})}},"Why Ads?"),r.createElement("a",{href:"mailto:gamers.withukraine@gmail.com"},"Contact")),r.createElement("div",{className:"footer-module--copyright--Bg9Rz"},r.createElement("p",null,"Stop War in Ukraine!")))},w=function(){var e=(0,o.mr)().state.usersNow,t=(null==e?void 0:e.list.map((function(e){return{country:e.key,supporters:e.value}})))||[];return r.createElement("div",{className:"sidebar-module--container--OOEDY"},r.createElement(g,{items:t}),r.createElement(b,null),r.createElement(v,null))},E=n(2197);function T(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=T(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function S(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=T(e))&&(r&&(r+=" "),r+=t);return r}var A,C,O,M,k=n(8037),N="news-module--news-feed--1m9pw",I=n(4826),P=function(e){var t=e.timelineUrl;return r.createElement(I.kV,{sourceType:"url",url:t,autoHeight:!0,noHeader:!0,noFooter:!0,noScrollbar:!0,theme:"dark",borderColor:"#18181b",placeholder:"Loading Twitter Timeline..."})},L=function(e){var t=e.id;return r.createElement(I.kV,{sourceType:"list",id:t,autoHeight:!0,noHeader:!0,noFooter:!0,noScrollbar:!0,theme:"dark",borderColor:"#18181b",placeholder:"Loading Twitter Timeline..."})},j=function(){return r.createElement("div",{className:"news-module--container--n8FrR"},r.createElement("div",{className:S(N,"news-module--feed1--MZyrN")},r.createElement("h3",null,"Ukraine News ",r.createElement(k.ZP,{to:"https://twitter.com/With__Ukraine",target:"_blank"},"by @With__Ukraine")),r.createElement(P,{timelineUrl:"https://twitter.com/With__Ukraine"})),r.createElement("div",{className:S(N,"news-module--feed2--gl3Ey")},r.createElement("h3",null,"World News ",r.createElement(k.ZP,{to:"https://twitter.com/i/events/1483255084750282753",target:"_blank"},"by CNN")),r.createElement(L,{id:"1500675497637793798"})))},B=n(300),R=n(1777),G=n(4665),U=n.n(G),x=n(4149),D=function(e){var t=e.data,n=e.highchartsProps,a={title:{text:""},chart:{backgroundColor:"none",height:"575px"},legend:{enabled:!1},series:[{type:"map",mapData:x,data:t,tooltip:{headerFormat:""}}],colorAxis:{min:0,gridLineColor:"#18181B",stops:[[0,"#81A7EE"],[.2,"#5D8EE9"],[.4,"#4B82E7"],[.6,"#3A75E4"],[.8,"#2869E2"],[1,"#1D5ED7"]]}};return r.createElement(U(),Object.assign({highcharts:R,options:a,constructorType:"mapChart"},n))},H=function(e){var t=(0,o.mr)().state.usersNow,n=(null==t?void 0:t.list.map((function(e){return[e.key.toLowerCase(),e.value]})))||[];return r.createElement(D,{data:n,highchartsProps:e})},F=function(e){var t=e.logo;return r.createElement("div",{className:"supporter-logos-module--container--Vo4U0"},t.map((function(e){return r.createElement("img",{key:e.image,src:e.image,alt:e.alt})})))},_=function(){return r.createElement("div",{className:"supporters-module--container--XovnY"},r.createElement("p",null,"Organizations who are already supporting Ukraine and current initiative"),r.createElement(F,{logo:[{image:"images/company-logos/mobalytics.png",alt:"Mobalytics"},{image:"images/company-logos/dmarket.png",alt:"Dmarket"},{image:"images/company-logos/esports-charts.png",alt:"Esports Charts"},{image:"images/company-logos/navi.png",alt:"Navi"},{image:"images/company-logos/misfits.png",alt:"Misfits"},{image:"images/company-logos/primis.png",alt:"Primis"}]}))},K=function(){return r.createElement("div",{className:"map-view-module--container--Y-BIA"},r.createElement(H,null),r.createElement(_,null))},V=function(){var e=(0,o.mr)(),t=e.state.currentView,n=e.dispatch;return r.useEffect((function(){var e=(new E.Z).get(B.k.MAIN_SECTION_VIEW);e&&!t&&n({type:"ChangeView",payload:{slug:e}})}),[]),r.createElement("div",{className:"main-section-module--container--38WxQ"},(!t||"MapView"===t)&&r.createElement(K,null),"NewsView"===t&&r.createElement(j,null))},W=n(5697),Y=n.n(W),z=n(4839),Z=n.n(z),q=n(2993),J=n.n(q),Q=n(6494),X=n.n(Q),$="bodyAttributes",ee="htmlAttributes",te="titleAttributes",ne={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},re=(Object.keys(ne).map((function(e){return ne[e]})),"charset"),ae="cssText",oe="href",ie="http-equiv",ue="innerHTML",ce="itemprop",le="name",se="property",fe="rel",pe="src",de="target",me={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ye="defaultTitle",he="defer",ge="encodeSpecialCharacters",be="onChangeClientState",ve="titleTemplate",we=Object.keys(me).reduce((function(e,t){return e[me[t]]=t,e}),{}),Ee=[ne.NOSCRIPT,ne.SCRIPT,ne.STYLE],Te="data-react-helmet",Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ke=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ne=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ie=function(e){var t=Re(e,ne.TITLE),n=Re(e,ve);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Re(e,ye);return t||r||void 0},Pe=function(e){return Re(e,be)||function(){}},Le=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Oe({},e,t)}),{})},je=function(e,t){return t.filter((function(e){return void 0!==e[ne.BASE]})).map((function(e){return e[ne.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Be=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&He("Helmet: "+e+' should be of type "Array". Instead found type "'+Se(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||n===fe&&"canonical"===e[n].toLowerCase()||c===fe&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==ue&&u!==ae&&u!==ce||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=X()({},r[u],a[u]);r[u]=c}return e}),[]).reverse()},Re=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Ge=(A=Date.now(),function(e){var t=Date.now();t-A>16?(A=t,e(t)):setTimeout((function(){Ge(e)}),0)}),Ue=function(e){return clearTimeout(e)},xe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ge:n.g.requestAnimationFrame||Ge,De="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ue:n.g.cancelAnimationFrame||Ue,He=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Fe=null,_e=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;We(ne.BODY,r),We(ne.HTML,a),Ve(f,p);var d={baseTag:Ye(ne.BASE,n),linkTags:Ye(ne.LINK,o),metaTags:Ye(ne.META,i),noscriptTags:Ye(ne.NOSCRIPT,u),scriptTags:Ye(ne.SCRIPT,l),styleTags:Ye(ne.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),c(e,m,y)},Ke=function(e){return Array.isArray(e)?e.join(""):e},Ve=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ke(e)),We(ne.TITLE,t)},We=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Te),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(Te):n.getAttribute(Te)!==i.join(",")&&n.setAttribute(Te,i.join(","))}},Ye=function(e,t){var n=document.head||document.querySelector(ne.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===ue)n.innerHTML=t.innerHTML;else if(r===ae)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(Te,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ze=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[me[n]||n]=e[n],t}),t)},qe=function(e,t,n){switch(e){case ne.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[Te]=!0,o=Ze(n,a),[r.createElement(ne.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,r){var a=ze(n),o=Ke(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Ne(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Ne(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case $:case ee:return{toComponent:function(){return Ze(t)},toString:function(){return ze(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[Te]=!0,a);return Object.keys(t).forEach((function(e){var n=me[e]||e;if(n===ue||n===ae){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===ue||e===ae)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Ne(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===Ee.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Je=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:qe(ne.BASE,t,r),bodyAttributes:qe($,n,r),htmlAttributes:qe(ee,a,r),link:qe(ne.LINK,o,r),meta:qe(ne.META,i,r),noscript:qe(ne.NOSCRIPT,u,r),script:qe(ne.SCRIPT,c,r),style:qe(ne.STYLE,l,r),title:qe(ne.TITLE,{title:f,titleAttributes:p},r)}},Qe=Z()((function(e){return{baseTag:je([oe,de],e),bodyAttributes:Le($,e),defer:Re(e,he),encode:Re(e,ge),htmlAttributes:Le(ee,e),linkTags:Be(ne.LINK,[fe,oe],e),metaTags:Be(ne.META,[le,re,ie,se,ce],e),noscriptTags:Be(ne.NOSCRIPT,[ue],e),onChangeClientState:Pe(e),scriptTags:Be(ne.SCRIPT,[pe,ue],e),styleTags:Be(ne.STYLE,[ae],e),title:Ie(e),titleAttributes:Le(te,e)}}),(function(e){Fe&&De(Fe),e.defer?Fe=xe((function(){_e(e,(function(){Fe=null}))})):(_e(e),Fe=null)}),Je)((function(){return null})),Xe=(C=Qe,M=O=function(e){function t(){return Ae(this,t),ke(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!J()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case ne.SCRIPT:case ne.NOSCRIPT:return{innerHTML:t};case ne.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Oe({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Oe({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case ne.TITLE:return Oe({},a,((t={})[r.type]=i,t.titleAttributes=Oe({},o),t));case ne.BODY:return Oe({},a,{bodyAttributes:Oe({},o)});case ne.HTML:return Oe({},a,{htmlAttributes:Oe({},o)})}return Oe({},a,((n={})[r.type]=Oe({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Oe({},t);return Object.keys(e).forEach((function(t){var r;n=Oe({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[we[n]||n]=e[n],t}),t)}(Me(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case ne.LINK:case ne.META:case ne.NOSCRIPT:case ne.SCRIPT:case ne.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Me(e,["children"]),a=Oe({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(C,a)},Ce(t,null,[{key:"canUseDOM",set:function(e){C.canUseDOM=e}}]),t}(r.Component),O.propTypes={base:Y().object,bodyAttributes:Y().object,children:Y().oneOfType([Y().arrayOf(Y().node),Y().node]),defaultTitle:Y().string,defer:Y().bool,encodeSpecialCharacters:Y().bool,htmlAttributes:Y().object,link:Y().arrayOf(Y().object),meta:Y().arrayOf(Y().object),noscript:Y().arrayOf(Y().object),onChangeClientState:Y().func,script:Y().arrayOf(Y().object),style:Y().arrayOf(Y().object),title:Y().string,titleAttributes:Y().object,titleTemplate:Y().string},O.defaultProps={defer:!0,encodeSpecialCharacters:!0},O.peek=C.peek,O.rewind=function(){var e=C.rewind();return e||(e=Je({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},M);Xe.renderStatic=Xe.rewind;function $e(){return r.createElement(a.g,null,r.createElement(Xe,null,r.createElement("title",null,"Gamers With Ukraine!"),r.createElement("meta",{name:"description",content:"Join thousands of gamers worldwide to show your support to Ukraine and help stop the war!"}),r.createElement("link",{rel:"canonical",href:"https://gamerswithukraine.gg"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",content:"https://gamerswithukraine.gg/images/gamers-with-ukraine.jpg"}),r.createElement("meta",{property:"og:description",content:"Join thousands of gamers worldwide to show your support to Ukraine and help stop the war!"}),r.createElement("meta",{property:"og:title",content:"Gamers With Ukraine!"}),r.createElement("meta",{property:"og:url",content:"https://gamerswithukraine.gg"}),r.createElement("meta",{property:"og:site_name",content:"Gamers With Ukraine!"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:url",content:"https://gamerswithukraine.gg"}),r.createElement("meta",{name:"twitter:title",content:"Gamers With Ukraine!"}),r.createElement("meta",{name:"twitter:image",content:"https://gamerswithukraine.gg/images/gamers-with-ukraine.jpg"}),r.createElement("meta",{name:"twitter:description",content:"Join thousands of gamers worldwide to show your support to Ukraine and help stop the war!"})),r.createElement(f,null),r.createElement(p,null),r.createElement(d.F,null),r.createElement(m.b,null),r.createElement("div",{style:{display:"flex",maxWidth:"100vw"}},r.createElement(w,null),r.createElement(V,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c6918c70677f395b6b6c.js.map