import"./assets/styles-BfA-lLuc.js";import{f,i as d}from"./assets/vendor-BbbuE1sJ.js";const D=t=>{const o=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:m,minutes:h,seconds:y}},n=t=>String(t).padStart(2,"0"),r=document.querySelector("#datetime-picker"),c=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let s=null,l=null;const k=t=>{s=t[0];const e=s<new Date;c.disabled=e,e&&d.error({title:"Error",message:"Please choose a date in the future!"})},q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:k};f(r,q);const E=()=>{const e=s-new Date;if(e<=0){r.disabled=!1,clearInterval(l),d.success({title:"Done",message:"Time counting is finished!"});return}const{days:a,hours:u,minutes:i,seconds:o}=D(e);S.textContent=n(a),p.textContent=n(u),C.textContent=n(i),b.textContent=n(o)},T=()=>{r.disabled=!0,c.disabled=!0,l=setInterval(E,1e3)};c.addEventListener("click",T);
//# sourceMappingURL=1-timer.js.map
