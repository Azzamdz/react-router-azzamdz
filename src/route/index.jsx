import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/404notfound";

export default function App() {
  const router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  return <RouterProvider router={router} />;
}
