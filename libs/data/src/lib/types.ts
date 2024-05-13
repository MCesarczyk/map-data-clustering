export interface Marker {
  name: string;
  city: string;
  iata_faa: string;
  icao: string;
  lat: number;
  lng: number;
  alt: number;
  tz: string;
}

export interface MineralPoint {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [number, number]
  },
  properties: {
    name: string,
    value: number
  }
}
