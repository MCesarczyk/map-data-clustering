import { createRoute } from '@tanstack/react-router';
// import { BaseMap } from '@mdc/map';
import { rootRoute } from './__root';
import { Routes } from './enum';
import { generateSampleJson } from '@mdc/data';

export const mineralsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.MINERALS,
  component: Minerals,
});

const geoJSON = generateSampleJson();

function Minerals() {
  return (
    <pre>{JSON.stringify(geoJSON, null, 2)}</pre>
    // <BaseMap
    //   apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
    //   height={800}
    //   width={100}
    //   zoom={5}
    // >
    // </BaseMap>
  );
}
