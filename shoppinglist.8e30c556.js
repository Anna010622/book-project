!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(n){if(n in o)return o[n].exports;if(n in r){var e=r[n];delete r[n];var t={id:n,exports:{}};return o[n]=t,e.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){r[n]=e},t.parcelRequired7c6=i),i.register("iE7OH",(function(e,t){var o,r;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return r}),(function(n){return r=n}));var i={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},r=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i.register("aNJCr",(function(e,t){var o;n(e.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var r={};function i(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=r[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return i(n[2])}return"/"}(),r[n]=e),e}})),i("iE7OH").register(JSON.parse('{"7ttGv":"shoppinglist.8e30c556.js","410VS":"icons.bfbd7e52.svg","5UbS1":"index.fca01f61.css","cIs3N":"index.e80c331b.js"}')),i("i8Q71"),i("cs7FV"),i("32ZrB"),i("a2NHF");var a,c=i("4LMMA"),s=i("47ymi");a=i("aNJCr").getBundleURL("7ttGv")+i("iE7OH").resolve("410VS");var u=document.querySelector(".shopping-list__books"),l="books",f=(0,c.loadFromStorage)(l);function d(){var n=f.map((function(n){return o=(t=n).book_image,r=t.title,i=t.list_name,c=t.author,u=t.description,l=t.buy_links,f=t._id,'\n  <li class="shopping-list__item">\n    <button class="shopping-list__button-remote js-btn-remove" type="button" data-book="'.concat(f,'">\n      <svg class="shopping-list__button-icon" width="16" height="16" data-book="').concat(f,'">\n        <use href="').concat(e(a),'#icon-dump" data-book="').concat(f,'"></use>\n      </svg>\n    </button>\n    <div class="book__img-wrapper">\n      <img class="book__img" src="').concat(o,'" alt="book cover" />\n    </div>\n    \n    <p class="book__title">').concat(r,'</p>\n    <p class="book__category">').concat(i,"</p>\n\n    ").concat((0,s.createTradingPlatformsMarkup)(l),'\n    \n    <p class="book__author">').concat(c,'</p>\n    <p class="book__description">').concat(u,"</p>\n  </li>\n  ");var t,o,r,i,c,u,l,f}));u.innerHTML=n.join(" ")}function p(){document.querySelector(".shopping-list__message").classList.remove("hidden-message")}u.addEventListener("click",(function(n){if(!n.target.dataset.book)return;var e=n.target.dataset.book;if(f.find((function(n){return n._id===e}))){var t=f.find((function(n){return n._id===e})),o=f.indexOf(t);f.splice(o,1),(0,c.saveToStorage)(l,f),d(),0===(0,c.loadFromStorage)(l).length&&((0,c.removeFromStorage)(l),p())}})),void 0!==f?d():p()}();
//# sourceMappingURL=shoppinglist.8e30c556.js.map
