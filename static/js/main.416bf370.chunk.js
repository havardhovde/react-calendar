(this["webpackJsonpreact-calendar-scheduler"]=this["webpackJsonpreact-calendar-scheduler"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(5),r=n.n(c),s=n(21),o=n.n(s),d=(n(29),n(16)),i=(n(30),n(0)),u=n.n(i),l=n(10),j=n.n(l),f=n(11),m=n.n(f),b=(n(31),n(32),n(22)),M=function(e){for(var t=[],n=0;n<7;n++)t.push(e.startWeek.add([n],"d")),console.log(t);var c=e.currentDate.week(),r=e.currentDate.format("MMMM YYYY");return e.startWeek.month()!==e.endWeek.month()&&(r=e.startWeek.year()!==e.endWeek.year()?"".concat(e.startWeek.format("MMMM YYYY")," / ").concat(e.endWeek.format("MMMM YYYY")):"".concat(e.startWeek.format("MMMM"),"/").concat(e.endWeek.format("MMMM YYYY"))),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"weekNumber",children:[Object(a.jsx)("button",{onClick:function(){e.setCurrentDate(u()(e.currentDate).subtract(1,"w"))},children:"back"}),"Week ",c,Object(a.jsx)("button",{onClick:function(){e.setCurrentDate(u()(e.currentDate).add(1,"w"))},children:"forward"})]}),Object(a.jsx)(b.DatePicker,{onChange:function(t){return e.setCurrentDate(t)},initialDate:e.currentDate,dateFormat:"DD/MM/YYYY",showToday:!0,showDefaultIcon:!0}),Object(a.jsx)("div",{className:"dates",children:t.map((function(t,n){return Object(a.jsx)("div",{className:" date date".concat(n),onClick:function(){return e.setSelectedDate(t.format("DD MMM YYYY"))},children:t.format("D")},n)}))}),Object(a.jsx)("div",{className:"monthAndYear",children:r})]})},h=n(23),Y=n.n(h);u()().format(),u.a.extend(j.a),u.a.extend(m.a),u.a.extend(Y.a);var D=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:u()(e.selectedDate).format("Do MMMM YYYY")})})};u()().format(),u.a.extend(j.a),u.a.extend(m.a);var O=function(){var e=Object(c.useState)(u()()),t=Object(d.a)(e,2),n=t[0],r=t[1],s=u()(n).startOf("isoWeek"),o=u()(n).endOf("isoWeek"),i=Object(c.useState)(n),l=Object(d.a)(i,2),j=l[0],f=l[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"components date",children:Object(a.jsx)(D,{selectedDate:j})}),Object(a.jsx)("div",{className:"components calendarComp",children:Object(a.jsx)(M,{currentDate:n,setCurrentDate:r,startWeek:s,endWeek:o,selectedDate:j,setSelectedDate:f})}),Object(a.jsx)("div",{className:"components notes",children:"Notes"})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.416bf370.chunk.js.map