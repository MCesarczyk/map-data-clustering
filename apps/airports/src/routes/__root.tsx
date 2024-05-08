import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navlink } from '../components/Navlink';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav className="bg-slate-700 p-2 flex gap-2">
        <Navlink path="/" label="Home" />
        <Navlink path="/basic" label="Basic" />
        <Navlink path="/about" label="About" />
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
