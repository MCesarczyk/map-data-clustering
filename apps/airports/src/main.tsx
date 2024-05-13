import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { rootRoute } from './routes/__root';
import { indexRoute } from './routes';
import { airportsRoute } from './routes/airports';
import { crimesRoute } from './routes/crimes';

import './styles.css';
// import './styles/leaflet.css';
// import './styles/markercluster.css';
// import './styles/mapboxgl.css';

const routeTree = rootRoute.addChildren([
  indexRoute,
  airportsRoute,
  crimesRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
