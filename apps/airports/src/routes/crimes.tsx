import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { BaseMap } from '@mdc/map';
import { Routes } from './enum';
import { CrimesMarkers } from '../crimes/CrimesMarkers';

export const crimesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.CRIMES,
  component: Crimes,
});

function Crimes() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    >
      <CrimesMarkers />
    </BaseMap>
  );
}
