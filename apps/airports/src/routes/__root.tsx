import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navlink } from '../components';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav className="bg-slate-700 p-2 flex gap-4">
        <Navlink path="/" label="Home" />
        <Navlink path="/basic" label="Unoptimized" />
        <Navlink path="/first" label="w/RemoveLayer" />
        <Navlink path="/second" label="w/RemoveLayers" />
        <Navlink path="/third" label="w/ClearLayers" />
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
