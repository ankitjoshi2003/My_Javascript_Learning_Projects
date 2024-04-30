const app=document.querySelector(".app");
(()=>{app.innerHTML=localStorage.getItem("data")})();
function create()
{
    const parent=document.createElement('div');
    const note=document.createElement('P');
    const img=document.createElement('IMG');
    parent.classList.add("parent");
    note.classList.add("note");
    img.classList.add("del");
    img.src="images/delete.png";
    parent.appendChild(note);
    parent.appendChild(img);
    app.appendChild(parent);
    note.setAttribute("contentEditable",true);
    
   // img.addEventListener('click',(e)=>{e.target.parentElement.remove();update();})
   // note.addEventListener('keyup',(e)=>{console.log("updated");update();})
   // this doesn't work because eventlistner are removed when html element is stored in localstorage
}


function update()
{
    localStorage.setItem('data',app.innerHTML);
}

app.addEventListener('click',(e)=>{
    if(e.target.tagName=='IMG'){e.target.parentElement.remove();update();}
    else if(e.target.tagName=='P')
    {
        notes=document.querySelectorAll('.parent');
        notes.forEach(element => {
            element.onkeyup=function()
            {
                update();
            }
        });
    }
})