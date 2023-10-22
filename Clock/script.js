
let hrs=document.querySelector("#hrs");
let mins=document.querySelector("#mins");
let secs=document.querySelector("#secs");
setInterval(()=>{
    let date=new Date();
 hrs.innerHTML=(date.getHours()<10? "0" :"")+date.getHours();
 mins.innerHTML=(date.getMinutes()<10? "0" :"")+date.getMinutes();
 secs.innerHTML=(date.getSeconds()<10? "0" :"")+date.getSeconds();
},1000);
