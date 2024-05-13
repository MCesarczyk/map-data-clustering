import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navlink } from '../components';
import { Routes } from './enum';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav className="bg-slate-700 p-2 flex gap-4">
        <Navlink path={Routes.HOME} label="Home" />
        <Navlink path={Routes.AIRPORTS} label="Airports" />
        <Navlink path={Routes.CRIMES} label="Crimes" />
        <Navlink path={Routes.MINERALS} label="Minerals" />
      </nav>
      <hr />
      <Outlet />
      {process.env.NODE_ENV !== 'production' && <TanStackRouterDevtools />}
    </>
  ),
});
