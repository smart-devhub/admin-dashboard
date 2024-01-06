import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/login";
import Calender from "../pages/calender";
import Dashboard from "../pages/dashboard";
import Products from "../pages/product/product";
import AllUsers from "../pages/users/alluser";

export const routesConfig = [
    {
      path: '/auth/login',
      component: Login,
      layout: AuthLayout,
    },
    {
      path: '/auth/register',
      component: Register,
      layout: AuthLayout,
    },
    {
      path: '/',
      component: Dashboard,
      layout: DashboardLayout,
    },
    {
      path: '/products',
      component: Products,
      layout: DashboardLayout,
    },
    {
      path: '/users',
      component: AllUsers,
      layout: DashboardLayout,
    },
    {
      path: '/calender',
      component: Calender,
      layout: DashboardLayout,
    },
  ];