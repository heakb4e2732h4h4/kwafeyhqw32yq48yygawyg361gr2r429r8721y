function copyPromo(){

let promo=document.getElementById("promo").innerText;

navigator.clipboard.writeText(promo);

let old=promo;

document.getElementById("promo").innerText="Скопировано!";

setTimeout(()=>{

document.getElementById("promo").innerText=old;

},1500);

}