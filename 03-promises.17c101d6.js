!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form");function a(e,n){var t={position:e,delay:n},o=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){o?e(t):r(t)}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();var t=Number(u.delay.value);console.log(Number(u.step.value)),(t<0||Number(u.step.value)<0||Number(u.amount.value)<=0)&&e(i).Notify.failure("Enter a number greater than 0!");for(var o=1;o<=u.amount.value;o+=1)a(o,t).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=Number(u.step.value)}))}();
//# sourceMappingURL=03-promises.17c101d6.js.map