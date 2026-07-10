function copyPromo(){

let promo=document.getElementById("promo").innerText;

navigator.clipboard.writeText(promo);

let old=promo;

document.getElementById("promo").innerText="Скопировано!";

setTimeout(()=>{

document.getElementById("promo").innerText=old;

},1500);

}
function openWheelPopup(){
    document
    .getElementById("wheelModal")
    .classList.add("active");
}

function closeWheelPopup(){
    document
    .getElementById("wheelModal")
    .classList.remove("active");
}

window.addEventListener("click",(e)=>{

    const modal =
    document.getElementById("wheelModal");

    if(e.target === modal){
        closeWheelPopup();
    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){
        closeWheelPopup();
    }

});
