window.addEventListener("load",()=>{
    const can=document.querySelector("Canvas");
    const cont=can.getContext("2d");

    //Resizing 
    can.height=window.innerHeight;
    can.width=window.innerWidth;
    
    
    //variables
    let paint=false;

    function start(){
        paint=true;
    }
    function end(){
        paint=false;
        cont.beginPath();
    }
    //var x=20;
    //cont.lineWidth=x;
    //draw function
    function draw(p){
        
        if(!paint) return;
        cont.lineWidth=x;
        cont.lineCap="round";
        cont.lineTo(p.clientX,p.clientY);
        cont.stroke();
        // cont.strokeStyle=setSwatch();
    }
    
    can.addEventListener("mousedown",start);
    can.addEventListener("mouseup",end);
    can.addEventListener("mousemove",draw);
    
    can.addEventListener("touchmove", draw);
    can.addEventListener("touchstart",start);
    can.addEventListener("touchend",end);

    cont.font = "30px Arial";
    cont.strokeStyle = "indigo";
    cont.strokeText("Team Star Cluster!", 600,40);
    //cont.fillText("Team Star Cluster!", 600, 40,200);

});
