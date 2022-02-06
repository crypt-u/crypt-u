(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.un16');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un17');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un19');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un20');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un21');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un22');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un24');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un26');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un27');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un28');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un29');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un30');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un32');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un33');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un34');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un36');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un37');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un38');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un40');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un41');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un42');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un44');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un45');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un46');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/video-480.png':'images/video-240.png');
var a='data-src';var e=document.querySelector('.un47');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/pasted-image-366.jpg':'images/pasted-image-183.jpg');
var e=document.querySelector('.un13');e.setAttribute('src',(dpi>1)?'images/video-660.png':'images/video-330.png');
var e=document.querySelector('.un14');e.setAttribute('src',(dpi>1)?'images/video-660.png':'images/video-330.png');};
if(!window.HTMLPictureElement){r();}
wl=new woolite();
wl.init();
wl.addAnimation($('.un1'), "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.un2'), "1.00s", "3.10s", 1, 100);
wl.addAnimation($('.un3'), "1.00s", "5.00s", 1, 100);
wl.addAnimation($('.un4'), "1.00s", "6.00s", 1, 100);
wl.addAnimation($('.un5'), "1.00s", "7.00s", 1, 100);
wl.addAnimation($('.un6'), "1.00s", "8.00s", 1, 100);
wl.addAnimation($('.un7'), "1.00s", "9.00s", 1, 100);
wl.addAnimation($('.un8'), "1.00s", "10.00s", 1, 100);
wl.addAnimation($('.un9'), "1.00s", "11.00s", 1, 100);
wl.addAnimation($('.un10'), "1.00s", "12.00s", 1, 100);
wl.addAnimation($('.un11'), "1.00s", "12.00s", 1, 100);
wl.addAnimation($('.un12'), "1.00s", "12.00s", 1, 100);
wl.addAnimation($('.un15'), "1.00s", "5.00s", 1, 100);
wl.addAnimation($('.un18'), "1.00s", "6.00s", 1, 100);
wl.addAnimation($('.un23'), "1.00s", "7.00s", 1, 100);
wl.addAnimation($('.un25'), "1.00s", "8.00s", 1, 100);
wl.addAnimation($('.un31'), "1.00s", "9.00s", 1, 100);
wl.addAnimation($('.un35'), "1.00s", "10.00s", 1, 100);
wl.addAnimation($('.un39'), "1.00s", "11.00s", 1, 100);
wl.addAnimation($('.un43'), "1.00s", "12.00s", 1, 100);
wl.start();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un48 source');ldsrcset('.un49 source');ldsrcset('.un50 source');ldsrcset('.un51 source');ldsrcset('.un52 source');ldsrcset('.un53 source');ldsrcset('.un54 source');ldsrcset('.un55 source');ldsrcset('.un56 source');ldsrcset('.un57 source');ldsrcset('.un58 source');ldsrcset('.un59 source');ldsrcset('.un60 source');ldsrcset('.un61 source');ldsrcset('.un62 source');ldsrcset('.un63 source');ldsrcset('.un64 source');ldsrcset('.un65 source');ldsrcset('.un66 source');ldsrcset('.un67 source');ldsrcset('.un68 source');ldsrcset('.un69 source');ldsrcset('.un70 source');ldsrcset('.un71 source');ldsrcset('.un72 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}