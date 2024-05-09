import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navlink } from '../components';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav className="bg-slate-700 p-2 flex gap-4">
        <Navlink path="/" label="Home" />
        <Navlink path="/static" label="Static" />
        <Navlink path="/dynamic" label="Dynamic" />
      </nav>
      <hr />
      <Outlet />
      {process.env.NODE_ENV !== 'production' && <TanStackRouterDevtools />}
    </>
  ),
});
