!function(){var a=location.pathname.match(/\/(manual\/.*\.html)$/);if(a){var t=a[1],n='.navigation .manual-toc li[data-link="'+t+'"]',e=n+"{ display: block; }\n";e+=n+".indent-h1 a { color: #039BE5 }";var l=document.createElement("style");l.textContent=e,document.querySelector("head").appendChild(l)}}();