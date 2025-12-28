// SearchNearby.js
import LocationGetResult from "./LocationGetResult.js";

export default class SearchNearby {
  constructor(options = {}) {
    this.apiKey = options.apiKey || null;
    this.provider = options.provider || null;
  }

  search(query, lat, lng) {
    if (this.provider) {
      return this.provider.search(query, lat, lng).then(results =>
        results.map(r => new LocationGetResult({
          lat: r.lat,
          lng: r.lng,
          address: r.address,
          source: this.provider.name || "custom"
        }))
      );
    }

    return Promise.resolve([
      new LocationGetResult({
        lat: lat + 0.001,
        lng: lng + 0.001,
        address: `${query} Demo Place 1`,
        source: "demo"
      }),
      new LocationGetResult({
        lat: lat - 0.001,
        lng: lng - 0.001,
        address: `${query} Demo Place 2`,
        source: "demo"
      })
    ]);
  }
}