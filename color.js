
    const can=document.getElementById("Canvas");
    const cont=can.getContext("2d");
     var swatches =document.getElementsByClassName('swatch');

//    var colors=['black','grey','white','red','orange','yellow','green','blue','indigo','violet'];
//    for(var i=0,n=colors.length;i<n;i++){
//         var swatch = document.createElement('div');
//         swatch.style.backgroundColor=colors[i];
//         swatch.addEventListener('click',setSwatch);
//         var a= document.getElementById('colors').appendChild(swatch);
//         console.log(a);
//     }

   for(var i=0,n=swatches.length;i<n;i++){
        swatches[i].addEventListener('click',setSwatch);
   }

function setColor(color){
    cont.fillStyle=color;
    cont.strokeStyle=color;
    //console.log('hello!');
    var active=document.getElementsByClassName('active');
    if(active){
        active.className='swatch';
         console.log(active.className);
    }
}

function setSwatch(a){
    var swatch=a.target;
    setColor(swatch.style.backgroundColor);

    swatch.className +='active';
    //console.log(]);
}
