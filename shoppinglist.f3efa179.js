document.querySelectorAll(".header__nav-link").forEach((e=>{"/"!==window.location.pathname&&"/book-project/"!==window.location.pathname&&(window.location.pathname===e.getAttribute("href")?e.classList.add("current-link"):e.classList.remove("current-link"))}));const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector("body");t.addEventListener("click",(function(){e.classList.toggle("is-open"),o.classList.toggle("noScroll")}));function r(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}}document.querySelectorAll(".mobile__nav-link").forEach((e=>{"/"!==window.location.pathname&&"/book-project/"!==window.location.pathname&&(window.location.pathname===e.getAttribute("href")?e.classList.add("current-link"):e.classList.remove("current-link"))}));const n=document.querySelector(".theme-switcher__checkbox"),c=document.querySelector("body"),a=function(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}("darkTheme");function l(){var e;n.checked?(c.classList.add("dark"),r("darkTheme","true")):(c.classList.remove("dark"),e="darkTheme",localStorage.removeItem(e))}n.checked=a,n.addEventListener("change",l),l();
//# sourceMappingURL=shoppinglist.f3efa179.js.map
