!function(){var t=document.body,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");var a=null;e.addEventListener("click",(function(){a=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.background=e}),1e3),e.toggleAttribute("disabled")})),n.addEventListener("click",(function(){clearInterval(a),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.9fae32de.js.map
