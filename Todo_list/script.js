"use strict";

const tasks=document.getElementsByClassName('tasks')
const data=document.getElementById('input-bx').value.trim();
function addTask()
{
    const data=document.getElementById('input-bx').value.trim();
    //const tasks=document.querySelector('tasks') no [0]
    if(data==""){return;}
    const li=document.createElement("li");
    li.innerText=data;
    const icon=document.createElement('span');
    icon.innerHTML='\u00d7';
    li.appendChild(icon)
    document.getElementById('input-bx').value="";
    tasks[0].appendChild(li);
}

tasks[0].addEventListener('click',function(e){
    if(e.target.tagName=='LI')
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=='SPAN')
    {
        e.target.parentElement.remove();
    }
},false)