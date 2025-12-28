// ProviderAdapter.js
export default class ProviderAdapter {
  constructor(name, searchFn) {
    this.name = name;
    this.searchFn = searchFn;
  }

  async search(query, lat, lng) {
    return await this.searchFn(query, lat, lng);
  }
}