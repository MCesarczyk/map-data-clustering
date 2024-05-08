import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Header } from '../components';

export const firstRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/first',
  component: First,
});

function First() {
  return <Header variant="h1">w/removeLayer</Header>;
}
