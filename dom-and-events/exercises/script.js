function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function() {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", function () {
        missionAbort.style.background = "red";
    });

    missionAbort.addEventListener("mouseout", function() {
        missionAbort.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", function() {
        const confirmation = confirm("Are you sure you want to abort the mission?");
        if (confirmation) {
            paragraph.innerHTML = '<strong>Mission aborted!</strong> Space shuttle returning home.'
        }
    });


    
}

window.addEventListener("load", init);
