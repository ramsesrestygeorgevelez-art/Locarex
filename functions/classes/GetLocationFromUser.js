// GetLocationFromUser.js
import LocationGetResult from "./LocationGetResult.js";
import { UserProvider } from "../../Locauser/classes/UserProvider.js";

export class LocateFromUser {
  constructor(defaultName = "Name24") {
    this.defaultName = defaultName;
  }

  /**
   * Get location from a user object or fallback UserProvider
   * @param {UserProvider} user - optional user provider instance
   * @returns {Promise<LocationGetResult>}
   */
  getLocation(user) {
    // If no user passed, create a default provider
    const provider = user || new UserProvider(this.defaultName);

    // Ask for permission and then resolve location
    return provider.permissionToUseLocation()
      .then(locationData => {
        // locationData should contain lat/lng/address
        return new LocationGetResult({
          lat: locationData.lat,
          lng: locationData.lng,
          address: locationData.address,
          source: "user-provider",
          meta: { user: provider.name }
        });
      })
      .catch(err => {
        throw new Error("Failed to get user location: " + err.message);
      });
  }
}