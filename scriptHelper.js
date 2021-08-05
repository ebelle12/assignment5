// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let destination = document.getElementById("missionTarget");
    destination.innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src= ${imageUrl}>
    `;
  
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if(isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        return;
    }
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }
    list.style.visibility = "visible";
    let pilotStat = document.getElementById("pilotStatus");
    pilotStat.innerHTML =`Pilot ${pilot} is ready for launch`;
    let copilotStat = document.getElementById("copilotStatus");
    copilotStat.innerHTML =`Co-pilot ${copilot} is ready for launch`;

    let fuelLevelStat = document.getElementById("fuelStatus");
    fuelLevelStat.innerHTML = "Fuel level high enough for launch";

    let cargoLevelStat = document.getElementById("cargoStatus");
    cargoLevelStat.innerHTML = "Cargo mass low enough for launch";

    let launchStat = document.getElementById("launchStatus");
    launchStat.innerHTML = "Shuttle is Ready for Launch";
    launchStat.style.color = "rgb(65, 159, 106)";

    if (Number(fuelLevel) < 10000) {
        fuelLevelStat.innerHTML = "Fuel level too low for launch";
        launchStat.innerHTML = "Shuttle Not Ready for Launch";
        launchStat.style.color = "rgb(199, 37, 78)";
    }
    if (Number(cargoLevel) > 10000) {
        cargoLevelStat.innerHTML = "Cargo mass too heavy for launch";
        launchStat.innerHTML = "Shuttle Not Ready for Launch";
        launchStat.style.color = "rgb(199, 37, 78)";
    }
}

async function myFetch() {
    let planetsReturned;
    let planetPromise = await fetch("https://handlers.education.launchcode.org/static/planets.json");

    planetsReturned = await planetPromise.json();

    return planetsReturned;
}

function pickPlanet(planets) {
    let pickedPlanet = Math.floor(Math.random() * planets.length);
    return planets[pickedPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
