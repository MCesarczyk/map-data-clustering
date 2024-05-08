import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
})

function Index() {
  return (
    <div>
      <h1>Welcome home!</h1>
      <p>Click on the links above to navigate.</p>
      <h2>Basic implementation</h2>
      <p>Without optimization, simply rendered data</p>
    </div>
  );
}
