rand=Math.round(Math.random()*10);
var x=-1;
var i=0;
while ((i<3) && (x!=rand)){
x=prompt('Donner le nombre:');
i++;
}
var n1=document.getElementById("sof");
var n2=document.createElement("div");
if (x==rand){
n2.innerHTML+="Vous avez gagné";
}
else {
    n2.innerHTML+="Vous avez perdu";
}
n1.appendChild(n2);

var n3=document.createElement("p");
n3.innerHTML+="Voulez vouz rejouer";
n4=document.createElement("button");
n4.innerHTML+="oui";
n1.appendChild(n3);
n1.appendChild(n4);
n5=document.createElement("button");
n5.innerHTML+="non";
n1.appendChild(n5);


n4.addEventListener('click',()=>
{
    setTimeout("location.reload(true);",1000);
}


);

