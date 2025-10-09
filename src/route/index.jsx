import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import DashboardUser from "../pages/dashboard/dashboardUsers/dashboardUser";
import Dashboard from "../pages/dashboard/dashboard";
import NotFound from "../pages/404notfound";

export default function App() {
  const router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/dashboard/user", element: <DashboardUser /> },
    { path: "/dashboard/product", element: <Dashboard /> },
  ]);

  return <RouterProvider router={router} />;
}
