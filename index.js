import{S as m,i as d}from"./assets/vendor-De63neY_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",y=t=>{const s=new URLSearchParams({key:"48264629-b593a4428d313ae96204c3007",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},f=t=>`
        <li class ='card'>
    <a class = 'gallery-link' href = '${t.largeImageURL}'>
        <img 
            class = 'card__image'
            src='${t.webformatURL}' 
            alt='${t.tags}'>

            <div class = 'stats'>
                <p class = 'stats-item'>Likes ${t.likes}</p>
                <p class = 'stats-item'>Views ${t.views}</p>
                <p class = 'stats-item'>Comments ${t.comments}</p>
                <p class = 'stats-item'>Downloads ${t.downloads}</p>
            </div>
      
<a/>
    </li>
    `,i=function(t,s){return t.classList.toggle(s)},h=function(){return new m(".gallery a")},u=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".js-loader"),g=t=>{t.preventDefault(),i(l,"visually-hidden"),c.innerHTML="";const s=t.currentTarget.elements.input.value.trim();if(s===""){d.error({title:"Error",message:"Please enter your search query"}),i(l,"visually-hidden");return}setTimeout(()=>{y(s).then(o=>{if(o.total===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",i(l,"visually-hidden"),u.reset();return}const a=o.hits.map(e=>f(e)).join("");i(l,"visually-hidden"),c.innerHTML=a,h(),u.reset()}).catch(o=>console.log(o))},400)};u.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
