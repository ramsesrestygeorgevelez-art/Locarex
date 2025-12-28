// MapLocator.js
import LocationGetResult from "./LocationGetResult.js";

export default class MapLocator {
  constructor({ containerId, provider, defaultCenter = { lat: 0, lng: 0 }, defaultZoom = 2 }) {
    this.containerId = containerId;
    this.provider = provider;
    this.defaultCenter = defaultCenter;
    this.defaultZoom = defaultZoom;
    this.map = null;
    this.markers = [];
  }

  init() {
    if (!this.provider) throw new Error("No map provider specified");
    this.map = this.provider.createMap(this.containerId, {
      center: [this.defaultCenter.lat, this.defaultCenter.lng],
      zoom: this.defaultZoom
    });
  }

  addMarker(location, options = {}) {
    if (!this.map) throw new Error("Map not initialized");
    const marker = this.provider.createMarker([location.lat, location.lng], {
      title: location.address || `${location.lat}, ${location.lng}`,
      ...options
    });
    marker.addTo(this.map);
    this.markers.push(marker);
    return marker;
  }

  centerOn(location, zoom = this.defaultZoom) {
    if (!this.map) throw new Error("Map not initialized");
    this.map.setView([location.lat, location.lng], zoom);
  }

  clearMarkers() {
    this.markers.forEach(m => this.provider.removeMarker(m));
    this.markers = [];
  }
}