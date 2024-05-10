import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navlink } from '../components';
import { Routes } from './enum';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav className="bg-slate-700 p-2 flex gap-4">
        <Navlink path={Routes.HOME} label="Home" />
        <Navlink path={Routes.STATIC} label="Static" />
        <Navlink path={Routes.DYNAMIC} label="Dynamic" />
        <Navlink path={Routes.OPTIMIZED} label="Optimized" />
        <Navlink path={Routes.UNOPTIMIZED} label="Unoptimized" />
      </nav>
      <hr />
      <Outlet />
      {process.env.NODE_ENV !== 'production' && <TanStackRouterDevtools />}
    </>
  ),
});
