/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".header"),r=document.querySelector(".hero"),n=document.getElementById("mobile-menu"),s=document.getElementById("menu-toggle"),e=document.getElementById("close-menu"),t=document.getElementById("scrollToTop");!o||!r||!n||!s||!e||!t||(document.querySelectorAll(".nav-link").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault();const d=document.querySelector(c.getAttribute("href"));d&&(window.scrollTo({top:d.offsetTop-o.offsetHeight,behavior:"smooth"}),n.classList.remove("active"),document.body.style.overflow="")})}),s.addEventListener("click",()=>{n.classList.add("active"),document.body.style.overflow="hidden"}),e.addEventListener("click",()=>{n.classList.remove("active"),document.body.style.overflow=""}),document.addEventListener("click",c=>{!n.contains(c.target)&&!s.contains(c.target)&&(n.classList.remove("active"),document.body.style.overflow="")}),document.addEventListener("keydown",c=>{c.key==="Escape"&&(n.classList.remove("active"),document.body.style.overflow="")}),window.addEventListener("scroll",()=>{t.classList.toggle("show",window.scrollY>300)}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".header");if(!o){console.error("Header element not found!");return}window.addEventListener("scroll",()=>{window.scrollY>50?o.classList.add("scrolled"):o.classList.remove("scrolled")})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".accordion-item");o.forEach(r=>{const n=r.querySelector(".accordion-header"),s=r.querySelector(".accordion-content");function e(){const t=r.classList.contains("active");o.forEach(c=>c.classList.remove("active")),t||r.classList.add("active")}n.addEventListener("click",e),s.addEventListener("click",e)})});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("cookie-modal"),r=document.getElementById("accept-cookies"),n=document.getElementById("decline-cookies");localStorage.getItem("cookieConsent")?o.style.display="none":(o.style.display="flex",document.body.style.overflow="hidden");function s(){o.style.display="none",document.body.style.overflow=""}r.addEventListener("click",function(){localStorage.setItem("cookieConsent","accepted"),s()}),n.addEventListener("click",function(){localStorage.setItem("cookieConsent","declined"),s()})});
//# sourceMappingURL=commonHelpers2.js.map
