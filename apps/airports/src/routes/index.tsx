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
          <Header variant="h2">Static</Header>
          <p>GeoJSON staticly imported from file</p>
        </li>
        <li>
          <Header variant="h2">Dynamic</Header>
          <p>Markers generated in a loop using faker-js</p>
        </li>
      </ul>
    </div>
  );
}
