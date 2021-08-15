// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const take_off = document.getElementById("takeoff");
    const flight_status = document.getElementById("flightStatus");
    const shuttle_background = document.getElementById("shuttleBackground");
    const shuttle_height = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const aborted = document.getElementById("missionAbort");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";

    let curPos = 0;
    let tookOff = false;

    take_off.addEventListener("click", function (event) {
        let resp = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (resp) {
            flight_status.innerHTML = "Shuttle in flight.";
            shuttle_background.style.backgroundColor = "blue";
            shuttle_height.innerHTML = Number(shuttle_height.innerHTML) + 10000;
            rocket.style.zIndex = "2";
            tookOff = true;
        }
    });

    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flight_status.innerHTML = "The shuttle has landed.";
        shuttle_background.style.backgroundColor = "";
        shuttle_height.innerHTML = 0;
        rocket.style.bottom = "0px";
        rocket.style.border = "";
        tookOff = false;
    });

    aborted.addEventListener("click", function (event) {
        let resp = window.confirm("Confirm that you want to abort the mission.");
        if (resp) {
            flight_status.innerHTML = "Mission aborted.";
            shuttle_background.style.backgroundColor = "";
            shuttle_height.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.border = "";
            tookOff = false;
        }
    });

    up.addEventListener("click", function () {
        curPos = parseInt(rocket.style.bottom);
        if(tookOff && curPos < shuttle_background.clientHeight*0.8){
            curPos += 10;
            shuttle_height.innerHTML = Number(shuttle_height.innerHTML) + 10000;
        }        
        rocket.style.bottom = curPos + "px";
    });

    down.addEventListener("click", function () {
        if (shuttle_height.innerHTML  >=10000) {
            shuttle_height.innerHTML = Number(shuttle_height.innerHTML) - 10000;
        }
        curPos = parseInt(rocket.style.bottom);
        if (tookOff && curPos > 0) {
            curPos -= 10;
        }
        rocket.style.bottom = curPos + "px";
    });

    right.addEventListener("click", function () {
        curPos = parseInt(rocket.style.left);
        if(tookOff && curPos < shuttle_background.clientWidth*0.9){
            curPos += 10;
        }        
        rocket.style.left = curPos + "px";
    });

    left.addEventListener("click", function () {
        curPos = parseInt(rocket.style.left);
        if (tookOff && curPos > 0) {
            curPos -= 10
        }
        rocket.style.left = curPos + "px";
    });
}

window.addEventListener("load", init);