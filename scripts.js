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
    let curPos = 0;

    take_off.addEventListener("click", function (event) {
        let resp = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (resp) {
            flight_status.innerHTML = "Shuttle in flight.";
            shuttle_background.style.backgroundColor = "blue";
            shuttle_height.innerHTML = Number(shuttle_height.innerHTML) + 10000;
            rocket.style.zIndex = "2";
            rocket.style.top = "0px";
            rocket.style.border = "3px solid red";
        }
    });

    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flight_status.innerHTML = "The shuttle has landed.";
        shuttle_background.style.backgroundColor = "";
        shuttle_height.innerHTML = 0;
        rocket.style.top = "250px";
        rocket.style.border = "";
    });

    aborted.addEventListener("click", function (event) {
        let resp = window.confirm("Confirm that you want to abort the mission.");
        if (resp) {
            flight_status.innerHTML = "Mission aborted.";
            shuttle_background.style.backgroundColor = "";
            shuttle_height.innerHTML = 0;
            rocket.style.top = "250px";
            rocket.style.border = "";
        }

    });

    up.addEventListener("click", function () {
        shuttle_height.innerHTML = Number(shuttle_height.innerHTML) + 10000;
        rocket.style.top = "0px";
    });
    down.addEventListener("click", function () {
        if (shuttle_height.innerHTML - 10000 >= 0) {
            shuttle_height.innerHTML = Number(shuttle_height.innerHTML) - 10000;
        }
        if (shuttle_height.innerHTML === 0) {

        }
        rocket.style.top = "250px";
    });

    right.addEventListener("click", function () {
        curPos += 10
        rocket.style.left = curPos + "px";

    });
    left.addEventListener("click", function () {
        curPos -= 10
        rocket.style.left = curPos + "px";
    });
}

window.addEventListener("load", init);