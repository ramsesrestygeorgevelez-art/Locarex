// GeoFormatter.js
export default class GeoFormatter {
  static coordsToString(lat, lng) {
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }

  static resultSummary(result) {
    return `${result.address || "Unknown"} [${this.coordsToString(result.lat, result.lng)}]`;
  }
}