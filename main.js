(()=>{"use strict";const e=function(){const e=document.createElement("button");return e.classList.add("menu-button"),e.innerHTML='<i class="fa-sharp fa-solid fa-bars"></i>',e},t=function(){const e=document.createElement("span");return e.classList.add("site-name"),e.innerHTML="TODO List",e};document.querySelector("header").append(document.createElement("span"),t(),e()),function(){const e=document.createElement("nav");e.appendChild((()=>{const e=document.createElement("div");e.className="tasks",e.innerHTML="<h2>Tasks</h2>";const t=document.createElement("div");t.className="nav-items";const n=document.createElement("button");n.className="nav-item",n.innerHTML='<i class="fa-solid fa-calendar-day"></i> Today';const a=document.createElement("button");a.className="nav-item",a.innerHTML='<i class="fa-solid fa-calendar-week"></i> This Week';const s=document.createElement("button");s.className="priority",s.innerHTML='<i class="fa-solid fa-exclamation"></i> Priority';const c=document.createElement("div");c.classList.add("subnav","nav-items"),t.append(n,a,s);const i=document.createElement("button");i.classList.add("nav-item","priority-item"),i.innerText="High";const d=document.createElement("button");d.classList.add("nav-item","priority-item"),d.innerText="Medium";const o=document.createElement("button");return o.classList.add("nav-item","priority-item"),o.innerText="Low",c.append(i,d,o),e.append(t,c),e})()),e.appendChild((()=>{const e=document.createElement("div");e.className="projects",e.innerHTML="<h2>Projects</h2>";const t=document.createElement("div");t.classList.add("project-items","nav-items");const n=document.createElement("button");return n.classList.add("btn-add-project"),n.innerHTML='<i class="fa-solid fa-plus"></i> Add new project',e.append(t,n),e})()),document.querySelector("#sidemenu").appendChild(e)}()})();