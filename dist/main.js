(()=>{"use strict";var e={};function t(){const e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("p"),a=document.createElement("button");return e.classList.add("hero"),t.innerHTML="Delicious pizza for your headtop!",n.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellateaque soluta tempora ipsa ipsum aliquid.",a.innerHTML="Order Now",e.append(t,n,a),e}function n(e,t,n){const a=document.createElement("div");a.classList.add("menu-item");const o=new Image;o.src=`./photos/${e}.png`,o.alt="alt",a.appendChild(o);const r=document.createElement("h2");r.innerHTML=e,a.appendChild(r);const c=document.createElement("p");return c.innerHTML=n,a.appendChild(c),a}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!t;)t=a[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;const a=document.querySelector("#content"),o=document.getElementById("home"),r=document.getElementById("menu"),c=document.getElementById("contact");function i(e,t){var n;a.replaceChildren(e),n=t,document.querySelectorAll(".nav").forEach((e=>{e.id!==n.id&&e.classList.remove("bold")})),n.classList.add("bold")}a.appendChild(t()),o.addEventListener("click",(()=>{i(t(),o)})),r.addEventListener("click",(()=>{i(function(){const e=document.createElement("div");return e.classList.add("menu"),e.append(n("Carne",0,"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),e.append(n("Colorato",0,"Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil")),e.append(n("Gamberi",0,"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil")),e.append(n("Pepe",0,"Tomato sauce, Mozarella, Chilli flakes, Olives, Basil")),e.append(n("Disgustoso",0,"Tomato sauce, Bacon, Pineapple, Olives, Basil")),e.append(n("Salsiccia",0,"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),e.append(n("Pomodoro")),e.append(n("Crema")),e}(),r)})),c.addEventListener("click",(()=>{i(function(){const e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("p"),a=new Image;return t.innerHTML="📞 123-456-789",n.innerHTML="🏠 Hollywood Boulevard 42, Los Angeles, USA",a.src="../src/photos/restaurant-location.png",e.append(t),e.append(n),e.append(a),e.classList.add("contact"),e}(),c)}))})();