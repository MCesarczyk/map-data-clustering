import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

function About() {
  return (
    <div>
      <h1>About this app</h1>
      <p>This app is a demonstration of Leaflet clustering technique.</p>
    </div>
  );
}
