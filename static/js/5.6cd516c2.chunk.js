(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{35:function(e,t,a){"use strict";var n=a(40),c=a.n(n).a.create({baseURL:"https://jsonplaceholder.typicode.com/"});t.a=c},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=(a(77),a(37)),r=a.n(s),o=a(38),i=a(39),l=(a(78),a(35)),m=(a(79),function(e){var t=e.id,a=Object(n.useState)([]),s=Object(i.a)(a,2),m=s[0],u=s[1],p=function(){var e=Object(o.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)("/comments?postId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&u(a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){p()},[]),c.a.createElement("div",{className:"comments-list"},m.map(function(e){return c.a.createElement("div",{className:"comments-list__item",key:e.id},c.a.createElement("p",{className:"comments-list__name"},e.name||"-"),c.a.createElement("p",null,e.email||"-"),c.a.createElement("p",{className:"comments-list__body"},'"',e.body||"-",'"'))}))}),u=function(e){var t=e.id,a=Object(n.useState)({}),s=Object(i.a)(a,2),u=s[0],p=s[1],d=function(){var e=Object(o.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)("/posts/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&p(a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),d()},{}),c.a.createElement("div",{className:"posts-detail"},c.a.createElement("div",{className:"posts-detail__item"},c.a.createElement("p",{className:"posts-detail__title"},u.title),c.a.createElement("p",{className:"posts-detail__body"},u.body,".")),c.a.createElement("div",{className:"posts-detail__comments"},"Comments",c.a.createElement(m,{id:t})))},p=function(e){var t=e.match;return c.a.createElement("div",{className:"posts-detail-page"},c.a.createElement(u,{id:t.params.id}))};t.default=p}}]);
//# sourceMappingURL=5.6cd516c2.chunk.js.map