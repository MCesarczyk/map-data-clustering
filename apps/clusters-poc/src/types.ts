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
