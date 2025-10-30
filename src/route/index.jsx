import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import DashboardUser from "../pages/dashboard/dashboardUsers/dashboardUser";
import Dashboard from "../pages/dashboard/dashboard";
import NotFound from "../pages/404notfound";
import AddUsers from "../pages/dashboard/dashboardUsers/addUser";
import DetailUser from "../pages/dashboard/dashboardUsers/detailUser";

export default function App() {
  const router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/dashboard/user", element: <DashboardUser /> },
    { path: "/dashboard/product", element: <Dashboard /> },
    { path: "/dashboard/user/add", element: <AddUsers /> },
    { path: "/dashboard/user/detail/:id", element: <DetailUser /> },
  ]);

  return <RouterProvider router={router} />;
}
