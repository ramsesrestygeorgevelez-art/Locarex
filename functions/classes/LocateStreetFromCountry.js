// LocateStreetFromCountry.js
import LocationGetResult from "./LocationGetResult.js";

export default class LocateStreetFromCountry {
  constructor(options = {}) {
    this.provider = options.provider || null;
  }

  resolve(country, street) {
    if (!country || !street) {
      return Promise.reject(new Error("Both country and street are required"));
    }

    if (this.provider) {
      return this.provider.resolve(country, street);
    }

    const query = encodeURIComponent(`${street}, ${country}`);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          const place = data[0];
          return new LocationGetResult({
            lat: parseFloat(place.lat),
            lng: parseFloat(place.lon),
            address: place.display_name,
            source: "osm"
          });
        }
        throw new Error(`Street not found: ${street}, ${country}`);
      });
  }
}