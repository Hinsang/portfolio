_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{LAVF:function(e,n,r){"use strict";r.d(n,"f",(function(){return a})),r.d(n,"g",(function(){return l})),r.d(n,"e",(function(){return u})),r.d(n,"i",(function(){return c})),r.d(n,"j",(function(){return i})),r.d(n,"h",(function(){return s})),r.d(n,"l",(function(){return d})),r.d(n,"n",(function(){return f})),r.d(n,"k",(function(){return g})),r.d(n,"m",(function(){return p})),r.d(n,"c",(function(){return O})),r.d(n,"d",(function(){return b})),r.d(n,"b",(function(){return E})),r.d(n,"a",(function(){return h})),r.d(n,"q",(function(){return U})),r.d(n,"p",(function(){return j}));var o=r("rfrl"),t=(r("q1tI"),r("vDqi"),r("/MKj"),{loadUserLoading:!1,loadUserDone:!1,loadUserError:null,logInLoading:!1,logInDone:!1,logInError:null,logOutLoading:!1,logOutDone:!1,logOutError:null,signUpLoading:!1,signUpDone:!1,signUpError:null,me:null}),a="LOG_IN_REQUEST",l="LOG_IN_SUCCESS",u="LOG_IN_FAILURE",c="LOG_OUT_REQUEST",i="LOG_OUT_SUCCESS",s="LOG_OUT_FAILURE",d="SIGN_UP_REQUEST",f="SIGN_UP_SUCCESS",g="SIGN_UP_FAILURE",p="SIGN_UP_RESET",O="LOAD_MY_INFO_REQUEST",b="LOAD_MY_INFO_SUCCESS",E="LOAD_MY_INFO_FAILURE",h="ADD_POST_TO_ME",U=function(){return{type:c}},j=function(e){return{type:a,data:e}};n.o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return Object(o.a)(e,(function(e){switch(n.type){case O:e.loadUserDone=!1,e.loadUserError=null,e.loadUserLoading=!0;break;case b:e.loadUserDone=!0,e.loadUserError=null,e.loadUserLoading=!1,e.me=n.data;break;case E:e.loadUserDone=!1,e.loadUserError=n.error,e.loadUserLoading=!1;break;case a:e.logInDone=!1,e.logInError=null,e.logInLoading=!0;break;case l:e.logInDone=!0,e.logInError=null,e.logInLoading=!1,e.me=n.data;break;case u:e.logInDone=!1,e.logInError=n.error,e.logInLoading=!1;break;case c:e.logOutDone=!1,e.logOutError=null,e.logOutLoading=!0;break;case i:e.logInDone=!1,e.logOutDone=!0,e.logOutError=null,e.logOutLoading=!1,e.me=null;break;case s:e.logOutDone=!1,e.logOutError=n.err,e.logOutLoading=!1;break;case d:e.signUpDone=!1,e.signUpError=null,e.signUpLoading=!0,e.logInError=null;break;case f:e.signUpDone=!0,e.signUpError=null,e.signUpLoading=!1;break;case g:e.signUpDone=!1,e.signUpError=n.err,e.signUpLoading=!1;break;case p:e.signUpDone=!1,e.logInError=null;break;case h:e.me.Posts.unshift({id:n.data})}}))}},YFqc:function(e,n,r){e.exports=r("cTJO")},cTJO:function(e,n,r){"use strict";var o=r("zoAU"),t=r("7KCV");n.__esModule=!0,n.default=void 0;var a,l=t(r("q1tI")),u=r("elyg"),c=r("nOHt"),i=new Map,s=window.IntersectionObserver,d={};var f=function(e,n){var r=a||(s?a=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var n=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),i.set(e,n),function(){try{r.unobserve(e)}catch(n){console.error(n)}i.delete(e)}):function(){}};function g(e,n,r,o){(0,u.isLocalURL)(n)&&(e.prefetch(n,r,o).catch((function(e){0})),d[n+"%"+r]=!0)}var p=function(e){var n=!1!==e.prefetch,r=l.default.useState(),t=o(r,2),a=t[0],i=t[1],p=(0,c.useRouter)(),O=p&&p.pathname||"/",b=l.default.useMemo((function(){var n=(0,u.resolveHref)(O,e.href,!0),r=o(n,2),t=r[0],a=r[1];return{href:t,as:e.as?(0,u.resolveHref)(O,e.as):a||t}}),[O,e.href,e.as]),E=b.href,h=b.as;l.default.useEffect((function(){if(n&&s&&a&&a.tagName&&(0,u.isLocalURL)(E)&&!d[E+"%"+h])return f(a,(function(){g(p,E,h)}))}),[n,a,E,h,p]);var U=e.children,j=e.replace,_=e.shallow,L=e.scroll;"string"===typeof U&&(U=l.default.createElement("a",null,U));var v=l.Children.only(U),I={ref:function(e){e&&i(e),v&&"object"===typeof v&&v.ref&&("function"===typeof v.ref?v.ref(e):"object"===typeof v.ref&&(v.ref.current=e))},onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,n,r,o,t,a,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(r))&&(e.preventDefault(),null==l&&(l=o.indexOf("#")<0),n[t?"replace":"push"](r,o,{shallow:a}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,E,h,j,_,L)}};return n&&(I.onMouseEnter=function(e){(0,u.isLocalURL)(E)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),g(p,E,h,{priority:!0}))}),(e.passHref||"a"===v.type&&!("href"in v.props))&&(I.href=(0,u.addBasePath)((0,u.addLocale)(h,p&&p.locale,p&&p.defaultLocale))),l.default.cloneElement(v,I)};n.default=p},lPe0:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return r("mR+L")}])},"mR+L":function(e,n,r){"use strict";r.r(n);var o=r("q1tI"),t=r("Vl3Y"),a=r("5rEg"),l=r("2/Rp"),u=r("YFqc"),c=r.n(u),i=r("/MKj"),s=r("nOHt"),d=r.n(s),f=r("LAVF"),g=r("nKUr");n.default=function(){var e=Object(i.c)((function(e){return e.user})),n=e.logInDone,r=e.logInLoading,u=e.logInError,s=(e.me,Object(i.b)()),p=Object(o.useState)(""),O=p[0],b=p[1],E=Object(o.useState)(""),h=E[0],U=E[1],j=Object(o.useCallback)((function(e){b(e.target.value)}),[]),_=Object(o.useCallback)((function(e){U(e.target.value)}),[]);Object(o.useEffect)((function(){u&&(alert(u),s({type:f.m}))}),[u]),Object(o.useEffect)((function(){n&&(d.a.push("/"),console.log(n),s({type:f.n}))}),[n]);var L=Object(o.useCallback)((function(){s(Object(f.p)({id:O,password:h})),console.log(O,h)}),[O,h]);return Object(g.jsxs)("div",{style:{width:"1000px",margin:"0 auto"},children:[Object(g.jsx)("div",{style:{margin:20}}),Object(g.jsxs)(t.a,{onFinish:L,style:{margin:20},children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"user-id",children:"\uc544\uc774\ub514"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{name:"user-id",value:O,onChange:j,required:!0})]}),Object(g.jsxs)("div",{style:{marginTop:"5px"},children:[Object(g.jsx)("label",{htmlFor:"user-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(g.jsx)("br",{}),Object(g.jsx)(a.a,{name:"user-password",type:"password",value:h,onChange:_,required:!0})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(l.a,{style:{marginTop:15},htmlType:"submit",loading:r,children:"\ub85c\uadf8\uc778"}),"\xa0\xa0",Object(g.jsx)(c.a,{href:"/Signup",children:Object(g.jsx)("a",{children:Object(g.jsx)(l.a,{children:"\ud68c\uc6d0\uac00\uc785"})})})]})]})]})}}},[["lPe0",0,1,2,3,4,5]]]);