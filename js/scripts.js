// Business Logic for TravelLog ---------
function TravelLog() {
    this.places = {};
    this.currentId = 0;
  }
  
TravelLog.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.Location] = place;
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