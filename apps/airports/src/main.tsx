import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { rootRoute } from './routes/__root';
import { indexRoute } from './routes';
import { staticRoute } from './routes/static';
import { dynamicRoute } from './routes/dynamic';
import { optimizedRoute } from './routes/optimized';
import { unoptimizedRoute } from './routes/unoptimized';

import './styles/styles.css';
import './styles/leaflet.css';
import './styles/markercluster.css';
import './styles/mapboxgl.css';

const routeTree = rootRoute.addChildren([
  indexRoute,
  staticRoute,
  dynamicRoute,
  optimizedRoute,
  unoptimizedRoute,
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
