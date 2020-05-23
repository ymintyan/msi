(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,a,t){e.exports=t(66)},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(9),o=t.n(c),s=(t(57),t(12));t(58);var l=t(45),i="https://api.chucknorris.io/jokes";function u(){var e=localStorage.getItem("favourite_jokes");return e?JSON.parse(e):[]}function m(e){if(u().length){var a=Object(l.a)(e);localStorage.setItem("favourite_jokes",JSON.stringify(a))}else localStorage.setItem("favourite_jokes",JSON.stringify(e))}t(59);var d=function(e){var a=e.data,t=e.setFavJokes,r=e.isCustomStyle,c=e.isSearchedJokeInFav,o=a.updated_at,s=a.value,l=a.url,i=a.id,d=a.categories;if(0===a.length)return null;var v=function(e){var a=new Date(e),t=Date.parse(a),r=Date.now()-t;return Math.round(r/36e5)}(o);return n.a.createElement("div",{className:r?"joke-wrapper-fav":"joke-wrapper"},n.a.createElement("div",{className:"joke-link"},"ID: ",n.a.createElement("a",{href:"".concat(l),target:"_blank"},i)),n.a.createElement("div",{className:r||c?"joke-favourite-selected":"joke-favourite",onClick:function(e){var r=u(),n=!1;if(r.forEach((function(e){e.id===i&&(n=!0)})),n){var c,o=u();o.forEach((function(e,a){e.id===i&&(c=a)})),o.splice(c,1),m(o),t(o)}else{var s=u();s.push(a),m(s);var l=u();t(l)}}}),n.a.createElement("div",{className:"joke-value"},s),n.a.createElement("div",{className:"joke-footer"},n.a.createElement("div",{className:"joke-updatedAt"},"Last update: ".concat(v," hours ago")),n.a.createElement("div",{className:"joke-categories"},d.length?d.map((function(e){return n.a.createElement("div",{className:"category-item",key:e},e)})):null)))};t(60);var v=function(e){var a=e.jokes,t=e.errorMsg,r=e.setFavJokes,c=e.favJokes,o=function(e){for(var a=0;a<c.length;a++)if(e.id===c[a].id)return!0;return!1};return t?n.a.createElement("div",{className:"error-message"},t):a.result?a.total?n.a.createElement("div",{className:"jokes-list"},a.result.map((function(e){return n.a.createElement(d,{data:e,key:e.id,isSearchedJokeInFav:o(e),setFavJokes:r})}))):n.a.createElement("div",{className:"error-message"},"No results"):n.a.createElement("div",{className:"jokes-list"},n.a.createElement(d,{data:a,isSearchedJokeInFav:o(a),setFavJokes:r}))},f=t(38),g=t(108),h=t(109),E=t(107),k=t(106),p=t(4),j=t(105);var b=Object(p.a)((function(e){return{textField:{border:"2px solid #333333",padding:"10px 15px",borderRadius:10,marginTop:20}}}))((function(e){var a=e.isVisible,t=e.handleInput,r=e.classes;return a?n.a.createElement("div",{className:"search-wrapper"},n.a.createElement(j.a,{id:"search-input",size:"small",fullWidth:!0,placeholder:"Free text search...",onChange:t,className:r.textField,InputProps:{disableUnderline:!0}})):null})),N=t(103),y=t(104),O=Object(N.a)({root:{padding:"10px 40px",fontSize:"16px",fontWeight:"bold",color:"#fff",background:"linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)",borderRadius:10,textTransform:"none","&:hover":{background:"linear-gradient(92.01deg, #8EA7ff 0%, #496ff3 100%)"}}});var S=function(e){var a=e.handleClick,t=O();return n.a.createElement("div",{className:"btn-wrapper"},n.a.createElement(y.a,{onClick:a,classes:{root:t.root}},"Get a joke"))},F=t(44),w=t.n(F);var J=function(e){var a=e.data,t=e.selectHandler,c=e.selected,o=Object(r.useState)({selected:c}),l=Object(s.a)(o,2),i=l[0],u=l[1],m=w()("single-category",{selected:i.selected});return n.a.createElement("div",{className:m,onClick:function(e){e.stopPropagation(),u({selected:!i.selected}),t(a)}},a)};t(64);var C=function(e){var a=e.categories,t=e.selectedCategories,r=e.isVisible,c=e.handleCategorySelecting;return r?n.a.createElement("div",{className:"categories-list show"},a.map((function(e){var a=Object.keys(t).includes(e);return n.a.createElement(J,{selected:a,selectHandler:c,data:e,key:e})}))):null};t(65);var x=function(e){var a=e.setApiJokes,t=e.jokeCategories,c=e.setErrorMsg,o=Object(r.useState)("random"),l=Object(s.a)(o,2),u=l[0],m=l[1],d=Object(r.useState)({}),v=Object(s.a)(d,2),p=v[0],j=v[1],N=Object(r.useState)(""),y=Object(s.a)(N,2),O=y[0],F=y[1],w=Object(r.useState)({category:!1,search:!1}),J=Object(s.a)(w,2),x=J[0],I=J[1];return n.a.createElement("div",null,n.a.createElement(g.a,{component:"fieldset",fullWidth:!0},n.a.createElement(E.a,{name:"jokeType",value:u,onChange:function(e){m(e.target.value),"random"===e.target.value&&I({category:!1,search:!1}),"category"===e.target.value&&I({search:!1,category:!0}),"search"===e.target.value&&I({category:!1,search:!0})}},n.a.createElement(h.a,{value:"random",control:n.a.createElement(k.a,{className:"custom-color"}),label:"Random"}),n.a.createElement(h.a,{value:"category",control:n.a.createElement(k.a,{className:"custom-color"}),label:"From categories"}),n.a.createElement(C,{handleCategorySelecting:function(e){var a=Object(f.a)({},p);if(p.hasOwnProperty(e))return delete a[e],void j(Object(f.a)({},a));a[e]=!0,j(Object(f.a)({},a))},isVisible:x.category,selectedCategories:p,categories:t}),n.a.createElement(h.a,{value:"search",control:n.a.createElement(k.a,{className:"custom-color"}),label:"Search"}),n.a.createElement(b,{handleInput:function(e){F(e.target.value)},isVisible:x.search}))),n.a.createElement(S,{handleClick:function(e){(function(e,a){var t=a.searchText,r=a.selectedCategories,n="";switch(e){case"random":n="/random";break;case"category":var c=Object.keys(r).join(",");n="/random?category=".concat(c);break;case"search":n="/search?query=".concat(t)}return fetch("".concat(i).concat(n))})(u,{searchText:O,selectedCategories:p}).then((function(e){return e.json()})).then((function(e){return e.error?c(e.message):(a(e),c("")),e}))}}))};var I=function(e){var a=e.jokes,t=e.setFavJokes,r=function(e){document.getElementById("favourite-inner").classList.toggle("show")};return n.a.createElement("div",null,n.a.createElement("div",{className:"favourite-secondary-title"},"Favourite"),n.a.createElement("div",{className:"favourite-menu-btn",onClick:r}),n.a.createElement("div",{id:"favourite-inner",className:"favourite-inner"},n.a.createElement("div",{className:"favourite-inner-wrapper"},n.a.createElement("div",{className:"favourite-menu-btn",onClick:r}),n.a.createElement("div",{className:"favourite-secondary-title"},"Favourite"),n.a.createElement("h3",{className:"favourite-title"},"Favourite"),a.length?n.a.createElement("div",null,a.map((function(e){return n.a.createElement(d,{data:e,setFavJokes:t,isCustomStyle:!0,key:e.id})}))):null)))};var M=function(){var e=Object(r.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(r.useState)([]),l=Object(s.a)(o,2),m=l[0],d=l[1],f=Object(r.useState)(""),g=Object(s.a)(f,2),h=g[0],E=g[1],k=u(),p=Object(r.useState)(k),j=Object(s.a)(p,2),b=j[0],N=j[1];return Object(r.useEffect)((function(){fetch("".concat(i,"/categories")).then((function(e){return e.json()})).then((function(e){m.length||d(e)}))}),[]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"main-wrapper"},n.a.createElement("h2",{className:"main-title"},"MSI 2020"),n.a.createElement("p",{className:"greeting-title"},"Hey!"),n.a.createElement("p",{className:"greeting-text"},"Let\u2019s try to find a joke for you:"),n.a.createElement(x,{setApiJokes:c,setErrorMsg:E,jokeCategories:m}),n.a.createElement(v,{jokes:t,favJokes:b,setFavJokes:N,errorMsg:h})),n.a.createElement("div",{className:"favourites-wrapper"},n.a.createElement(I,{jokes:b,setFavJokes:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.f26282f2.chunk.js.map