/// Business Logic for Travel Log ///

//----Creates place construct
function travelLog() {
    this.place = {};
}

/// Business Log for Places ///

//----Creates new key in travelLog and asggins it a value //
travelLog.prototype.addNewPlace = function(newPlace) {
    this.newPlace[newPlace.Location] = newPlace;
};

//----Creates newPlace object in travelLog//
function NewPlace(Location, Time, Notes) {
    this.Location = Location;
    this.Time = Time;
    this.Notes = Notes;
}

newPlace.prototype.placeLog = function () {
    return this.Location + " " + this.Time + " " + this.Notes;
};


// Business Logic for TravelLog ---------
function TravelLog() {
    this.places = {};
  }
  
TravelLog.prototype.addPlace = function(place) {
    this.places[place.Location] = place;
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