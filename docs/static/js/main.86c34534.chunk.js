(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{18:function(e,a,t){e.exports=t(36)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=(t(23),t(12)),o=t(5),m=(t(24),t(25),function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__background"}))}),s=(t(26),t(6)),u=function(e){return r.a.createElement("li",{className:"card"},r.a.createElement(s.b,{to:"/character/".concat(e.character.id)},r.a.createElement("img",{className:"card__image",src:e.character.image,alt:"Foto de ".concat(e.character.name),title:"Foto de ".concat(e.character.name)}),r.a.createElement("p",{className:"card__name"},e.character.name),r.a.createElement("p",{className:"card__species"},e.character.species)))},h=(t(32),function(e){if(0===e.characters.length)return r.a.createElement("div",null,r.a.createElement("h2",null,"Personaje no encontrado"));var a=e.characters.map((function(e){return r.a.createElement(u,{key:e.id,character:e})}));return r.a.createElement("section",null,r.a.createElement("ul",{className:"cards"},a))}),d=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,origin:e.origin.name,image:e.image,episode:e.episode.length}}))}))},f=(t(33),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/"},r.a.createElement("span",null,r.a.createElement("i",{class:"fas fa-home"}))),r.a.createElement("div",{className:"card-detail"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"container__image",src:"https://via.placeholder.com/150",alt:"",title:""})),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"container__list"},r.a.createElement("li",{className:"container__list--item"},"Status: Alive"),r.a.createElement("li",{className:"container__list--item"},"Especie: Human"),r.a.createElement("li",{className:"container__list--item"},"Origen: planeta tierra"),r.a.createElement("li",{className:"container__list--item"},"Espisodios: ")))))}),E=(t(34),function(e){var a=function(a){e.handleFilter({value:a.target.value,key:"name"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"name"}),r.a.createElement("input",{className:"form__input-text",id:"name",placeholder:"Busca tu personaje",name:"name",onChange:a,onKeyDown:a}))}),p=(t(35),function(e){return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault()}},r.a.createElement(E,{handleFilter:e.handleFilter}))}),g=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],E=s[1];Object(n.useEffect)((function(){d().then((function(e){return c(e)}))}),[]);var g=function(e){"name"===e.key&&E(e.value)},_=t.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{handleFilter:g}),r.a.createElement("main",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(p,{className:"header__form",handleFilter:g}),r.a.createElement(h,{characters:_})),r.a.createElement(o.a,{path:"/character/:characterId",render:function(e){console.log(e);var a=e.match.params.characterId,n=t.find((function(e){return e.id===a}));return r.a.createElement(f,{character:n})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.86c34534.chunk.js.map