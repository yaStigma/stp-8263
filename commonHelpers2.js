/* empty css                      */(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".header"),c=document.querySelector(".hero"),o=document.getElementById("mobile-menu"),s=document.getElementById("menu-toggle"),e=document.getElementById("close-menu"),t=document.getElementById("scrollToTop");!r||!c||!o||!s||!e||!t||(document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault();const d=document.querySelector(n.getAttribute("href"));d&&(window.scrollTo({top:d.offsetTop-r.offsetHeight,behavior:"smooth"}),o.classList.remove("active"),document.body.style.overflow="")})}),s.addEventListener("click",()=>{o.classList.add("active"),document.body.style.overflow="hidden"}),e.addEventListener("click",()=>{o.classList.remove("active"),document.body.style.overflow=""}),document.addEventListener("click",n=>{!o.contains(n.target)&&!s.contains(n.target)&&(o.classList.remove("active"),document.body.style.overflow="")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(o.classList.remove("active"),document.body.style.overflow="")}),window.addEventListener("scroll",()=>{t.classList.toggle("show",window.scrollY>300)}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll(".accordion-item");r.forEach(c=>{const o=c.querySelector(".accordion-header"),s=c.querySelector(".accordion-content");function e(){const t=c.classList.contains("active");r.forEach(n=>n.classList.remove("active")),t||c.classList.add("active")}o.addEventListener("click",e),s.addEventListener("click",e)})});document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("cookie-modal"),c=document.getElementById("accept-cookies"),o=document.getElementById("decline-cookies");localStorage.getItem("cookieConsent")?r.style.display="none":(r.style.display="flex",document.body.style.overflow="hidden");function s(){r.style.display="none",document.body.style.overflow=""}c.addEventListener("click",function(){localStorage.setItem("cookieConsent","accepted"),s()}),o.addEventListener("click",function(){localStorage.setItem("cookieConsent","declined"),s()})});
//# sourceMappingURL=commonHelpers2.js.map
