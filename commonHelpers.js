import{S as c,i}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=";document.addEventListener("submit",d);function f(t){const r="https://pixabay.com/api/",n="?",s=new URLSearchParams({key:"42187332-ff85343869753156c1a8d7a61",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=r+n+s;return fetch(e).then(o=>o.json())}const p={captionsTitle:"attr",captionsData:"alt"},g=new c(".gallery a",p);function m(){const t=document.getElementById("loader");t.style.display="block",document.querySelector(".gallery").innerHTML=""}function u(){const t=document.getElementById("loader");t.style.display="none"}function d(t){t.preventDefault();const r=t.target.elements.name.value;m(),setTimeout(()=>{f(r).then(n=>{r.length>0?(h(n.hits),g.refresh()):(document.querySelector(".gallery").innerHTML="",i.error({message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:l,iconColor:"#ffffff"}))}).catch(n=>{console.error(n),i.error({message:"An error occurred while fetching images. Please try again!",position:"topRight",messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:l,iconColor:"#ffffff"})}).finally(()=>{u(),t.target.reset()})},1e3)}function A({webformatURL:t,largeImageURL:r,tags:n,likes:s,views:e,comments:o,downloads:a}){return`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${t}" 
      alt="${n}"
    >
        <div class="all-image-info">
    <p class="image-info"><span class="property-name">Likes</span>${s}</p>
        <p class="image-info"><span class="property-name">Views</span>${e}</p>
            <p class="image-info"><span class="property-name">Comments</span>${o}</p>
                <p class="image-info"><span class="property-name">Downloads</span>${a}</p>
                </div>
    </a>
  </li>`}function y(t){return t.map(A).join("")}function h(t){const r=y(t);document.querySelector(".gallery").innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
