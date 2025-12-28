// LocationCache.js
export default class LocationCache {
  constructor() {
    this.cache = new Map();
  }
  get(key) { return this.cache.get(key); }
  set(key, value) { this.cache.set(key, value); }
  has(key) { return this.cache.has(key); }
  clear() { this.cache.clear(); }
}