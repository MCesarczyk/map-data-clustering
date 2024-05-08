import { createRoute } from '@tanstack/react-router';
import { BaseMap } from '@mdc/map';
import { rootRoute } from './__root';
import { Markers } from '../components';

export const basicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/basic',
  component: Basic,
});

function Basic() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
    >
      <Markers />
    </BaseMap>
  );
}
