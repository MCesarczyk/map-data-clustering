import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Routes } from './enum';
import { MarkersOptimized } from '../features';

export const optimizedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.OPTIMIZED,
  component: Optimized,
});

function Optimized() {
  return <MarkersOptimized />;
}
