import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { BaseMap } from '@mdc/map';
import { Routes } from './enum';
import { MarkersUnoptimized } from '../features';

export const unoptimizedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.UNOPTIMIZED,
  component: Optimized,
});

function Optimized() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    >
      <MarkersUnoptimized />
    </BaseMap>
  );
}
