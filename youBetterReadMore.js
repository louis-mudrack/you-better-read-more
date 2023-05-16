////
////    You Better Read More - JS
////    V 1.0 by Louis Mudrack
////    05/16/2023
////
////////////////////

let e=document.querySelectorAll(".read-more"),t=[];for(let l=0;l<e.length;l++)e[l].classList.add("collapsed"),t.push(e[l]);t.forEach((e=>{let t=e.querySelector(".read-more-teaser");const l=t.firstElementChild.textContent;let n=t.firstElementChild.textContent.substring(0,100);if(t.firstElementChild.innerHTML.length>100){t.firstElementChild.textContent=n+"...";let s=document.createElement("button");t.appendChild(s),s.textContent="Read more",s.classList.add("btn"),s.classList.add("read-more-btn"),s.style.width="100%",s.addEventListener("click",(function(){e.classList.contains("collapsed")&&(s.onclick=function expand(){t.firstElementChild.textContent=l,e.classList.add("expanded"),e.classList.remove("collapsed"),s.textContent="Collapse",s.onclick=function collapse(){t.firstElementChild.textContent=n+"...",e.classList.add("collapsed"),e.classList.remove("expanded"),s.textContent="Read more"}})})),s.click()}}));
