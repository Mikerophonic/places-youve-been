// Business Logic for TravelLog ---------
function TravelLog() {
    this.places = {};
    this.currentId = 0;
  }
  
TravelLog.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
  };

TravelLog.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
  
TravelLog.prototype.findLog = function(id) {
    if (this.places[id] !== undefined) {
        return this.places[id]
    }
    return false;
};


// Business Logic for Places ---------
function Place(location, time, notes) {
    this.location = location;
    this.time = time;
    this.notes = notes;
  }
  
Place.prototype.locationLog = function() {
    return this.location + " " + this.time + " " + this.notes;
  };

// User Interface Logic ---------

let travelLog = new TravelLog();

function listPlaces(travelLogToDisplay) {
  let placesDiv = document.querySelector("div#places");
  placesDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(travelLogToDisplay.places).forEach(function(key) {
    const place = travelLogToDisplay.findLog(key);
    const li = document.createElement("li");
    li.append(place.locationLog());
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  placesDiv.append(ul);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedPlace = document.querySelector("input#new-place").value;
  const inputtedTime = document.querySelector("input#new-time").value;
  const inputtedNotes = document.querySelector("input#new-notes").value;
  let newPlace = new Place(inputtedPlace, inputtedTime, inputtedNotes);
  travelLog.addPlace(newPlace);
  listPlaces(travelLog);
}

window.addEventListener("load", function (){
  document.querySelector("form#new-location").addEventListener("submit", handleFormSubmission);
});