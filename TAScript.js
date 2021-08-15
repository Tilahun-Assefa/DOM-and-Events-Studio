window.addEventListener("load",function ready () {
    console.log ("DOM is ready");
    let liftoff= document.getElementById("takeoff");
    let landShip= document.getElementById("landing");
    let abortMission= document.getElementById("missionAbort")
    let status=document.getElementById("flightStatus");


    let image = document.getElementById("rocket");
    image.style.position= "absolute";
    image.style.bottom = "0px";
    image.style.left= "0px";
    let offset=0;
    let altitude = 0;
    let shuttleHeight=this.document.getElementById("spaceShuttleHeight");
    liftoff.addEventListener("click", function(){
        let result = confirm ("Confirm that the shuttle is ready for takeoff.");        
        if (result){
            inAir=true;
           status.innerHTML="Shuttle in flight.";
           document.getElementById("shuttleBackground").style.backgroundColor="blue";
           shuttleHeight.innerHTML='10000';
        }
        if (inAir){
            document.getElementById("right").addEventListener("click", function(){      
                offset = parseInt(image.style.left) + 10 +'px';
                if (parseInt(image.style.left)< 340){
                    image.style.left = offset;
                }      
            });
            document.getElementById("left").addEventListener("click", function(){
                offset = parseInt(image.style.left)-10+"px";
                if (parseInt(image.style.left) > -20){
                image.style.left=offset;
                }
            });
            document.getElementById("up").addEventListener("click", function(){            
                offset = parseInt(image.style.bottom)+10+"px";
                if (parseInt(image.style.bottom)<250){
                    shuttleHeight.innerHTML= parseInt(shuttleHeight.innerHTML)+1000;
                    image.style.bottom = offset;
                }
            });
            document.getElementById("down").addEventListener("click", function(){
                offset = parseInt(image.style.bottom)-10+"px";
                if (parseInt(image.style.bottom)>0){        
                shuttleHeight.innerHTML= parseInt(shuttleHeight.innerHTML)-1000;
                image.style.bottom = offset;
                }
            });  
        }

    });

    landShip.addEventListener("click", function(){
        inAir=false;
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML= "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor="green";
        shuttleHeight.innerHTML = '0';
        image.style.bottom = "0px";
        image.style.left= "0px";
    });
    abortMission.addEventListener("click", function(){
        inAir=false;
        let result = confirm ("Confirm that you want to abort the mission.");
        if (result){
           status.innerHTML="Mission Aborted.";
           document.getElementById("shuttleBackground").style.backgroundColor="green";
           shuttleHeight.innerHTML = "0";
           image.style.bottom = "0px";
           image.style.left= "0px";
        }
    }); 

});