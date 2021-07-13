interface Coordinates {
  latitude: string,
  longitude: string,
}

export interface Route {
  title: string,
  startPosition: Coordinates,
  endPosition: Coordinates,
}