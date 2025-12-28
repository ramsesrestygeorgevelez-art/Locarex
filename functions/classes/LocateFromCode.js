// LocateFromCode.js
import LocationGetResult from "./LocationGetResult.js";

export default class LocateFromCode {
  constructor(options = {}) {
    this.providers = options.providers || [];
  }

  resolve(code) {
    if (!code || typeof code !== "string") {
      return Promise.reject(new Error("Invalid code"));
    }

    let chain = Promise.reject(new Error("No provider could resolve code: " + code));
    this.providers.forEach(provider => {
      chain = chain.catch(() => provider.resolve(code));
    });
    return chain;
  }

  addProvider(provider) {
    this.providers.push(provider);
  }

  static StaticProvider(map) {
    return {
      resolve(code) {
        if (map[code]) {
          return Promise.resolve(new LocationGetResult({
            lat: map[code].lat,
            lng: map[code].lng,
            address: map[code].address,
            source: "static-map"
          }));
        }
        return Promise.reject(new Error("Code not found in static map"));
      }
    };
  }
}