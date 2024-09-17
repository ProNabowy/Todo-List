import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// Pages
const Home = lazy(_ => import('../pages/Home'));

export default function useHandleRoutes() {
  let routes = useRoutes([

    // This an example of create route
    { path: "/", element: <Home /> },
  ]);

  return { routes };
}
