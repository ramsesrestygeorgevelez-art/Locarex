// LocationGetResult.js
export default class LocationGetResult {
  constructor({ lat, lng, address = null, source = "unknown", timestamp = new Date(), meta = {} }) {
    this.lat = lat;
    this.lng = lng;
    this.address = address;
    this.source = source;
    this.timestamp = timestamp;
    this.meta = meta;
  }

  toString() {
    return this.address
      ? `${this.address} (${this.lat}, ${this.lng})`
      : `(${this.lat}, ${this.lng})`;
  }

  toJSON() {
    return {
      lat: this.lat,
      lng: this.lng,
      address: this.address,
      source: this.source,
      timestamp: this.timestamp.toISOString(),
      meta: this.meta
    };
  }

  static fromGeolocation(pos) {
    return new LocationGetResult({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
      source: "browser",
      meta: {
        accuracy: pos.coords.accuracy,
        altitude: pos.coords.altitude,
        heading: pos.coords.heading,
        speed: pos.coords.speed
      }
    });
  }
}