import { createRoute } from '@tanstack/react-router';
import { BaseMap } from '@mdc/map';
import { rootRoute } from './__root';
import { Markers } from '../components/Markers';
import { Header } from '../components/Header';

export const basicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/basic',
  component: Basic,
});

function Basic() {
  return (
    <div>
      <Header variant="h1">Unoptimized</Header>
      <BaseMap apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY} height={800}>
        <Markers />
      </BaseMap>
    </div>
  );
}
