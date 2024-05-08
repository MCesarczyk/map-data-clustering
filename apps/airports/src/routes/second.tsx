import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Header } from '../components';

export const secondRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/second',
  component: Second,
});

function Second() {
  return <Header variant="h1">w/removeLayers</Header>;
}
