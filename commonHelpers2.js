/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("menu-toggle"),r=document.getElementById("close-menu"),o=document.getElementById("mobile-menu");!i||!r||!o||(i.addEventListener("click",function(t){t.stopPropagation(),o.classList.add("active")}),r.addEventListener("click",function(t){t.stopPropagation(),o.classList.remove("active")}),document.addEventListener("click",function(t){!o.contains(t.target)&&!i.contains(t.target)&&o.classList.remove("active")}),document.addEventListener("keydown",function(t){t.key==="Escape"&&o.classList.remove("active")}))});
//# sourceMappingURL=commonHelpers2.js.map
