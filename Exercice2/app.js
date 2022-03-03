function couleur(){
    var n=document.getElementById("sof");
var n2=document.getElementById("couleur");
n.style.color=n2.value;

}
function texte(){
    
var n=document.getElementById("sof");
var n3=document.getElementById("texte");
n.style.fontSize=n3.value+"px";

}
function police(){
    const select=document.querySelector("#select");
    var n=document.getElementById("sof");
    n.style.fontStyle=select.value;
}
