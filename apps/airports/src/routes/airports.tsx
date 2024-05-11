import { createRoute } from '@tanstack/react-router';
import { BaseMap } from '@mdc/map';
import { rootRoute } from './__root';
import { Routes } from './enum';
import { AirportsMarkers } from '../airports/AirportsMarkers';

export const airportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.AIRPORTS,
  component: Airports,
});

function Airports() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    >
      <AirportsMarkers />
    </BaseMap>
  );
}
