(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{35:function(e,t,a){"use strict";var n=a(40),s=a.n(n).a.create({baseURL:"https://jsonplaceholder.typicode.com/"});t.a=s},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=(a(73),a(37)),r=a.n(c),l=a(38),u=a(39),i=(a(74),a(35)),o=function(e){var t=e.id,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],m=c[1],p=function(){var e=Object(l.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)("/users/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&m(a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),p()},{}),s.a.createElement("div",{className:"users-detail"},s.a.createElement("div",{className:"users-detail__item"},s.a.createElement("p",null,"Name: ",o.name),s.a.createElement("p",null,"Username: ",o.username),s.a.createElement("p",null,"Email: ",o.email),o.address&&s.a.createElement("div",{className:"users-detail__address"},"Address:",s.a.createElement("p",null,"Street: ",o.address.street),s.a.createElement("p",null,"Suite: ",o.address.suite),s.a.createElement("p",null,"City: ",o.address.city),s.a.createElement("p",null,"Zip: ",o.address.zipcode)),s.a.createElement("p",null,"Phone: ",o.phone),s.a.createElement("p",null,"Website: ",o.website),o.company&&s.a.createElement("div",{className:"users-detail__company"},"Company:",s.a.createElement("p",null,"Name: ",o.company.name),s.a.createElement("p",null,"Catch Phrase: ",o.company.catchPhrase),s.a.createElement("p",null,"Bs: ",o.company.bs))))},m=(a(75),a(8)),p=function(e){var t=e.id,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],p=c[1],d=function(){var e=Object(l.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)("/posts?userId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&p(a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){d()},[]),s.a.createElement("div",{className:"posts-list"},"Posts",o.map(function(e){return s.a.createElement(m.b,{to:"/posts/".concat(e.id),key:e.id},s.a.createElement("div",{className:"posts-list__item"},s.a.createElement("span",{className:"posts-list__title"},e.title||"-")))}))},d=(a(76),function(e){var t=e.id,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],p=c[1],d=function(){var e=Object(l.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.a)("/albums?userId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&p(a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){d()},[]),s.a.createElement("div",{className:"albums-list"},"Albums",o.map(function(e){return s.a.createElement(m.b,{to:"/photos-list/".concat(e.id),key:e.id},s.a.createElement("div",{className:"albums-list__item"},s.a.createElement("span",null,e.title||"-")))}))}),f=function(e){var t=e.match.params.id;return s.a.createElement("div",{className:"user-page"},s.a.createElement(o,{id:t}),s.a.createElement(p,{id:t}),s.a.createElement(d,{id:t}))};a.d(t,"default",function(){return f})}}]);
//# sourceMappingURL=4.ae52dc32.chunk.js.map