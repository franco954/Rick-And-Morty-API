(this["webpackJsonprick-morty-api"]=this["webpackJsonprick-morty-api"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(8),a=s.n(r),i=(s(14),s(7)),o=s.n(i),d=s(9),j=s(2),l=s(3),m=s(5),b=s(4),u=(s(16),s(17),s(0));var p=function(e){return console.log(e.datos.name),Object(u.jsx)("div",{className:"col-12 col-lg-4 col-md-6",children:Object(u.jsxs)("div",{className:"card card-body mt-2",children:[Object(u.jsx)("div",{className:"card-title",children:Object(u.jsx)("span",{children:e.datos.name})}),Object(u.jsx)("div",{className:"card-image mx-auto",children:Object(u.jsx)("img",{className:"img-character img-fluid",src:e.datos.image,alt:"img-character"})}),Object(u.jsxs)("div",{className:"card-content mt-2",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Genero:"})," ",e.datos.gender]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Especie:"})," ",e.datos.species]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Estado:"})," ",e.datos.status]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Apariciones:"})," ",Object.keys(e.datos.episode).length," episodios"]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Ubicacion:"})," ",e.datos.location.name]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Origen:"})," ",e.datos.origin.name]})]})]})})},h=(s(19),s.p+"static/media/presentacion.f062c537.jpg");var x=function(e){return Object(u.jsxs)("div",{className:"card card-body",children:[Object(u.jsx)("div",{className:"card-logo",children:Object(u.jsx)("img",{className:"rounded mx-auto d-block mb-3",width:"135px",src:h,alt:"rick and morty logo"})}),Object(u.jsx)("form",{onSubmit:e.obtenerPersonaje,children:Object(u.jsxs)("div",{className:"form-group mt-4",children:[Object(u.jsx)("input",{type:"text",name:"personaje",className:"form-control",autoFocus:!0,autoComplete:"off"}),Object(u.jsx)("div",{class:"d-grid gap-2 col-4 mx-auto mt-3",children:Object(u.jsx)("button",{class:"btn btn-primary",type:"submit",children:"Obtener Personaje"})})]})})]})},O=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"col-12 col-md-6 mx-auto",children:Object(u.jsx)("div",{className:"alert alert-danger mt-1 text-center",children:"Introduzca un personaje valido"})})}}]),s}(c.Component),v=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(j.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={Items:[],response:!0,error:!1},e.obtenerPersonaje=function(){var t=Object(d.a)(o.a.mark((function t(s){var c,n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),""==(c=s.target.elements.personaje.value)&&e.setState({error:!0}),!c){t.next=13;break}return n="https://rickandmortyapi.com/api/character/?name=".concat(c),t.next=7,fetch(n);case 7:return r=t.sent,t.next=10,r.json();case 10:a=t.sent,console.log(r.status),200!==r.status?e.setState({response:!0,error:!0}):e.setState({Items:a.results,response:!0,error:!1});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container p-4",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-6 mx-auto",children:Object(u.jsx)(x,{obtenerPersonaje:this.obtenerPersonaje})})}),this.state.error&&Object(u.jsx)(O,{}),this.state.response&&Object(u.jsx)("div",{className:"row justify-content-center d-flex flex-wrap mt-3",children:this.state.Items.map((function(e){return Object(u.jsx)(p,{datos:e})}))})]})}}]),s}(c.Component);a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5945df5b.chunk.js.map