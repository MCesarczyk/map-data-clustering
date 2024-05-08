import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Header } from '../components/Header';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

function Index() {
  return (
    <div className="p-8">
      <Header variant="h1">Welcome home!</Header>
      <p className="mb-8">Click on the links above to navigate.</p>
      <ul className="list-none flex flex-col gap-4">
        <li>
          <Header variant="h2">Unoptimized</Header>
          <p>Without optimization, simply rendered data</p>
        </li>
      </ul>
    </div>
  );
}
