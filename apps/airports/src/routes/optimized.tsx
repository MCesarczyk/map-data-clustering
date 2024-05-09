import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Routes } from './enum';

export const optimizedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.OPTIMIZED,
  component: Optimized,
});

function Optimized() {
  return <h1 className="text-3xl font-bold p-8">Optimized</h1>;
}
