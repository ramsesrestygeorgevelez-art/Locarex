// LocationProvider.js
import LocationGetResult from "./LocationGetResult.js";

export default class LocationProvider {
  constructor(name = "unknown") {
    this.name = name;
  }

  getCurrentLocation() {
    return Promise.reject(new Error("getCurrentLocation() not implemented"));
  }

  reverseGeocode(lat, lng) {
    return Promise.reject(new Error("reverseGeocode() not implemented"));
  }

  searchNearby(query, lat, lng) {
    return Promise.reject(new Error("searchNearby() not implemented"));
  }
}