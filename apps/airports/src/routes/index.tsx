import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Header } from '../components';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

function Index() {
  console.log(process.env.NODE_ENV);

  return (
    <div className="p-8">
      <Header variant="h1">About</Header>
      <p className="mb-8">
        This app is a demonstration of Leaflet clustering technique.
      </p>
      <ul className="list-none flex flex-col gap-4">
        <li>
          <Header variant="h2">Static</Header>
          <p>
            GeoJSON staticly imported from file, using real data
            <br />
            Displaying worldwide airports data - over 8000 markers.
          </p>
        </li>
        <li>
          <Header variant="h2">Optimized</Header>
          <p>
            Using <em>supercluster</em> and <em>use-supercluster</em> libs.
            <br />
            Displaying Leicester area crimes data - 1500 markers.
          </p>
        </li>
      </ul>
    </div>
  );
}
