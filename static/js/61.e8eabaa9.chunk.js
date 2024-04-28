"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[61],{61:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(689),o=t(390),p="reviews_reviewsContainer__kxpyD",h="reviews_reviewsGroup__ntXP5",l="reviews_reviewsText__u1Jyh",f=t(105),v=t(184),d=function(){var e=(0,i.UO)().movieId,r=(0,s.useState)([]),t=(0,a.Z)(r,2),u=t[0],d=t[1],m=(0,s.useState)(!1),x=(0,a.Z)(m,2),w=x[0],y=x[1],b=(0,s.useState)(""),g=(0,a.Z)(b,2),j=g[0],Z=g[1];return(0,s.useEffect)((function(){if(e){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return y(!0),r.prev=1,r.next=4,(0,o.SM)(e);case 4:t=r.sent,(n=t.results).length>0?d(n):Z("No reviews available."),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.error("Failed to fetch reviews:",r.t0),Z("Failed to fetch reviews.");case 13:return r.prev=13,y(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,9,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}}),[e]),w?(0,v.jsx)(f.Z,{}):j?(0,v.jsx)("p",{children:j}):u.length?(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("h2",{children:"Reviews"}),(0,v.jsx)("ul",{className:h,children:u.map((function(e){return(0,v.jsxs)("li",{className:l,children:[(0,v.jsx)("strong",{children:e.author}),": ",e.content]},e.id)}))})]}):(0,v.jsx)("p",{children:"No reviews available."})}},390:function(e,r,t){t.d(r,{BC:function(){return s},S:function(){return h},SM:function(){return o},gH:function(){return d},mU:function(){return f}});var n=t(861),a=t(757),u=t.n(a),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTdmY2RiMDQ0YzM1MWNiMDU0MzBjNzIxZmM3MWYzMCIsInN1YiI6IjY2MmFlYjUyOWFjNTM1MDExZThlZGMxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22_Uj8QmqDYwiimB9nQTCC2aQ24zHqn3tCOHcJ_dYM4"}};function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",c);case 3:return r=e.sent,e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?language=en-US&page=1"),c);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?language=en-US"),c);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?language=en-US"),c);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&include_adult=false&language=en-US&page=1"),c);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},861:function(e,r,t){function n(e,r,t,n,a,u,c){try{var s=e[u](c),i=s.value}catch(o){return void t(o)}s.done?r(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(a,u){var c=e.apply(r,t);function s(e){n(c,a,u,s,i,"next",e)}function i(e){n(c,a,u,s,i,"throw",e)}s(void 0)}))}}t.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=61.e8eabaa9.chunk.js.map