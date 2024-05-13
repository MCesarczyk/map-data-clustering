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
          <Header variant="h2">Airports</Header>
          <p>
            GeoJSON staticly imported from file, using real data.
            <br />
            Displaying worldwide airports data - over 8000 markers placed
            globally.
          </p>
        </li>
        <li>
          <Header variant="h2">Crimes</Header>
          <p>
            Using GeoJSON from public police API.
            <br />
            Displaying Leicester area crimes data - 1500 markers, concentrated
            on chosen city area.
          </p>
        </li>
        <li>
          <Header variant="h2">Minerals</Header>
          <p>Displaying minerals distribution on Cobar Area in Australia.</p>
        </li>
      </ul>
    </div>
  );
}
