import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { rootRoute } from './routes/__root';
import { indexRoute } from './routes';
import { staticRoute } from './routes/static';
import { dynamicRoute } from './routes/dynamic';
import { optimizedRoute } from './routes/optimized';

import './styles.css';
import './leaflet.css';
import './markercluster.css';
import './mapboxgl.css';

const routeTree = rootRoute.addChildren([
  indexRoute,
  staticRoute,
  dynamicRoute,
  optimizedRoute,
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
