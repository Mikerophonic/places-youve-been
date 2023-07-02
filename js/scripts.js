/// Business Logic for Travel Log ///

//----Creates place construct
function travelLog() {
    this.place = {};
}

/// Business Log for Places ///

//----Creates new key in travelLog and asggins it a value //
travelLog.prototype.newPlace = function(newPlace) {
    this.place[place.Location] = place;
};

//----Creates newPlace object in travelLog//
function newPlace(Location, Time, Notes) {
    this.Location = Location;
    this.Time = Time;
    this.Notes = Notes;
}

newPlace.prototype.Location = function () {
    return this.Location + " " + this.Time + " " + this.Notes;
};
