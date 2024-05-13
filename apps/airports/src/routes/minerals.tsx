import { createRoute } from '@tanstack/react-router';
import { BaseMap } from '@mdc/map';
import { rootRoute } from './__root';
import { Routes } from './enum';
import { MineralsMarkers } from '../minerals/MineralsMarkers';

export const mineralsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.MINERALS,
  component: Minerals,
});

function Minerals() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      center={[-33.1, 146.6]}
      zoom={4}
    >
      <MineralsMarkers />
    </BaseMap>
  );
}
