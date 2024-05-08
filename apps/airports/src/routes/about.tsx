import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Header } from '../components/Header';

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

function About() {
  return (
    <div className="p-8">
      <Header variant="h1">About this app</Header>
      <p>This app is a demonstration of Leaflet clustering technique.</p>
    </div>
  );
}
