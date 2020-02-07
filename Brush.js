var setBrush= function(newBrush){
    if(newBrush<minBrush)
        newBrush=minBrush;

     else if(newBrush>maxBrush){
         console.log(newBrush);
         newBrush=maxBrush;
     }
    
    var x=newBrush;
    console.log(x);
    cont.lineWidth=x;
    Size.innerHTML=x;
    console.log(Size.innerHTML);
    

}

var minBrush=1;
var maxBrush=100;
var value=5;


var Size=document.getElementById('SIZE');
console.log(Size);
var defaultBrush=document.getElementById("SIZE").innerHTML
x= parseInt(defaultBrush, 10);
console.log(defaultBrush);
var Plus=document.getElementById('plus');
var Minus=document.getElementById('minus');
//var x=20;
function incre(){
    x=x+value;
    if(x>100) x=100;
    //defaultBrush=defaultBrush+value;
    setBrush(x);
}

function decr(){
    x=x-value;
    //defaultBrush=defaultBrush-value;
    setBrush(x);
}

Plus.addEventListener('click',incre);

Minus.addEventListener('click',decr);
    


