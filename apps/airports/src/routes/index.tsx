import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Header } from '../components';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

function Index() {
  return (
    <div className="p-8">
      <Header variant="h1">About</Header>
      <p className="mb-8">
        This app is a demonstration of Leaflet clustering technique.
      </p>
      <ul className="list-none flex flex-col gap-4">
        <li>
          <Header variant="h2">unoptimized</Header>
          <p>Without optimization, simply rendered data</p>
        </li>
        <li>
          <Header variant="h2">w/removeLayer</Header>
          <p>RemoveLayer and addLayer methods are used.</p>
        </li>
        <li>
          <Header variant="h2">w/removeLayers</Header>
          <p>RemoveLayers and addLayer methods are used.</p>
        </li>
        <li>
          <Header variant="h2">w/clearLayers</Header>
          <p>ClearLayers and addLayers methods are used.</p>
        </li>
      </ul>
    </div>
  );
}
