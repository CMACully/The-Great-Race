// Programmer: Chauntel Atchley Cully
// Create a page that simulates a race between two/more players by referencing objects on a page using browser object model, trapping events, managing/creating timers and intervals, and using JavaScript.
// Date Created: 1/03/2022 
// Date Final Updated: 1/11/2022

//#region Setting up the window addEventListerners for load functions.
window.addEventListener('load', function () {
    this.document.getElementById('tompose').addEventListener('click', setUpRace)
})
window.addEventListener('load', function () {
    this.document.getElementById('jerrypose').addEventListener('click', setUpRace)
})
window.addEventListener('load', function () {
    this.document.getElementById('info').innerHTML = "Hello there! Please click on either Tom or Jerry to begin the race!";
})
//#endregion 

//#region Setting up the Global variables
var posTom;
var posJerry;
var tomStart = document.getElementById('tompose');
var jerryStart = document.getElementById('jerrypose');
var winner = document.getElementById('winner');
var lgtcolor = document.getElementById('beginRace');
//#endregion

// SetUpRace function.. well sets up the race after a character has been clicked on. The race will not begin once this has been done and then the light may be clicked on to initiate the BeginRace function.
function setUpRace() {
    posTom = 200;
    posJerry = 200;
    tomStart.style.opacity = 1;
    jerryStart.style.opacity = 1;
    tomStart.style.left = posTom + 'px';
    jerryStart.style.left = posJerry + 'px';
    jerryStart.style.marginLeft = 200 + 'px'
    tomStart.src = "images//tomrun400pxw.png";
    jerryStart.src = "images//jerryrun.png";
    lgtcolor.src = "images//redlightbtn.png";
    lgtcolor.style.marginTop = 1.5 + 'px';
    lgtcolor.style.marginBottom = 210 + 'px';
    winner.style.marginBottom = 0;
    document.getElementById('beginRace').addEventListener('click', beginRace);
    info.innerHTML = "They're in position! Seems the ceiling light is their whistle.";
}

// BeginRace funtion starts the timer/interval and image movement once the light has been clicked form the SetUpRace function
function beginRace() {
    setUpRace();
    var timer = setInterval(fps, 100);
    lgtcolor.src = "images//greenlightbtn.png";
    info.innerHTML = "And they're off! Who will make it to the savory winnings?"

    function fps() {
        if (posTom > 1500 || posJerry > 1500) {
            clearInterval(timer);
            winners();
        } else {
            var rdmPosTom = Math.floor(Math.random() * 80);
            var rdmPosJerry = Math.floor(Math.random() * 80);
            posTom = (posTom + rdmPosTom);
            posJerry += rdmPosJerry;
            tomStart.style.left = posTom + 'px';
            jerryStart.style.left = posJerry + 'px';
        }
    }
}

// Winners funciton displaying the winner based on whos position is greater.
// I have also made it to where the light is "replaced" with the winners image. So once the winners image is clicked on then the light will return in the SetUpRace function.
function winners() {
    if (posTom > posJerry) {
        tomStart.style.opacity = 0.5;
        jerryStart.style.opacity = 0.5;
        lgtcolor.src = "#";
        winner.src = "images//tomwin.png";
        winner.style.marginBottom = -336 + 'px';
        info.innerHTML = "Tom is the winner! He can now enjoy his fantastic tuna."
        document.getElementById('winner').addEventListener('click', function () {
            winner.src = "";
            setUpRace();
        });
    } else if (posJerry > posTom) {
        jerryStart.style.opacity = 0.5;
        tomStart.style.opacity = 0.5;
        lgtcolor.src = "#";
        winner.src = "images//jerrywin.png";
        winner.style.marginBottom = -180 + 'px';
        info.innerHTML = "Jerry is the winner! He can now enjoy his fantastic cheese."
        document.getElementById('winner').addEventListener('click', function () {
            winner.src = "";
            setUpRace();
        });
    }
}

//#region This was longer code to display winner shortened to a winner function...

// posTom > posJerry ? tomWins() : jerryWins()

// function tomWins() {
//     tomStart.style.opacity = 0.5;
//     jerryStart.style.opacity = 0.5;
//     winner.src = "images//tomwin.png";
//     document.getElementById('winner').addEventListener('click', function () {
//         winner.src = "";
//         setUpRace();
//     });
// }

// function jerryWins() {
//     jerryStart.style.opacity = 0.5;
//     tomStart.style.opacity = 0.5;
//     winner.src = "images//jerrywin.png";
//     document.getElementById('winner').addEventListener('click', function () {
//         winner.src = "";
//         setUpRace();
//     });
// }
//#endregion
