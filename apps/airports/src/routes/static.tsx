import { createRoute } from '@tanstack/react-router';
import { BaseMap } from '@mdc/map';
import { rootRoute } from './__root';
import { MarkersStaticImported } from '../features';

export const staticRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/static',
  component: Static,
});

function Static() {
  return (
    <BaseMap
      apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
      height={800}
      width={100}
      zoom={5}
    >
      <MarkersStaticImported />
    </BaseMap>
  );
}
