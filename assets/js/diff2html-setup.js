let diff2HtmlTheme=determineComputedTheme();document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&document.querySelectorAll("pre>code.language-diff2html").forEach((e=>{const t=e.textContent,d=e.parentElement;d.classList.add("unloaded");let l=document.createElement("div");l.classList.add("diff2html"),d.after(l);new Diff2HtmlUI(l,t,{colorScheme:diff2HtmlTheme,drawFileList:!0,highlight:!0,matching:"lines"}).draw()}))}));