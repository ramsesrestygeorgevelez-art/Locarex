// UserProvider.js
// Makes users, gets permissions, returns location data

export class UserProvider {
  constructor(name) {
    this.name = name;
  }

  /**
   * Request permission and get location
   * @returns {Promise<{lat:number, lng:number, address:string}>}
   */
  permissionToUseLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log("Latitude:", latitude, "Longitude:", longitude);

          // Example: build OpenStreetMap link
          const mapLink = document.getElementById("map-link");
          if (mapLink) {
            mapLink.href = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}`;
            mapLink.textContent = "View my location on a map";
          }

          resolve({
            lat: latitude,
            lng: longitude,
            address: `User location (${latitude}, ${longitude})`
          });
        },
        error => {
          console.error("Permission declined or error:", error);
          reject(error);
        }
      );
    });
  }

  /**
   * Check if permission is granted by attempting to get location
   * @returns {Promise<boolean>}
   */
  getIsPermissioned() {
    return this.permissionToUseLocation()
      .then(() => true)
      .catch(() => false);
  }
}