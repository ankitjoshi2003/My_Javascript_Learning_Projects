const QR_CODE=document.querySelector("#qr_code");
const QR_CONT=document.querySelector(".qr_cont");
const link=document.querySelector("#link");

async function generate()
{
    if(link.value!="")
    {
    QR_CODE.addEventListener('load',()=>{  QR_CONT.classList.add("show"); QR_CODE.classList.add("img_show"); console.log(QR_CODE);})
    QR_CODE.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+link.value
    }
    return;
}