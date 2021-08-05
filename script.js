// Write your JavaScript code here!


window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(window.document,pickedPlanet.name,pickedPlanet.diameter,pickedPlanet.star,pickedPlanet.distance,pickedPlanet.moons,pickedPlanet.image)
    });
    let form = document.querySelector("form");
    form.addEventListener("submit",function (event) {
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        formSubmission(window.document,list,pilotNameInput.value,copilotNameInput.value,fuelLevelInput.value,cargoMassInput.value);
    }); 
    
 });