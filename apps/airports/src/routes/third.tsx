import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Header } from '../components';

export const thirdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/third',
  component: Third,
});

function Third() {
  return <Header variant="h1">w/clearLayers</Header>;
}
