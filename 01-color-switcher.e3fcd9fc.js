const t=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let d=null;e.addEventListener("click",(function(){d=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.background=e}),1e3),e.toggleAttribute("disabled"),o.removeAttribute("disabled")})),o.addEventListener("click",(function(){clearInterval(d),e.removeAttribute("disabled"),o.toggleAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.e3fcd9fc.js.map