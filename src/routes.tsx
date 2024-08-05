import { Navigate } from "react-router-dom";
import DashboardSaaS from "./pages/dashboards/SaaS";
import DashboardLayout from "./components/Layouts/DashboardLayout";

const routes = [
  {
    path: "/",
    element: <Navigate to="dashboard" />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardSaaS />,
      },
    ],
  },
];

export default routes;
