(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(13)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(11),a(1)),s=a(2);a(12);var u=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),u=Object(s.a)(r,2),i=u[0],m=u[1],p=function(e){e.preventDefault(),a&&(m([].concat(Object(o.a)(i),[{task:a,isComplete:!1}])),l(""))},f=function(e){return function(t){var a=Object(o.a)(i);a.splice(e,1,{task:t.target.value,isComplete:i[e].isComplete}),m(a)}};return c.a.createElement("div",{className:"app"},i.map(function(e,t){return c.a.createElement("form",{onSubmit:p,className:"tasksForm",key:t},c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",checked:e.isComplete,onChange:function(){return function(e){var t=Object(o.a)(i);t.splice(e,1,{task:i[e].task,isComplete:!i[e].isComplete}),m(t)}(t)}}),c.a.createElement("input",{type:"text",value:e.task,onChange:f(t),style:{textDecoration:e.isComplete&&"line-through"}})),c.a.createElement("button",{onClick:function(){return function(e){var t=Object(o.a)(i);t.splice(e,1),m(t)}(t)},type:"button",className:"timesBtn"},c.a.createElement("i",{className:"fas fa-times"})))}),c.a.createElement("form",{onSubmit:p,className:"taskForm"},c.a.createElement("input",{type:"text",value:a,onChange:function(e){return l(e.target.value)},placeholder:"+ List Item"})),c.a.createElement("section",{className:"menu"},c.a.createElement("button",null,c.a.createElement("i",{className:"far fa-trash-alt"})),c.a.createElement("button",null,c.a.createElement("i",{className:"far fa-clone"}))))};r.a.render(c.a.createElement(u,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.b8bffa53.chunk.js.map