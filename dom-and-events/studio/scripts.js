function init() {
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const flightStatusSetting = document.getElementById("flightStatus");
    const abortMissionButton = document.getElementById("missionAbort");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    const heightDisplay = document.getElementById("spaceShuttleHeight");

    let shuttleHeight = 0;

    resetRocketPosition();

    takeoffButton.addEventListener('click', function() {
        const confirmTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeoff) {
            flightStatusSetting.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight += 10000;
            heightDisplay.innerHTML = shuttleHeight;
        }
    });

    landingButton.addEventListener('click', function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatusSetting.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight = 0;
        heightDisplay.innerHTML = shuttleHeight;
        resetRocketToBottomCenter(); 
    });

    abortMissionButton.addEventListener('click', function() {
        const confirmAbort = confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatusSetting.innerHTML = "Mission Aborted!";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight = 0;
            heightDisplay.innerHTML = shuttleHeight;
            resetRocketPosition(); 
        }
    });

    upButton.addEventListener('click', function() {
        if (shuttleHeight < 50000) {
            shuttleHeight += 10000;
            heightDisplay.innerHTML = shuttleHeight;
            moveRocket(0, -10); 
        }
    });

    downButton.addEventListener('click', function() {
        if (shuttleHeight > 0) {
            shuttleHeight -= 10000;
            heightDisplay.innerHTML = shuttleHeight;
            moveRocket(0, 10); 
        }
    });

    rightButton.addEventListener('click', function() {
        moveRocket(10, 0); 
    });

    leftButton.addEventListener('click', function() {
        moveRocket(-10, 0); 
    });

    function moveRocket(xChange, yChange) {
        const currentLeft = parseInt(window.getComputedStyle(rocket).getPropertyValue("left")) || 0;
        const currentTop = parseInt(window.getComputedStyle(rocket).getPropertyValue("top")) || 0;
        const backgroundWidth = shuttleBackground.clientWidth;
        const backgroundHeight = shuttleBackground.clientHeight;
        const rocketHeight = rocket.clientHeight;
        const rocketWidth = rocket.clientWidth;

        const newLeft = currentLeft + xChange;
        const newTop = currentTop + yChange;

        if (newLeft >= 0 && newLeft <= backgroundWidth - rocketWidth) {
            rocket.style.left = newLeft + "px";
        }

        if (newTop >= 0 && newTop <= backgroundHeight - rocketHeight) {
            rocket.style.top = newTop + "px";
        }
    }

    function resetRocketPosition() {
        const backgroundWidth = shuttleBackground.clientWidth;
        const rocketWidth = rocket.clientWidth;

        const leftPosition = (backgroundWidth / 2) - (rocketWidth / 2);
        rocket.style.left = leftPosition + "px"; 
        rocket.style.top = "0px"; 
    }

    function resetRocketToBottomCenter() {
        const backgroundWidth = shuttleBackground.clientWidth;
        const rocketWidth = rocket.clientWidth;
        const backgroundHeight = shuttleBackground.clientHeight;
        const rocketHeight = rocket.clientHeight;

        const leftPosition = (backgroundWidth / 2) - (rocketWidth / 2);
        rocket.style.left = leftPosition + "px"; 
        rocket.style.top = (backgroundHeight - rocketHeight) + "px"; 
    }
}

window.addEventListener('load', init);

