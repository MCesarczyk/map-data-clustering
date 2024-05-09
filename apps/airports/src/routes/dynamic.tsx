import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { BaseMap } from '@mdc/map';
import { MarkersDynamicallyGenerated } from '../features';

export const dynamicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dynamic',
  component: Dynamic,
});

function Dynamic() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    >
      <MarkersDynamicallyGenerated />
    </BaseMap>
  );
}
