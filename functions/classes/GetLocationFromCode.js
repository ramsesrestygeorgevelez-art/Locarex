// GetLocationFromCode.js
import MapLocator from "./MapLocator.js";
import LocateFromCode from "./LocateFromCode.js";
import LocationProvider from "../../providers/LocationProvider.js";
export async function GetLocationFromCode(code) {
  // Initialize MapLocator with required options
  const locator = new MapLocator({
    containerId: "map",
    provider: new LocationProvider("LoProvide"),
    defaultCenter: { lat: 0, lng: 0 },
    defaultZoom: 2
  });
  locator.init();

  // Use LocateFromCode to resolve the code
  const resolver = new LocateFromCode({
    providers: [LocateFromCode.StaticProvider({
      "TAGUIG01": { lat: 14.5547, lng: 121.0244, address: "Taguig City Center" }
    })]
  });

  const result = await resolver.resolve(code);

  // Show result on the map
  locator.addMarker(result);
  locator.centerOn(result);

  return result;
}