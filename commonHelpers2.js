/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("menu-toggle"),o=document.getElementById("close-menu"),c=document.getElementById("mobile-menu");!r||!o||!c||(r.addEventListener("click",function(t){t.stopPropagation(),c.classList.add("active")}),o.addEventListener("click",function(t){t.stopPropagation(),c.classList.remove("active")}),document.addEventListener("click",function(t){!c.contains(t.target)&&!r.contains(t.target)&&c.classList.remove("active")}),document.addEventListener("keydown",function(t){t.key==="Escape"&&c.classList.remove("active")}))});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".accordion-item");r.forEach(o=>{const c=o.querySelector(".accordion-header"),t=o.querySelector(".accordion-content");function e(){const n=o.classList.contains("active");r.forEach(i=>i.classList.remove("active")),n||o.classList.add("active")}c.addEventListener("click",e),t.addEventListener("click",e)})});
//# sourceMappingURL=commonHelpers2.js.map
